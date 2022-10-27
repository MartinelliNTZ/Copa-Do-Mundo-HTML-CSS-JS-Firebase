import app  from './firebase.js'
import { getFirestore, doc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js";

const db = getFirestore(app);
 var brScore = 0;

onSnapshot(doc(db, 'matches', "br-01"), (doc) => {
    const {br, sv} = doc.data()
    const other = sv;
    updateScore("br-01", br, other)

    if(br>brScore){
        showConfet("br-01")
        throwGalvao()
        showEmoji()
        brScore = brScore+1;
        console.log("Current data: ", doc.data());
    }
   
});
function throwGalvao(){
    const audio =new Audio('assets/audio/gol.mp3')
    audio.playbackRate = 2
  //  audio.play()
}
function updateScore(id, br, other){
    const element = document.getElementById(id);
    element.innerText = `${br} x ${other}`
    
}

function showEmoji(){
    const emoji = document.getElementById('emoji-gol');
    emoji.classList.add('show')
    setTimeout(()=>{
        emoji.classList.remove('show')
    },4000)
}

/**Document.get elemente pega o id do que foi atribuido ao item pela marcação html*/
function showConfet(id){        
        const element = document.getElementById(id)
        party.confetti(element)
        
}

/**O set interval é uma função que se repete varias vezes 5000=5s */
setInterval(() => {
    
    
},1000)