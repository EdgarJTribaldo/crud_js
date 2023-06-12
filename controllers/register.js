import { clienteServices } from "../service/client-service.js"

const form = document.querySelector("[data-form]");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const registerUser = {
    nombre: form.nombre.value,
    email: form.email.value
  }

  clienteServices
    .newUser(registerUser)
    .then(() => {
      window.location.href = "../screens/registro_completado.html"
  }).catch(error => console.log(error))

});
