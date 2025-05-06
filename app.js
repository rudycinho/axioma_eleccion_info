document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    const headerHeight = document.querySelector('header').offsetHeight;
  
    // Ajustar posición del main
    document.querySelector('main').style.paddingTop = `${headerHeight}px`;
  
    function activateSection(targetId) {
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === targetId) {
          section.classList.add('active');
          // Scroll suave al activar sección
          section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  
    function handleNavClick(e) {
      e.preventDefault();
      navLinks.forEach(link => link.classList.remove('active'));
      this.classList.add('active');
      const targetId = this.dataset.target;
      activateSection(targetId);
    }
  
    navLinks.forEach(link => {
      link.addEventListener('click', handleNavClick);
    });
  
    // Activar sección inicial
    activateSection('intro');
  });