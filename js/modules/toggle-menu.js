//Função responsável pelo menu hambúrguer no dispositivo mobile

export default function toggleMenu() {
  const btnMobile = document.getElementById('btn-mobile');

  btnMobile.addEventListener('click', handleMenu);
  btnMobile.addEventListener('touchstart', handleMenu);
  function handleMenu(event) {
    if (event.type == 'touchstart') {
      event.preventDefault();
    }
    const nav = document.querySelector('nav');
    nav.classList.toggle('toggle-menu');
    const handleMenu = nav.classList.contains('toggle-menu');
    event.currentTarget.setAttribute('aria-expanded', handleMenu);
    if (handleMenu) {
      event.currentTarget.setAttribute('aria-label', "Fechar Menu");
    } else {
      event.currentTarget.setAttribute('aria-label', "Abrir Menu");
      btnMobile.style.color = '#ffffff';
    }
  }
}