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