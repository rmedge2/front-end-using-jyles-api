// Retrieving the information from the api

let buttonGenerate = document.getElementById('generator')
// let 

buttonGenerate.addEventListener('click', (event)=>{
    event.preventDefault

    fetch(`http://localhost:3000/sports`)
        .then(response => {
            console.log(response.status)
            return response.json()})
        .then(data =>{
            console.log(data)
            console.log(data[4].Name)
            console.log(`My favorite basektball player is ${data[4].Name}`)
            // console.log(data[0].id)
        })
})

// function getPlayers() {
//     fetch(`http:`)
// }

// function to disp