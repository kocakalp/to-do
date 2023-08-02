const bin = document.getElementById("bin");// get element sadece ID özelliği ie çalışır ve querySelectorre gçre daha hızlıdır

bin.addEventListener("click", () => {
  
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
});

  
  
  
  
  
  
  
  
  
  
  
  /*fetch('https://64c3c68667cfdca3b660452c.mockapi.io/todo/20', {
    method: 'DELETE',
  })*/
  
  
  