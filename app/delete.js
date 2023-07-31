const bin = document.getElementById("bin");

bin.addEventListener("click", () => {
  fetch('https://64c3c68667cfdca3b660452c.mockapi.io/todo/19', {
    method: 'DELETE',
  })
  .then(res => {
    if (res.ok) {
      return res.json();
    }
    // handle error
    throw new Error('Network response was not ok.');
  })
  .then(task => {
    // Do something with deleted task
    console.log("Task deleted:", task);
  })
  .catch(error => {
    // handle error
    console.error("Error:", error);
  });
});
