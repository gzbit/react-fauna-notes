import { client, q } from '../_config/db'

const updateNote = (noteId: number, newText: string) => client.query(
    q.Update(
        q.Ref(q.Collection('notes'), noteId),
        { data: { text: newText } }
    )
).then(
    ret => console.log(ret)
).catch(
    err => console.warn('Error: ', err.message)
)

export default updateNote