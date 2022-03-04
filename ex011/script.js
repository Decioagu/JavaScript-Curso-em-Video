function analise(){
    let hoje = new Date().getFullYear(); // ano retirado do calendario atrual "Sistema Operacional"
    let ano = parseInt(document.getElementById('ano').value); // ano digitado pelo usuário
    let sexo = document.getElementsByName('sexo'); // sexo selecionado pelo usuário
    let idade = hoje - ano;
    let res = document.getElementById('res'); // resposta no site para usuário
    let genero = ''; // conforme sexo selecionado
    let img = document.createElement('img'); // imagem exibida ao usuário
    
    // "ano" escolhido pelo usuário deve ser maior 0 ou menor que data atual "hoje" 
    if (ano < 0 || ano > hoje){
        alert('[ERRO] Verifique o "Ano de nascimento"!!!' )
    } else {

        // escolha do sexo para mensagem "genero" <=> "sexo[0].checked = Homem" <=> "sexo[1].checked = Mulher"
        if (sexo[0].checked){
            genero = 'Homem';
        } else {
            genero = 'Mulher';
        } 

        // mensagem para usuario conforme "idade" e "genero"
        res.style.textAlign = "center";
        if (idade == 1 || idade == 0){
            res.innerHTML = `${genero} de ${idade} ano<br><br>`;
        } else { res.innerHTML = `${genero} de ${idade} anos<br><br>`;}
        
        // cria "novo elemento" pelo JavaScript no HTML
        img.setAttribute('id', 'foto'); 
       
        // imagem conforme "sexo" e "idade"
        if (sexo[0].checked){
            if (idade <= 3){
                img.setAttribute('src', 'bebeh.png');  
            } else if (idade <= 12){
                img.setAttribute('src', 'criancah.png');
            } else if (idade < 18 ){
                img.setAttribute('src', 'adolecenteh.png');
            } else if (idade < 65){
                img.setAttribute('src', 'homem.png');
            } else if (idade < 120){
                img.setAttribute('src', 'velho.png');
            } else {
                img.setAttribute('src', 'morreuh.png');
            }
        } else { 
            if (idade <= 3){
                img.setAttribute('src', 'bebem.png');  
            } else if (idade <= 12){
                img.setAttribute('src', 'criancam.png');
            } else if (idade < 18 ){
                img.setAttribute('src', 'adolecentem.png');
            } else if (idade < 65){
                img.setAttribute('src', 'mulher.png');
            } else if (idade < 120){
                img.setAttribute('src', 'velha.png');
            } else {
                img.setAttribute('src', 'morreum.png');
            }
        }

        // exibir foto no site conforme seleção de imagem "img"
        res.appendChild(img) // exibição do "novo elemento"
    }
}