function cumprimentar() {
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = "Olá! Bem-vindo ao curso de Git! 👋";
    mensagem.className = "sucesso";
  }
  
  function mostrarHora() {
    const agora = new Date();
    const hora = agora.toLocaleTimeString("pt-BR");
    const mensagem = document.getElementById("mensagem");
    mensagem.innerHTML = `Horário atual: ${hora} ⏰`;
    mensagem.className = "info";
  }
  
  // Mensagem de boas-vindas quando a página carrega
  window.onload = function () {
    console.log("Página carregada! Pronto para aprender Git!");
  };