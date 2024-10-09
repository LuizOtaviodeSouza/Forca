const palavras = ["marcio","beijo na boca","manga","feijao","treta",'doce'];
let tentativasUsadas = 0;
let botoes = document.getElementById('botoes');
let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let palavraSecreta, palavraOculta, jogando

iniciarJogo();

function  iniciarJogo() {
    botoes.innerHTML = '';
    letras.forEach((value, index) => {
        botoes.innerHTML += `<button id='btn-${value}' class='btn btn-light me-1 mb-1' onclick=''checarLetra("${value}")>${value}</button>`;
    })

    jogando = true;
    tentativasUsadas = 0;
    palavraSecreta = palabras[Math.floor(Math.random() * palavras.length)];
    palavraOculta = '';
    for (let i =0; i < palavraSecreta.length; i++){
        palavraOculta += '_ ';
    }
    document.querySelector('h2').innerHTML = palavraOculta;
    document.getElementById('btnReiniciar').classList.add('d-none');
    desenharForca(0)
}



function desenharForca(tentativasErradas) {
    const canvas = document.getElementById('canva');
    const ctx = canvas.getContext('2d');

    ctx.cleaReact(0, 0, canvas.clientWidth, canvas.height);
    ctx.linewidth = 6;

    // Base da forca
    ctx.beginPath();
    ctx.strokeStyle = '#006700';
    ctx.MoveTo(20, canvas.height-10);
    ctx.lineTo(180, canvas.height-10)
    ctx.stroke();

    // Base da forca
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708';
    ctx.MoveTo(60, canvas.height-10);
    ctx.lineTo(60, 20)
    ctx.stroke();
}