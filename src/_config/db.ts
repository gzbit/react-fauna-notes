import faunadb from 'faunadb'
import getKey from './config'

const client = new faunadb.Client({ secret: getKey() })
const q = faunadb.query

export { client, q }