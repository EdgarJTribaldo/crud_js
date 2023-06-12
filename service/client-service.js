//Abrir http (método,url)

// CRUD   - Métodos HTTP
// Create - POST
// Read   - GET
// Update - PUT/PATCH
// Delete - DELETE

const listaClientes = () => {
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

  return fetch("http://localhost:3000/perfil/").then( respuesta => {
    return respuesta.json();
  });
};



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
  console.log(data);
 return fetch("http://localhost:3000/perfil/", {  
  method: "POST",
  headers: {
  "Content-Type": "application/json"},
  body: JSON.stringify(data)
})
}

export const clienteServices = {
  listaClientes,
  newUser,
}
