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