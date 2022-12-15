// import path from'path'
// import fs from'fs/promises'
// exportasyncfunctionhandler(event, context){​​
// constfilePath= path.resolve('./db/todos.json')
// // stream buffer
// constdata=await fs.readFile(filePath, "utf-8")
// return {​​
// statusCode:200,
// body: data
//     }​​
// }
export async function handler (event, content){
    return {
        statusCode:200,
        body: JSON.stringify({path:"/api/todos"})
    }
}