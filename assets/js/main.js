/**Ultilizar o firebase */
/*importar  aplicativo   de  './firebase.js'
import  {  getFirestore ,  doc ,  onSnapshot  }  de  "https://www.gstatic.com/firebasejs/9.12.1/firebase-firestore.js" ;

const  db  =  getFirestore ( app ) ;
 var  brPontuação  =  0 ;

onSnapshot ( doc ( db ,  'matches' ,  "br-01" ) ,  ( doc )  =>  {
    const  { br , sv }  =  doc . dados ( )
    const  outro  =  sv ;
    updateScore ( "br-01" ,  br ,  outro )

    if ( br > brScore ) {
        showConfet ( "br-01" )
        jogar Galvão ( )
        mostrar emoji ( )
        brPontuação  =  brPontuação + 1 ;
        consola . log ( "Dados atuais: " ,  doc . data ( ) ) ;
    }
   
} ) ;
função  throwGalvão ( ) {
    const  audio  = new  Audio ( 'assets/audio/gol.mp3' )
    áudio . taxa de reprodução  =  2
  // audio.play()
}
function  updateScore ( id ,  br ,  other ) {
    const  elemento  =  documento . getElementById ( id ) ;
    elemento . innerText  =  ` ${ br } x ${ other } `
    
}

function  showEmoji ( ) {
    const  emoji  =  documento . getElementById ( 'emoji-gol' ) ;
    emoji . classList . adicionar ( 'mostrar' )
    setTimeout ( ( ) => {
        emoji . classList . remover ( 'mostrar' )
    } , 4000 )
}

/**Document.get elemento pega o id do que foi atribuído ao item pela marcação html
function  showConfet ( id ) {        
        const  elemento  =  documento . getElementById ( id )
        festa . confete ( elemento )
        
}

/**O set interval é uma função que se repete varias vezes 5000=5s 
setIntervalo ( ( )  =>  {
    
    
} , 1000 )*/