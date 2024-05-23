// Função responsável por fazer os botões do menu ficarem na cor rosa quando a sua respectiva seção estiver sendo apresentada na tela

export default function changeHeaderColor() {
  const btnAboutMe = document.querySelector('.btn-aboutMe');
  const btnSkills = document.querySelector('.btn-skills');
  const btnCareer = document.querySelector('.btn-career');
  const btnPortfolio = document.querySelector('.btn-portfolio');
  const btnContact = document.querySelector('.btn-contact');
  const viewPort = window.innerHeight * 0.3;

  const sectionAboutMe = document.querySelector('#sobre-mim');
  const aboutTop = sectionAboutMe.getBoundingClientRect().top;
  const isAboutMeVisible = (aboutTop - viewPort) < 0;

  const sectionSkills = document.querySelector('#skills');
  const skillsTop = sectionSkills.getBoundingClientRect().top;
  const isSkillsVisible = (skillsTop - viewPort) < 0;

  const sectionCareer = document.querySelector('#carreira');
  const careerTop = sectionCareer.getBoundingClientRect().top;
  const isCareerVisible = (careerTop - viewPort) < 0;

  const sectionPortfolio = document.querySelector('#portfolio');
  const portfolioTop = sectionPortfolio.getBoundingClientRect().top;
  const isPortfolioVisible = (portfolioTop - viewPort) < 0;

  const sectionContact = document.querySelector('#contato');
  const contactTop = sectionContact.getBoundingClientRect().top;
  const isContactVisble = (contactTop - viewPort) < 0;

  if (isAboutMeVisible) {
    btnAboutMe.style.color = '#da1381';
    btnSkills.style.color = '#fff';
    btnCareer.style.color = '#fff';
    btnPortfolio.style.color = '#fff';
    btnContact.style.color = '#fff';
  } else {
    btnAboutMe.style.color = '#fff';
  }

  if (isSkillsVisible) {
    btnAboutMe.style.color = '#fff';
    btnSkills.style.color = '#da1381';
    btnCareer.style.color = '#fff';
    btnPortfolio.style.color = '#fff';
    btnContact.style.color = '#fff';
  } else {
    btnSkills.style.color = '#fff';
  }

  if (isCareerVisible) {
    btnAboutMe.style.color = '#fff';
    btnSkills.style.color = '#fff';
    btnCareer.style.color = '#da1381';
    btnPortfolio.style.color = '#fff';
    btnContact.style.color = '#fff';
  } else {
    btnCareer.style.color = '#fff';
  }

  if (isPortfolioVisible) {
    btnAboutMe.style.color = '#fff';
    btnSkills.style.color = '#fff';
    btnCareer.style.color = '#fff';
    btnPortfolio.style.color = '#da1381';
    btnContact.style.color = '#fff';
  } else {
    btnPortfolio.style.color = '#fff';
  }

  if (isContactVisble) {
    btnAboutMe.style.color = '#fff';
    btnSkills.style.color = '#fff';
    btnCareer.style.color = '#fff';
    btnPortfolio.style.color = '#fff';
    btnContact.style.color = '#da1381';
  } else {
    btnContact.style.color = '#fff';
  }
}
window.addEventListener('scroll', changeHeaderColor);