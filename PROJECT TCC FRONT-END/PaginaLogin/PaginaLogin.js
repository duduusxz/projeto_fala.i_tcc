function mostrarSenha() {
  const input = document.getElementById("senha");
  const icon = document.getElementById("toggleSenha");

  if (input.type === "password") {
    input.type = "text";
    icon.classList.add("fa-eye");
    icon.classList.remove("fa-eye-slash");
  } else {
    input.type = "password";
    icon.classList.add("fa-eye-slash");
    icon.classList.remove("fa-eye");

  }
}

function toggleMode() {
            document.body.classList.toggle('light-mode');
            document.body.classList.toggle('dark-mode');
        }

        let texto = document.getElementById("texto-apresentacao-bem-vindo");
        let tamanhoBase = parseFloat(window.getComputedStyle(texto).fontSize);

        document.getElementById("increase-font").addEventListener("click", function () {
            let tamanhoAtual = parseFloat(window.getComputedStyle(texto).fontSize);
            texto.style.fontSize = (tamanhoAtual * 1.1) + "px"; // Aumenta 10%
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