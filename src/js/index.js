//---ALTERAR O TEMA---//
const botaoAlterarTema = document.getElementById("botao-alterar-tema");

const body = document.querySelector("body");

const imagemBotaoTrocaTema = document.querySelector(".imagem-botao");
//Adiciona o evento de clique
botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroAtivo = body.classList.contains("modo-escuro");
    //Alterna entre os modos
    body.classList.toggle("modo-escuro");

    //Verifica se o modo escuro está ativo
    if (modoEscuroAtivo) {      
        //Troca a imagem do botão
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/sun.png");
    }
    else {
        //Troca a imagem do botão
        imagemBotaoTrocaTema.setAttribute("src", "./src/imagens/moon.png");
    }
});