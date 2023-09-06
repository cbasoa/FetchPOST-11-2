document.addEventListener("DOMContentLoaded", ()=>{
let form = document.getElementById("formulario");


form.addEventListener("submit", (e) => {
    e.preventDefault(); //Evita que se envien datos por defecto al servidor
    let nombre = document.getElementById("name").value;
    let apellido = document.getElementById("lastname").value;
    let date = document.getElementById("date").value;
    
    const datosFormulario = { //Objeto que sera pasado al body para que lo convierta en JSON
      name: nombre,
      lastename: apellido,
      date: date

    }
    const options = {
    method: "POST",
    body: JSON.stringify(datosFormulario),
    headers: {

      'Content-Type': 'application/json'
      
      }
  };
  
    fetch("https://jsonplaceholder.typicode.com/users", options) //Se envian los datos 
    .then(response => response.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
})




})

