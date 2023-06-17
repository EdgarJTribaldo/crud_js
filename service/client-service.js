//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

const listaClientes = () => 
 /* const promise = new Promise((resolve, reject) => {
    const http = new XMLHttpRequest();
    // Abrir http (metodo,url );
    http.open("GET", "http://localhost:3000/perfil");

    http.send();
    
    http.onload = () => {
      const response = JSON.parse(http.response);
      if (http.status >= 400) {
        reject(response);
      } else {
        resolve(response);
      }
    };
  });
  return promise; */

  fetch("http://localhost:3000/perfil").then((respuesta) => respuesta.json());




/* Encadenar diferentes funciones sin incurrir en un CallBack Hell
Promise.all([
    moverPersonaje(‘100’, ‘Izquierda’),
    moverPersonaje(‘800’, ‘Derecha’),
    moverPersonaje(‘200’, ‘Izquierda’),
    moverPersonaje(10, ‘Izquierda’),
    moverPersonaje(‘60’, ‘Izquierda’)
])
.then(...)

Fetch Api: Es una funcion que ya viene nativa con javascript que soluciona el problema de usar tanto para hacer llamadas al servidor: Manera mas eficas de trabajar con promesas.

*/

// Register User Post 

const newUser = (registerUser) => {
  const data = {
    name: registerUser.nombre,
    email: registerUser.email,
    id: uuid.v4()
  };
  return fetch("http://localhost:3000/perfil", {  
  method: "POST",
  headers: {
  "Content-Type": "application/json",
},
  body: JSON.stringify(data)
})
}

// Eliminar persona 
const eliminarUser = (id) => {
  return fetch(`http://localhost:3000/perfil/${id}` , {
    method: "DELETE",
  });
};


// Editar miembro

const editarMiembro = (data) => {
  // Realizar solicitud PUT o PATCH al servidor
  fetch(`http://localhost:3000/${id}`, {
    method: 'PUT', // O utiliza 'PATCH' si corresponde
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then(response => {
    if (response.ok) {
      // El miembro se editó correctamente
      console.log('El miembro se editó correctamente');
      // Aquí puedes realizar cualquier otra acción que desees después de la edición
    } else {
      // Error al editar el miembro
      console.error('Error al editar el miembro');
    }
  })
  .catch(error => {
    // Error de conexión o de otro tipo
    console.error('Error en la solicitud de actualización:', error);
  });
};


export const clienteServices = {
  listaClientes,
  newUser,
  eliminarUser,
  editarMiembro,
}
