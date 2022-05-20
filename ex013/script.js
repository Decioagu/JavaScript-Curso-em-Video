function calcular(){
    const num = document.getElementById('valor');
    const res = document.getElementById('res');
    
    if (num.value.length == 0){
        alert('[ERRO] falta valor "Digite um número"');
    } else {
        const n = parseInt(num.value)
        
         // (etapa 4 - Opcional) limpa Tag "option" caso hajá texto pre existente
        res.innerHTML = ''
        for (var cont = 1; cont <= 10; cont++){
            // (etapa=1) cria "novo elemento" pelo JavaScript no HTML na tag "option"
            let item = document.createElement('option');
            // (etapa 2) adiciona valor  
            item.innerHTML = `${cont} x ${n} = ${cont*n}`; // cálculo a ser exibido
            /* item.value = `${cont}` */
            // (etapa 3) exibir novo elemento
            res.appendChild(item).style.textAlign = "left"; // (.style.textAlign = "left") o texto fica alinhado a esquerda
        }
    }
}