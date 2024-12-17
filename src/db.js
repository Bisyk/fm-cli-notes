import fs from 'fs/promises'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const DB_PATH = path.join(__dirname, '..', '/db.json')

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, 'utf-8', data => data)
  return JSON.parse(db)
}

export const saveDB = async db => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2))
  return db
}

export const insertDB = async data => {
  const db = await getDB()
  db.notes.push(data)
  await saveDB(db)
  return data
}