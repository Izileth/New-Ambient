
// Configuração para mudar de fundo e imagem ao passar o mouse

const sections = document.querySelectorAll('section');

sections.forEach(section => {
  section.addEventListener('mouseover', () => {
    section.classList.add('fade-in');
  });
  section.addEventListener('mouseout', () => {
    section.classList.remove('fade-in');
  });
});