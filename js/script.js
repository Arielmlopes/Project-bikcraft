//ativar links do menu
const links = document.querySelectorAll('.nav-menu a')

function ativalinks(link){
    const url = location.href;
    const href = link.href;
    if(url.includes(href)){
        link.classList.add("ativo");
    }
}

links.forEach(ativalinks)

//======================================

//ativar itens do orçamento

const paramentros = new URLSearchParams(location.search)

function ativaProduto(paramer){
    const element = document.getElementById(paramer);
    if(element){
    element.checked = true;
    }
}
paramentros.forEach(ativaProduto)


//======================================

//perguntas frequentes

const botaoPerguntas = document.querySelectorAll('.perguntas dl button') //selecionando todos os botoes da lista de perguntas frequentes


function ativaPergunta(event){
    const pergunta = event.currentTarget; //identifica na onde a funcao vai ser executada, ao clicar!
    const controls = pergunta.getAttribute('aria-controls') //pegando o atributo arial-controls e colocando na variavel controls
    const resposta = document.getElementById(controls) //pegando os id que sao os mesmos dos atributos controls
    resposta.classList.toggle('ativa') //colocando uma class na resposta que n contem a classe, ou tirando a classe caso ja tenha o mesmo
    const ativa = resposta.classList.contains('ativa') //verificando se contem a classe ativa no botao
    pergunta.setAttribute('aria-expanded', ativa) //trocando o valor do aria-expanded pelo valor que pega no ativa, caso ele esteja false, vai mudar no html para falso, se nao muda para true

}
function ativaresposta(pergunta){
    pergunta.addEventListener('click',ativaPergunta); //add evento de click em cada botao e passando uma funcao pra ele
}
botaoPerguntas.forEach(ativaresposta); //percorrendo um array e executando uma funcao em cada um deles


//======================================

//galeria de imagem das bicicletas

const galeria = document.querySelectorAll('.bike-img img')
const galeriaContainer = document.querySelector('.bike-img')

function trocaimg(event){
    const img = event.currentTarget;
   const media = matchMedia('(min-width: 940px)').matches
    if(media){
        galeriaContainer.prepend(img)

    }
}
function eventosGaleria(img){
    img.addEventListener('click', trocaimg)
}
galeria.forEach(eventosGaleria)

//animação
if(window.SimpleAnime){
    new SimpleAnime();
}