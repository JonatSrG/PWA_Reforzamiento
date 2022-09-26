// Ejercicio #2
// ==============================================
/*
 Similar al ejercicio anterior... haga un llamado a la misma api
 (puede reutilizar el código )
 https://swapi.dev/api/people/1/
 
 Pero con el nombre y el género, haga un posteo
 POST a: https://reqres.in/api/users

 Imprima en consola el objeto y asegúrese que tenga
 el ID y la fecha de creación del objeto
*/

// Resolución de la tarea #2

function post(persona) {

    let Data = {
        nombre: persona.name,
        genero: persona.gender
    };

    return fetch('https://reqres.in/api/users', {

        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }

    });

}

fetch('https://swapi.co/api/people/1/')
    .then(resp => resp.json())
    .then(postData)
    .then(resp => resp.json())
    .then(console.log);