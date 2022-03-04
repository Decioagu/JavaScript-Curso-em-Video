function calcular(){
    const num = document.getElementById('valor');
    const res = document.getElementById('res');
    
    if (num.value.length == 0){
        alert('[ERRO] falta valor "Digite um número"');
    } else {
        const n = parseInt(num.value)
        
        res.innerHTML = ''
        for (var cont = 1; cont <= 10; cont++){
            let item = document.createElement('option'); // cria "novo elemento" pelo JavaScript no HTML
            item.innerHTML = `${cont} x ${n} = ${cont*n}`; // cálculo a ser exibido
            /* item.value = `${cont}` */
            // exibição do "novo elemento"
            res.appendChild(item).style.textAlign = "left"; // (.style.textAlign = "left") o texto fica alinhado a esquerda
        }
    }
}