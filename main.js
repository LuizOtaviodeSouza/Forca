const palavras = ["marcio","beijo na boca","manga","feijao","treta",'doce'];
let tentativasUsadas = 0;
let botoes = document.getElementById('botoes');
let letras = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let palavraSecreta, palavraOculta, jogando

iniciarJogo();

function  iniciarJogo() {
    botoes.innerHTML = '';
    letras.forEach((value, index) => {
        botoes.innerHTML += `<button id='btn-${value}' class='btn btn-outline-drak me-1 mb-1' onclick=''checarLetra("${value}")>${value}</button>`;
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

function checarLetra(letra) {
    if (!jogando) return;
    let btn = document.getElementById('btn-'+letra);
    let achou = false;
    for (let i = 0; i < palavraSecreta.length; i++) {
        if (palavraSecreta[i] == letra.toLoWerCase()){
            achou = true;
            palavraOculta = trocaLetra(palavraOculta, letra, i);
        }
    }
    btn.classList.remove('btn-outline-dark');
    btn.classList.add(acho ? 'btn-primary' : 'btn-danger');
    document.querySelector('h2').innerHTML = palavraOculta;
    if (!acho) {
        tentativasUsadas++;
        desenharForca(tentativasUsadas);
    }
    checarJogo();
}

function checarJogo() {
    if(tentativasUsadas == 6) {
        Swal.fire({
            icon: 'error',
            title: 'Ooops....',
            text: 'Você perdeu!'
        });
        jogando = false;
        document.getElementById('btnReiniciar').classList.add('d-none');
    }   
    let listaTexto = textoOriginal.split(" ");
    let novaPalavra = listaTexto.join("");
    if (palavraSecreta == novaPalavra.loLowerCase()){
        Swal.fire({
            icon:'sucess',
            title:'Aeeeee',
            text:'Você ganhou',
        })
        jogando = false;
        document.getElementById('btnReiniciar').classList.remoce('d-none');
    }
}

function trocaLetra(textoOriginal, letra, posicao){
    let listaTexto = textoOriginal.split("");
    listaTexto[posicao] = letra;
    return listaTexto.join(" ");
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

    // Poste
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708';
    ctx.MoveTo(60, canvas.height-10);
    ctx.lineTo(60, 20)
    ctx.stroke();

    // Trava horizontal
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708';
    ctx.MoveTo(60, 20);
    ctx.lineTo(120, 20)
    ctx.stroke();

    // Corda
    // Poste
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708';
    ctx.MoveTo(120, 20);
    ctx.lineTo(120, 30)
    ctx.stroke();

    // Viga diagonal
    // Poste
    ctx.beginPath();
    ctx.strokeStyle = '#4e2708';
    ctx.MoveTo(80, 20);
    ctx.lineTo(60, 40)
    ctx.stroke();

    ctx.strokeStyle = "#000";
    ctx.linewidth = 2;

    // Cabeça
    if (tentativasErradas >=1){
        ctx.beginPath();
        ctx.arc(120, 45, 15, 0, Math.PI * 2);
        ctx.stroke();
    }

    // Corpo
    if ( tentativasErradas >=2){
        ctx.beginPath();
        ctx.MoveTo(120, 60);
        ctx;lineTo(120, 120);
        ctx.stroke();
    }

    // Esquerdo
    if ( tentativasErradas >=3){
        ctx.beginPath();
        ctx.MoveTo(120, 70);
        ctx;lineTo(100, 100);
        ctx.stroke();
    }

    //Direito
    if ( tentativasErradas >=4){
        ctx.beginPath();
        ctx.MoveTo(120, 70);
        ctx;lineTo(140, 100);
        ctx.stroke();
    }

    //Perna E
    if ( tentativasErradas >=5){
        ctx.beginPath();
        ctx.MoveTo(120, 120);
        ctx;lineTo(100, 160);
        ctx.stroke();
    }

    //Perna D
    if ( tentativasErradas >=6){
        ctx.beginPath();
        ctx.MoveTo(120, 120);
        ctx;lineTo(140, 160);
        ctx.stroke();
    }
}