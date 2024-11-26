
function getTipoCaract(){
    const maiuscula = document.querySelector('#include_maiuscula').checked;
    const minuscula = document.querySelector('#include_minuscula').checked;
    const numero = document.querySelector('#include_numero').checked;
    const especial = document.querySelector('#include_especial').checked;
    

    const tipocaract = [];

      if (maiuscula) {
         tipocaract.push('ABCDFGHIJKLMOPQRSTUVWXYZ')
      }
      if (minuscula) {
        tipocaract.push('abcdefghijklmnopqrstuvwxyz')
     }
     if (numero) {
        tipocaract.push('0123456789')
     }
     if (especial) {
        tipocaract.push('!@#$%^&*()_-+={}[]|\\/?><:;"\'.,~`')
     }
      
      
     return tipocaract;

}

function getTamanhoSenha(){ // função que retorna um erro caso a senha for menor ou maior 
    const tamanho = document.querySelector('#size').value;
    if(isNaN(tamanho) || tamanho < 4 || tamanho > 40 ){

         mensagem('Erro, coloque a senha entre 4 e 40 digitos!', 'falha');
    }

    return tamanho;
}



function random(tipocaract){ //função que randomiza todos os tipos de caracteres
    const randomcaract = Math.floor(Math.random() * tipocaract.length);
    
   
    return tipocaract[randomcaract][ Math.floor(Math.random() * tipocaract[randomcaract].length)];
}

function gerarSenha(size, tipocaract){
 
    let senhaGerada = '';

    while(senhaGerada.length < size) {
        senhaGerada += random(tipocaract)
    }

    return senhaGerada;
}

function mensagem(text, status = 'sucesso'){
    Toastify({
        text: text,
      duration: 2500,
      style: {
         background: status === 'sucesso' ? '#8BC34A' : '#dc2626'
      }

     }).showToast();
}


document.querySelector('#gerar').addEventListener('click', function(){

    const tamanho = getTamanhoSenha();
    const tipocaract = getTipoCaract();
    
    
    if(!tamanho) {
        return;
    }
    if(!tipocaract.length){
        mensagem('Selecione pelo menos uma caixa de opção!', 'falha')
        return;
    }

    const senhaGerada = gerarSenha(tamanho, tipocaract);
    document.querySelector('#GuardaSenha').classList.add('show');
    document.querySelector('#senha').textContent = senhaGerada;


})

document.querySelector('#botao_copia').addEventListener('click', function(){
     navigator.clipboard.writeText(document.querySelector('#senha').textContent);
     mensagem('Senha copiada com sucesso!', 'sucesso');
});



























