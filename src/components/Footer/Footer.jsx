import './Footer.css'

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-divider"></div>
        <p className="footer-text">
          &copy; <span className="footer-year">{currentYear}</span> Mi Portafolio. Todos los derechos reservados.
        </p>
        
        <div className="footer-links">
          <a href="#inicio" className="footer-link">Inicio</a>
          <a href="#acerca" className="footer-link">Acerca de</a>
          <a href="#proyectos" className="footer-link">Proyectos</a>
          <a href="#habilidades" className="footer-link">Habilidades</a>
          <a href="#contacto" className="footer-link">Contacto</a>
        </div>
      </div>
    </footer>
  );
};
