//backticks

import { clienteServices } from "../service/client-service.js";

const crearNuevaLinea = (nombre, email, id) => {
  const linea = document.createElement("tr");
  const contenido = `
    <td class="td" data-td>
      ${nombre}
    </td>
    <td>${email}</td>
    <td>
      <ul class="table__button-control">
        <li>
          <a
            href="../screens/editar_cliente.html?{id}"
            class="simple-button simple-button--edit"
          >
            Editar
          </a>
        </li>
        <li>
          <button class="simple-button simple-button--delete" type="button" id="${id}">
            Eliminar
          </button>
        </li>
      </ul>
    </td>
  `;
  linea.innerHTML = contenido;
  const btnEliminar = linea.querySelector("button");
  btnEliminar.addEventListener("click", () => {
    const id = btnEliminar.id;
    clienteServices.eliminarUser(id).then((respuesta) =>  {console.log(respuesta)}
    ).catch((err) => alert("Ocurrio un error"))
  });
  return linea;
};

const table = document.querySelector("[data-table]");

clienteServices.listaClientes()
 .then((data) => {
    data.forEach((perfil) => {
      const nuevaLinea = crearNuevaLinea(perfil.name, perfil.email, perfil.id);
      table.appendChild(nuevaLinea);
    });
  })
  .catch((error) => alert("Ocurrió un error"));


// console.log(data);
//