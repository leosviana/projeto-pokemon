
// console.log(document);
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

botaoAlterarTema.addEventListener("click", () => { //COLOCAR UMA ESCUTA EM ELEMENTOS DO HTML
   //console.log("clicou no botao"); //COMANDO USADO APENAS PARA VERIFICAR SE ESTAVA FUNCIONANDO
   body.classList.add("modo-escuro");  //LISTA DAS CLASSES DO BODY
     //add = Adicionar uma nova classe
   imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png"); //MUDAR O ATRIBUTO DE UM ELEMENTO
     //src = Atributo antigo que será trocado
     //./src/imagens/moon.png = Novo atributo
}); 
  //click = Evento que precisa acontecer
  //{...}  = Ação que será realizada