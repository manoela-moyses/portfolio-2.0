// Função responsável por deixar o scroll da página suave ao clicar nos botões do menu para rolar para as seções

export default function softScroll() {
  const internalLinks = document.querySelectorAll('[data-menu="soft"] a[href^="#"]');

  internalLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
    console.log('clicou');
  }
}