export const scrollToNextSection = () => {
  const sections = document.querySelectorAll("section"); // Seleciona todas as seções
  const currentScroll = window.scrollY; // Obtém a posição atual do scroll
  const windowHeight = window.innerHeight; // Altura da tela do usuário
  const documentHeight = document.body.scrollHeight; // Altura total do documento

  // Verifica se o usuário está no final da página
  if (currentScroll + windowHeight >= documentHeight - 10) {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Volta para o topo
    return;
  }

  let nextSection = null;

  for (let i = 0; i < sections.length; i++) {
    const sectionTop = sections[i].offsetTop;

    if (sectionTop > currentScroll + 10) {
      nextSection = sections[i];
      break;
    }
  }

  if (nextSection) {
    nextSection.scrollIntoView({ behavior: "smooth" });
  }
};
