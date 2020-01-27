import { client, q } from '../_config/db'

const createNote = (text: string) => client.query(
    q.Create(
        q.Collection('notes'),
        {
            data: { text }
        }
    )
).then(
    ret => ret
).catch(
    err => console.warn('Error: ', err.message)
)

export default createNote