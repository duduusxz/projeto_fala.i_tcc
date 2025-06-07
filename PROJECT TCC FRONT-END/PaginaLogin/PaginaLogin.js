function toggleMode() {
    document.body.classList.toggle('light-mode');
    document.body.classList.toggle('dark-mode');
}

let texto = document.getElementById("texto-apresentacao-bem-vindo");
let tamanhoBase = parseFloat(window.getComputedStyle(texto).fontSize);

document.getElementById("increase-font").addEventListener("click", function () {
let tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);

let novoTamanho = tamanhoAtual * 1.1;

if (novoTamanho > 32) {
novoTamanho = 32
}

texto.style.fontSize = novoTamanho + "px";
});


document.getElementById("decrease-font").addEventListener("click", function () {
    let tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);
    if (tamanhoAtual > tamanhoBase * 0.8) { // Evita que fique muito pequeno
        texto.style.fontSize = (tamanhoAtual * 0.9) + "px"; // Diminui 10%
    }

    
}); 

        const entrar = document.getElementById('entrar');
        const rm = document.getElementById('rm');
        const senha = document.getElementById('senha');

        entrar.addEventListener('click', () => {
            if (rm.value === '123' && senha.value === '123') {
                window.location.href = '../PaginaInicial/TelaInicial.html';
            } else {
                alert('Usuário ou senha inválidos');
            };
        });

let posicaoAtual = 0;

function moverContainer(direcao) {
    const containerLogin = document.getElementById('container-login');
    const containerCadastro = document.getElementById('container-cadastro');

    if (direcao === 'direita' && posicaoAtual < 1) {
        posicaoAtual++;
    } else if (direcao === 'esquerda' && posicaoAtual > -1) {
        posicaoAtual--;
    }

    if (posicaoAtual === 0) {
        containerLogin.style.transform = 'translateX(0) translateY(-50%)';
        containerCadastro.style.transform = 'translateX(0) translateY(-50%)';
    } else if (posicaoAtual === 1) {
        containerLogin.style.transform = 'translateX(768px) translateY(-50%)';
        containerCadastro.style.transform = 'translateX(-768px) translateY(-50%)';
    }
}