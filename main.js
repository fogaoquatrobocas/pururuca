function criaCartao(Categoria,Pergunta,Resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('articicle');
    cartao.className = 'cartao';
    cartao.innerHTML =  `
      <div class="conteudo-cartao">
      <h3>${Categoria}</h3>
    <div class="pergunta-cartao">
      <p>${Pergunta}</p>
    </div>
    <div class="resposta-cartao">
      <p>${Resposta}</p>
      </div>
  </div>
     `
     let RespostaEstaInvisivel = false;
     function viracartao(){
      RespostaEstaInvisivel = !RespostaEstaInvisivel;
      cartao.classList.toggle('active', RespostaEstaInvisivel);
     }
     cartao.addEventListener('click', viracartao);
     
     container.appendChild(cartao);
  }
  