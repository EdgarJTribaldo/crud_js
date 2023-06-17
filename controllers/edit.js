import { clienteServices } from "../service/client-service.js";

const form = document.querySelector("[data-form]");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
 
  const data = {
    nombre: form.nombre.value,
    email: form.email.value
  }

  clienteServices.editarMiembro(data).then(() => {
    window.location.href = "../screens/edicion_concluida.html"
}).catch(error => console.log(error))
  console.log(data);


})
