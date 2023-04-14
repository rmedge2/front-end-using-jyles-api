// Retrieving the information from the api

let idInput = document.getElementById('idInput')
let form = document.querySelector('form')
let section = document.querySelector('section')

function getPlayerOptions() {
    fetch(`http://localhost:3000/sports`)
        .then(response => {
            console.log(response.status)
            return response.json()
        })
        .then(data => {
            console.log(data)
            data.map(player => {
                let x = document.createElement('option')
                x.innerHTML = player.id
                idInput.appendChild(x)
            })
        })
}
getPlayerOptions()

form.addEventListener('submit', (event) => {
    event.preventDefault()
    let playerID = idInput.value
    displayPlayer(playerID)
})

function displayPlayer(option) {
    fetch(`http://localhost:3000/sports/${option}`)
        .then(response => {
            console.log(response.status)
            return response.json()
        })
        .then(data =>{
            console.log(data)
            let playerInfo = document.createElement("div")
            playerInfo.innerHTML = `            <div class="card" style="width: 18rem;">
            <div class="card-body">
                <h5 class="card-title">${data.Name}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">${data.Position}</h6>
                <p class="card-text">${data.Team}</p>
            </div>
        </div>

            `
            section.appendChild(playerInfo)
        })
}

