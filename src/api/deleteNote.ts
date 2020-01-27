import { client, q } from '../_config/db'

const deleteNote = (noteRef: number) => client.query(
    q.Delete(q.Ref(q.Collection('notes'), noteRef))
).then(
    (res: any) => res
).catch(
    err => console.warn('Error: ', err.message)
)

export default deleteNote