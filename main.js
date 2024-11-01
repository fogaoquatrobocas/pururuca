function criaCartao(Categoria,Pergunta,Resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('articicle');
    cartao.className = 'cartao';
    cartao.innerHTML = `
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

     let RespostaEstavisivel = false;

     function viracartao(){
      RespostaEstavisivel = !RespostaEstavisivel;
      cartao.classList.toggle('active', RespostaEstavisivel);
     }
     cartao.addEventListener('click', viracartao);
     
     container.appendChild(cartao);
  }
  