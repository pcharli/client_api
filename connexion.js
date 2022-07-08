const urlApi = 'http://localhost/ingrwf10/api_php/'
        const connectForm = document.querySelector('.connexion')
        const deconnectLink = document.querySelector('.deconnexion')

        deconnectLink.addEventListener('click', (e) => {
            e.preventDefault()
            fetch(urlApi + 'deconnect')
            .then(response => response.json())
            .then(response => {
                console.log(response)
            })
            .catch(error => console.error(error))
        })


        connectForm.addEventListener('submit', (e) => {
            e.preventDefault()
            let ident = {
                login: document.querySelector('.login').value ,
                password: document.querySelector('.password').value
            }

            fetch(urlApi + 'auth', {
                headers: {
                    "content-type": "application/json"
                },
                //mode:"no-cors",
                method: 'POST',
                body: JSON.stringify(
                    ident
                )
            })
            .then(response => response.json())
            .then(response => {
                console.log(response)
                if(response.code == 200) {
                    localStorage.setItem('token', response.token)
                }
            })
            .catch(error => console.log(error))
        })