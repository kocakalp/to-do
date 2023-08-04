
async function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    let api = [];
    if (inputValue === '') {
      alert("You must write something!");
    }
      document.getElementById("ulElement").appendChild(li);
      const newUser = {
        todo: inputValue
        
    };
    api.push(inputValue);
    console.log(api);
    
    
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    
    var svgIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16"> \
    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/> \
    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/> \
    </svg>';
    
    
    span.innerHTML = svgIcon;
    span.className = "close";
    li.appendChild(span);

    span.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
    fetch('https://64c3c68667cfdca3b660452c.mockapi.io/todo', {
    method: 'GET',
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    // Alınan veriler arasından en sonuncuyu tespit ediyoruz
    const lastData = data[data.length - 1];
    console.log("Last data:", lastData);
    
    // En sonuncu veriyi siliyoruz
    return fetch(`https://64c3c68667cfdca3b660452c.mockapi.io/todo/${lastData.id}`, {
      method: 'DELETE',
    });
  })
  .then(task => {
    // Do something with deleted task
    console.log("Task deleted:", task);
  })
  .then(() => {
    api.pop();
    console.log(api);
  })
  .catch(error => {
    // handle error
    console.error("Error:", error);
  });


    }

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

        console.log("Task added:", data);
        
        
   } catch (error) {
       console.log(error);
    }
  }
    
    
    
  




  

 
 
 
 

   
    
   

  




  