//Função responsável por realizar as animações de entradas das seções

export default function initAnimacaoScroll() {
  const sectionsLeft = document.querySelectorAll('[data-anime="scroll-left"]');
  const sectionsRight = document.querySelectorAll('[data-anime="scroll-right"]');

  if (sectionsLeft.length || sectionsRight.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScrollLeft() {
      sectionsLeft.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }

    function animaScrollRight() {
      sectionsRight.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowMetade) < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else {
          section.classList.remove('ativo');
        }
      });
    }

    animaScrollLeft();
    animaScrollRight();

    window.addEventListener('scroll', animaScrollLeft);
    window.addEventListener('scroll', animaScrollRight);
  }
}