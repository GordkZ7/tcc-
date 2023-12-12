function proximaEtapa(nomeProduto) {
    alert('Você comprou o ' + nomeProduto);
    window.location.href = 'outrapagina.html';
}
let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    if (st > lastScrollTop) {
        document.querySelector("footer").classList.add("footer-hidden");
    } else {
        document.querySelector("footer").classList.remove("footer-hidden");
    }

    lastScrollTop = st <= 0 ? 0 : st; 
});

// _________________________________________________________________________________
function exibirImagem(src, title, price) {
    const displayedImg = document.getElementById("displayedImg");
    displayedImg.src = src;

    document.getElementById("overlay").style.display = "block";
    document.getElementById("imageDisplay").style.display = "block";
}

function fecharImagem() {
    
    document.getElementById("overlay").style.display = "none";
    document.getElementById("imageDisplay").style.display = "none";
}
// // ---------------------------------------------------------------------------------
function exibirCarrinho() {
    const carrinhoModal = document.getElementById('carrinhoModal');
    carrinhoModal.style.display = 'block';
    var listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';
    carrinho.forEach(function (item) {
        listaCarrinho.innerHTML += '<li>' + item.nome + ' - R$ ' + item.preco.toFixed(2) + '</li>';
    });
    listaCarrinho.innerHTML += '<li>Total: R$ ' + valorTotal.toFixed(2) + '</li>';
}


function fecharCarrinho() {
    const carrinhoModal = document.getElementById('carrinhoModal');
    carrinhoModal.style.display = 'none';
}

function adicionarAoCarrinho(nome, preco) {
    const carrinho = document.getElementById('listaCarrinho');
    const produto = document.createElement('li');
    produto.textContent = `${nome} - R$ ${preco.toFixed(2)}`;
    carrinho.appendChild(produto);

}

function finalizarCompra() {
    window.location.href = 'pagina_de_finalizacao.html';
}

function comprarProduto(nome, preco) {
    adicionarAoCarrinho(nome, preco);
    alert("Produto adicionado ao carrinho!");

}
function limparCarrinho() {
    var listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = ''; 
    fecharCarrinho();
    carrinho = [];
    valorTotal = 0;
    
    toggleCarrinho();
}

const tempoLimite = 24 * 60 * 60;

        const dataInicio = new Date().getTime() / 1000;

        setInterval(() => {
            const agora = new Date().getTime() / 1000;
            const tempoDecorrido = agora - dataInicio;
        

            if (tempoDecorrido >= tempoLimite) {
                alert("Tempo Limite atingido!");
            }
            document.getElementById("temporizador").innerText = `Tempo Restante: ${formatarTempo(tempoLimite - tempoDecorrido)}`;
        }, 1000);
        function formatarTempo(segundos) {
            const horas = Math.floor(segundos / 3600);
            const minutos = Math.floor((segundos % 3600) / 60);
            const segundosRestantes = Math.floor(segundos % 60);

            return `${zeroAEsquerda(horas)}:${zeroAEsquerda(minutos)}:${zeroAEsquerda(segundosRestantes)}`;
        }

        function zeroAEsquerda(valor) {
            return valor < 10 ? `0${valor}` : valor;
        }
var carrinho = [];
var valorTotal = 0;

function comprarProduto(nome, preco) {
    carrinho.push({ nome: nome, preco: preco });
    valorTotal += preco;
    exibirCarrinho();
}

function toggleCarrinho() {
    var carrinhoModal = document.getElementById('carrinhoModal');
    var overlay = document.getElementById('overlay');

    if (carrinhoModal.style.display === 'none') {
        carrinhoModal.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        carrinhoModal.style.display = 'none';
        overlay.style.display = 'none';
    }
}
function alternarModoEscuro() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('header, section, .product, .comprar-btn, #carrinhoModal').forEach(element => {
        element.classList.toggle('dark-mode');
    });
}
        
        
