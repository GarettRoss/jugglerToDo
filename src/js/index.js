/* make a connection between the client and the server ----- server (cloud function) 
fetch(url)

Path to all of your functions
DOCS for any service tell you how to access the cloud function from the client (web browser) (firebase IOS / ANDROID/WEB/UNITY)
/.netlify/functions/fn(name)

/.netlify/functions/todos ---- the route (path to a function)
*/
import {categoryTemplates} from './templates/categories'



async function appInit(){
    const res = await fetch('/.netlify/functions/todos')
 
    const todos = await res.json()
    const containerElement = document.createElement('div')
    let markup = ''
    todos.forEach(todo =>{
        const template = categoryTemplates[todo.category](todo)
        markup += template
    })
   
    containerElement.innerHTML = markup
    document.querySelector('main').append(containerElement)
}

appInit()