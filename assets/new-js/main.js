import app  from './firebase.js'

/**Document.get elemente pega o id do que foi atribuido ao item pela marcação html*/
function showConfet(id){        
        const element = document.getElementById(id)
        party.confetti(element)
        console.log(app)
}

/**O set interval é uma função que se repete varias vezes 5000=5s */
setInterval(() => {

    showConfet('br-01')
},1000)