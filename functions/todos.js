import path from 'path'
import fs from 'fs/promises'

export async function handler(event, context){
    const filePath = path.resolve('./db/todos.json')
    const data = await fs.readFile(filePath, "utf-8")
    return {
        statusCode: 200,
        body: JSON.stringify({path:"/todos/all"})
    }
}

