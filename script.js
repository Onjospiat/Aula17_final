function rolagem(id_secao){ //Declara a função com o parâmetro id_secao
    const elemento = document.getElementById(id_secao); //define uma variável como um objeto de id igual ao parâmetro
    if (elemento) { //Testa se o parâmetro usado existe.
        elemento.scrollIntoView({ behavior: 'smooth' }); //Rola a tela até o objeto elemento
     }
     
}

window.rolagem = rolagem; //Define a função como global para poder ser acessada pelo HTML