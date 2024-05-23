// Função responsável por filtrar os projetos da seção Portfólio de acordo com cada uma das categorias:
// - Todos
// - Código
// - WordPress

export default function filterProjects(value) {
  let elements = document.querySelectorAll('.card');

  elements.forEach(element => {
    if (value == 'todos' || element.classList.contains(value)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });

  //Atualiza o estilo dos botões de filtro
  let allBtn = document.querySelector('#btn-all');
  let codingBtn = document.querySelector('#btn-code');
  let wpBtn = document.querySelector('#btn-wp');

  if (value == 'todos') {
    allBtn.style.backgroundColor = '#7562e0';
    codingBtn.style.backgroundColor = 'transparent';
    wpBtn.style.backgroundColor = 'transparent';
  } else if (value == 'Coding') {
    allBtn.style.backgroundColor = 'transparent';
    codingBtn.style.backgroundColor = '#7562e0';
    wpBtn.style.backgroundColor = 'transparent';
  } else if (value == 'WordPress') {
    allBtn.style.backgroundColor = 'transparent';
    codingBtn.style.backgroundColor = 'transparent';
    wpBtn.style.backgroundColor = '#7562e0';
  }
}

window.onload = () => {
  filterProjects('todos');
};

document.getElementById('btn-all').addEventListener('click', () => filterProjects('todos'));
document.getElementById('btn-code').addEventListener('click', () => filterProjects('Coding'));
document.getElementById('btn-wp').addEventListener('click', () => filterProjects('WordPress'));