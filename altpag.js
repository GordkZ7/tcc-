let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;
    let footer = document.querySelector("footer");

    if (st > lastScrollTop) {
       
        footer.classList.remove("show");
    } else {
       
        footer.classList.add("show");
    }

    lastScrollTop = st <= 0 ? 0 : st; 
});


function obterParametrosURL() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(urlSearchParams.entries());
}

function preencherResumoCompra() {
    const parametros = obterParametrosURL();
    const produtos = JSON.parse(parametros.produtos || '[]');
    const precos = JSON.parse(parametros.precos || '[]');

    const itensCompra = document.getElementById('itensCompra');

    for (let i = 0; i < produtos.length; i++) {
        const divItem = document.createElement('div');
        divItem.className = 'item-compra';

        const imgProduto = document.createElement('img');
        imgProduto.src = `${produtos[i].replace(/ /g, '_')}.jpg`; 
        imgProduto.alt = produtos[i];

        const pPreco = document.createElement('p');
        pPreco.className = 'line';
        pPreco.textContent = `R$ ${precos[i].toFixed(2)}`;

        divItem.appendChild(imgProduto);
        divItem.appendChild(pPreco);

        itensCompra.appendChild(divItem);
    }
}

preencherResumoCompra();


