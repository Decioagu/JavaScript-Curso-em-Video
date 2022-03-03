function carregar(){
    var msg = document.getElementById('msg');
    var img = document.getElementById('imagem');
    var hora = new Date().getHours();
    var min = new Date().getMinutes();

    msg.innerHTML = `Agora são ${hora}:${min}`
    
    if (hora >= 6 && hora < 12){
        img.src = '1manha.png';
        document.body.style.background = '#FDFFA9';
    } else if (hora >= 12 && hora < 18){
        img.src = '2tarde.png';
        document.body.style.background = '#4FD3C4';
    } else {
        img.src = '3noite.png';
        document.body.style.background = '#151D3B';
    }

}