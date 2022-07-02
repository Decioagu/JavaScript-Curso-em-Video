    const num = document.getElementById('adicionar');
    const listaValores = document.getElementById('listaValores');
    const res = document.getElementById('res');
    let lista = [];
    let analisarLista = false

function adicionar(){
    const n = parseInt(num.value)

    if (num.value.length == 0){
        alert('[ERRO] falta valor "Digite um número"');
    } else if (num.value > 100 || num.value < 1){
        alert('[ERRO] Valor deve ser entre 1 e 100');
    } else {

        for (let index = 0; index < lista.length; index++) {
        // Caso "n" esteja na lista "analisarLista" igual VERDADE
            if (n === lista[index]){
                analisarLista = true
                break // para o Loop
            } 
        } 
        
        // (etapa 1) cria "novo elemento" pelo JavaScript no HTML na Tag "option" (Tag conforme escolha)
        let valorNum = document.createElement('option'); // https://www.youtube.com/watch?v=eC-z9oHLzBc

        // (etapa 2 - Opcional) limpa Tag "option" caso hajá texto pre existente 
        if (lista.length == 0) {
            listaValores.innerHTML = ''
        }
        
        // logica invertida devido=(!) "!analisarLista" igual FALSO (não esta na "Lista")
        if (!analisarLista) {
            // adicionar final da lista
            lista.push(n)
            // (etapa 3) adiciona valor 
            valorNum.innerHTML = `Valo ${n} adicionado`
            // (etapa 4) exibir novo elemento no id="res" no HTML
            listaValores.appendChild(valorNum)
            res.innerHTML = ''
        } else {alert('[ERRO] Valores repetidos não são adicionados na lista');}
        analisarLista = false // Sempre voltar a condição inicial   
    }
    num.value = ''
    num.focus()
}

function resultado() {
    let soma = 0
    let menor = lista[0]
    let maior = lista[0]

    for (let valor of lista){
        soma += valor
        if (menor > valor){
            menor = valor
        }
        if (maior < valor){
            maior = valor
        }
    }
    
    if (lista.length == 0) {
        alert('[ERRO] Não foi adicionado valores para calcular');
    } else {
        res.innerHTML = `Lista = [${lista}]`
        res.innerHTML += `<p>Foram analisado ${lista.length} valores</p>`
        res.innerHTML += `<p>O menor valos registrado foi ${menor}</p>`
        res.innerHTML += `<p>O maior valos registrado foi  ${maior}</p>`
        res.innerHTML += `<p>A soma de todos os valores é  ${soma}</p>`
        // variavel.toFixed(quantidade) <=> numero de casas decimais
        res.innerHTML += `<p>A média dos valores é  ${(soma/lista.length).toFixed(2)}</p>` 
    }  
}

function listaDeValores() {
    num.value = ''
    num.focus()
    lista = []
    res.innerHTML = ''
    listaValores.innerHTML = ''
}
