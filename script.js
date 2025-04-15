function abrirProduto() {
    window.location.href = "produto.html";
  }
  
function selecionarTamanho(botao) {
    const botoes = document.querySelectorAll('.tamanhos button');
    botoes.forEach(b => b.classList.remove('selecionado'));
    botao.classList.add('selecionado');
  }
  