document.addEventListener("DOMContentLoaded", ()=>{
let form = document.getElementById("formulario");


form.addEventListener("submit", (e) => {
    e.preventDefault(); //Evita que se envien datos por defecto al servidor

    const datosFormulario = new FormData(formulario); // Objeto FormData para permitirnos obtener los datos del formulario
    const options = {
    method: "POST",
    body: datosFormulario
  };
  
    fetch("https://jsonplaceholder.typicode.com/users", options) //Se envian los datos 
    .then(response => response.json())
    .catch((error) => console.error("Error:", error))
    .then((response) => console.log("Success:", response));
})




})

