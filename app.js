document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');
  const headerHeight = document.querySelector('header').offsetHeight;
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Ajustar posición del main
  document.querySelector('main').style.paddingTop = `${headerHeight}px`;

  // Mapeo de URLs a IDs de sección
  const pageMap = {
      'index.html': 'intro',
      'cantor.html': 'cantor',
      'wellordering.html': 'wellordering',
      'zermelo.html': 'zermelo',
      'paradojas.html': 'paradojas',
      'crisis.html': 'crisis',
      'legado.html': 'legado',
      'conclusion.html': 'conclusion'
  };

  // Activar sección y enlace correspondiente
  function activateCurrent() {
      const targetId = pageMap[currentPath];
      
      navLinks.forEach(link => {
          const linkPath = link.getAttribute('href').split('/').pop();
          link.classList.toggle('active', linkPath === currentPath);
      });

      sections.forEach(section => {
          section.classList.toggle('active', section.id === targetId);
      });
  }

  // Manejar clics de navegación
  function handleNavClick(e) {
      e.preventDefault();
      const targetPage = this.getAttribute('href');
      window.location.href = targetPage;
  }

  navLinks.forEach(link => link.addEventListener('click', handleNavClick));
  activateCurrent();
});