import { client, q } from '../_config/db'



const getAllNotes = client.query(
    q.Paginate(
        q.Match(
            q.Ref('indexes/all_notes')
        )
    )
).then(
    (response: any) => {
        const noteRefs = response.data

        // create a new query out of note refs
        // FQL
        const getAllProductDataQuery = noteRefs.map(
            (ref: number) => q.Get(ref)
        )

        // query the refs
        return client.query(
            getAllProductDataQuery
        ).then( 
            (data: any) => data 
        )
    }
).catch(
    error => console.warn('error', error.message)
)

export default getAllNotes