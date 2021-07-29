document.body.addEventListener('keyup', (event)=>{
    /*console.log(event.code); para o código reconhecer qual tecla foi apertada */
    playSound(event.code.toLocaleLowerCase()); //para tocar o som da tecla apertada
});

document.querySelector('.composer button').addEventListener('click', () => { //chamando o botão tocar
    let song = document.querySelector('#input').value; //ler os valores digitados

    if(song !== '') { //transforma as teclas digitadas em array
        let songArray = song.split('');
        playComposition(songArray);
    }
});

function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`); //achar o som da tecla apertdada
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); //formatar cores do elemento Key do CSS quando apertada

    if(audioElement) { //Se achar o audio da tecla apertdada
        audioElement.currentTime = 0; //não espera o som terminar para iniciar novamente caso seja apertado
        audioElement.play(); //toca o audio
    }

    if(keyElement) {
        keyElement.classList.add('active'); //Adiciona formatação Elemento Key do CSS

        setTimeout(()=>{
            keyElement.classList.remove('active'); //remove formatação depois de 0,3 segundos
        }, 300);
    }

}

function playComposition(songArray) { //função para compor a música

    let wait = 0; //inicia no tempo 0

    for(let songItem of songArray) { //tocar o som dos itens descrios na array
        setTimeout(() => {
            playSound(`key${songItem}`);
        }, wait);
        
        wait += 250; //intervalo de som de 0,250s
        
    }
}