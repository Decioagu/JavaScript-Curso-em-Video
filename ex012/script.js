function contador(){
    let inicio = parseInt(document.getElementById('inicio').value);
    let fim = parseInt(document.getElementById('fim').value);
    let passo = parseInt(document.getElementById('passo').value);
    let res = document.getElementById('res');

    if (passo < 0){
        passo = passo * (-1)
    }

    if (passo == 0){
        alert('Impossivel contar passo deve ser  ≠ de zero "0"');
    } else {
        res.innerHTML = "Contando:";

        if (inicio < fim){
            let cont = inicio
            while (cont <= fim){
                res.innerHTML += `${cont} &#8594; `;
                cont += passo
                
            }
        } else if (inicio > fim){
            for (cont = inicio; cont >= fim; cont -= passo){
                res.innerHTML += `${cont} &#8594; `;
            }      
        }
        res.innerHTML += '\u{1F44A}'
    }
}