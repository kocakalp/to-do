const buttonjs = document.querySelector('button');



const whenClicks = async () => {
   try {
        const res = await fetch('https://64c3c68667cfdca3b660452c.mockapi.io/todo');
        const data = await res.json();
   
        if(!res.ok) {
            console.log('Problem');
            return;
        }

        console.log(data);
        
        console.log(data[3].todo);
    } catch (error) {
        console.log(error);
    }


 
  



   
   
   
   
}

buttonjs.addEventListener('click', whenClicks);