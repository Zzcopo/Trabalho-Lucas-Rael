function validacaoSenha() {
  var senha = document.getElementById("senha-cadastro").value;

  var uppercaseRegex = /[A-Z]/;
  var lowercaseRegex = /[a-z]/;
  var specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
  var tamanhoSenha = senha.length;

  if (!uppercaseRegex.test(senha) || !lowercaseRegex.test(senha) || !specialCharRegex.test(senha) || tamanhoSenha < 7) {
      alert("A senha deve conter pelo menos uma letra maiúscula, uma letra minúscula e um caractere especial, e ter mais de 8 caracteres.");
      return false;
  }  else
  {
    return true;
  }  
}
function realizarLogin() {

  var senhaValida = validacaoSenha();
  if (senhaValida ) {
   alert("logado com sucesso")
    var x = document.getElementById("button-type").type = "button";
  
  } else {
      alert("Email ou senha inválidos.");
  }
}








