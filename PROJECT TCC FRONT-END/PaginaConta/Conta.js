let posicaoAtual = 0; // 0 = primeiro card, 1 = segundo card

function moverGaleria(direcao) {
  const container1 = document.getElementById('container1');
  const container2 = document.getElementById('container2');

  if (direcao === 'direita' && posicaoAtual === 0) {
    // Move container1 out and shrink it, move container2 in and expand it
    container1.style.transform = 'translateX(-600px) scale(0.8)'; // Move left and shrink
    container2.style.transform = 'translateX(-693px) scale(1.24)'; // Move left to take center, and expand
    // Adjust width as needed for visual consistency, or remove if scale handles it well
    container1.style.width = '550px';
    container2.style.width = '550px';

    posicaoAtual = 1;
  } else if (direcao === 'esquerda' && posicaoAtual === 1) {
    // Move container2 out and shrink it, move container1 in and expand it
    container1.style.transform = 'translateX(0) scale(1)'; // Move to original position and expand
    container2.style.transform = 'translateX(0) scale(1)'; // Move right and shrink
    // Adjust width as needed
    container1.style.width = '550px';
    container2.style.width = '550px';

    posicaoAtual = 0;
  }
}