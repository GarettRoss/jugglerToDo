/* make a connection between the client and the server ----- server (cloud function) 
fetch(url)

Path to all of your functions
DOCS for any service tell you how to access the cloud function from the client (web browser) (firebase IOS / ANDROID/WEB/UNITY)
/.netlify/functions/fn(name)

/.netlify/functions/todos ---- the route (path to a function)
*/

async function getToDos(){
    const res = await fetch('/.netlify/functions/todos')
   
    const data = await res.json()
   
    
}

getToDos()