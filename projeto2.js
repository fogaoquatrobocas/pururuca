function criarCartao(Categoria,Pergunta,Resposta){
    let container = document.getElementById('container');
    let cartao = document.createElement('articicle');
    cartao.className = 'cartao';
    cartao.innerHTML =  `
      <div class="conteudo-cartao" onclick="mostraResposta (this)">
      <h3>${Categoria}</h3>
    <div class="pergunta-cartao">
      <p>${Pergunta}</p>
    </div>
    <div class="resposta-cartao">
      <p>${Resposta}</p>
      </div>
  </div>
     `
     container.appendChild(cartao);
  }
  function mostraResposta(card){
    const resposta = card.querySelector('.resposta-cartao')
    if(resposta.style.display === 'none'){
        resposta.style.display = 'block';
    }
    else{
        resposta.style.display = 'none';
    }
  }