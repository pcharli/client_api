const urlApi = 'http://localhost/ingrwf10/api_php/'
const connectForm = document.querySelector('.connexion')

connectForm.addEventListener('submit', (e) => {
    e.preventDefault()
    let ident = {
        login: document.querySelector('.login').value ,
        password: document.querySelector('.password').value
    }
    console.log(ident)
    fetch(urlApi + 'auth', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: "no-cors",
        body: JSON.stringify(ident)
    })
    .then(response => {
        response.json()
    })
    .then (response => {
        console.log(response)
    })
    .catch(error => console.error(error))
})

fetch(urlApi+'deconnect')
.then(response=>response.json())
.then(response=>{
    console.log(response)
})
