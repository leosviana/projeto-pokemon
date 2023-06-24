
//console.log(document);
  //console = Exibe no console do inspecionar elemento o que está entre os parenteses
  //document = Página HTML

const botaoAlterarTema = document.getElementById("botao-alterar-tema"); //ACESSANDO INFORMAÇÕES DO HTML GERAL
  //const = Variavel constante
  //botaoAlterarTema = Nome da variavel
  //document = Página HTML
  //getElementById = Buscar elemento no HTML pelo "id"
  //botao-alterar-tema = id do botão no HTML

const body = document.querySelector("body"); //CONSULTAR UM SELETOR (TAG)
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao") //CONSULTAR UM SELETOR (CLASSE)

//ALTERAR TEMA PARA ESCURO
botaoAlterarTema.addEventListener("click", () => { //COLOCAR UMA ESCUTA EM ELEMENTOS DO HTML
    //console.log("clicou no botao"); //COMANDO USADO APENAS PARA VERIFICAR SE ESTAVA FUNCIONANDO

    //1 - VERIFICA SE ESTÁ ESCURO...
    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    //contains = Verifica se uma classe contém algo. será sempre TRUE.
    if (modoEscuroEstaAtivo) { //ESTÁ ESCURO
        //2 - REMOVE O MODO ESCURO
        body.classList.remove("modo-escuro"); 
        //3 - ADICIONA IMAGEM DO SOL
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png"); //MUDAR O ATRIBUTO DE UM ELEMENTO
        //src = Atributo antigo que será trocado
        //./src/imagens/sun.png = Novo atributo
    } else { //4 - SE NÃO ESTÁ NO MODO ESCURO...   
        //5 - ADICIONA O MODO ESCURO     
        body.classList.add("modo-escuro");  //LISTA DAS CLASSES DO BODY        
        //add = Adicionar uma nova classe
        //6 - ADICIONA IMAGEM DA LUA
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png"); //MUDAR O ATRIBUTO DE UM ELEMENTO
        //src = Atributo antigo que será trocado
        //./src/imagens/moon.png = Novo atributo
    }
});
  //click = Evento que precisa acontecer
  //{...}  = Ação que será realizada