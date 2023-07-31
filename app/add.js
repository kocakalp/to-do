
const addjs = document.querySelector('#add');

const add = async () => {
    const todoInput = document.getElementById("todo").value;
    
    if (!todoInput) {
        console.log("Please enter a task.");
        return;
    }

    const newUser = {
        todo: todoInput
    };
    
    try {
         const res = await fetch('https://64c3c68667cfdca3b660452c.mockapi.io/todo', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(newUser)
         } );
         const data = await res.json();
    
         if(!res.ok) {
             console.log('Problem');
             return;
         }
 
        
         
         console.log(data);
     } catch (error) {
         console.log(error);
     }
    
 }
 addjs.addEventListener('click', add);