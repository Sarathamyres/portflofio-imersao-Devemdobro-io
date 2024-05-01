const botaoMostrarProjetos = document.querySelector(".btn-ver-mais");
const projetosInativos = document.querySelectorAll(".projeto-item:not(.ativo)");

//o code abaixo adc a classe "ativo" nos projetos escondidos
console.log(projetosInativos);
botaoMostrarProjetos.addEventListener("click", () => {
  projetosInativos.forEach((projetoInativo) => {
    projetoInativo.classList.add("ativo");
  });

  //esconder o button quando clicado
  botaoMostrarProjetos.classList.add("remover");
});
