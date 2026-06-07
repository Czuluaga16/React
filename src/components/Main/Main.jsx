import './Main.css'

export const Main = () => {
  return (
    <main className="main-container">
      <section id="inicio" className="section-container welcome-section">
        <h2 className="section-title">🚀 Bienvenido a mi Portafolio</h2>
        <p className="section-description">Soy Aprendiz SENA de 4to Trimestre y estoy iniciando mis primeros pasos en React. Aquí encontrarás mis proyectos, habilidades y experiencia en desarrollo web frontend.</p>
      </section>

      <section id="acerca" className="section-container about-section">
        <h2 className="section-title">👨‍💻 Acerca de mí</h2>
        <p className="section-description">
          Soy un desarrollador web apasionado con experiencia en HTML, CSS y JavaScript. 
          Tengo una pasión por aprender nuevas tecnologías y crear aplicaciones web modernas.
          Actualmente estoy mejorando mis habilidades en React y desarrollo front-end profesional,
          buscando aplicar mejores prácticas y diseños modernos en cada proyecto que realizo.
        </p>
      </section>

      <section id="proyectos" className="section-container">
        <h2 className="section-title">💼 Mis Proyectos</h2>
        <div className="projects-grid">
          <article className="project-card">
            <h3 className="project-title">Proyecto 1: Sitio Web Responsivo</h3>
            <p className="project-description">Un sitio web completamente responsivo desarrollado con HTML y CSS, implementando diseño mobile-first y media queries para todos los dispositivos.</p>
            <p className="project-tech">📌 Tecnologías: HTML5, CSS3, JavaScript</p>
          </article>
          
          <article className="project-card">
            <h3 className="project-title">Proyecto 2: Aplicación de Lista de Tareas</h3>
            <p className="project-description">Una aplicación interactiva para gestionar tareas diarias con funcionalidades completas de CRUD y almacenamiento en Local Storage.</p>
            <p className="project-tech">📌 Tecnologías: JavaScript, DOM, Local Storage</p>
          </article>
          
          <article className="project-card">
            <h3 className="project-title">Proyecto 3: Portafolio con React</h3>
            <p className="project-description">Mi primer portafolio profesional desarrollado con React y Vite, con estilos modernos y animaciones suaves para una experiencia de usuario excepcional.</p>
            <p className="project-tech">📌 Tecnologías: React, Vite, JSX, CSS3</p>
          </article>
        </div>
      </section>

      <section id="habilidades" className="section-container">
        <h2 className="section-title">🛠️ Habilidades</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <span className="skill-text">🏗️ HTML5</span>
          </div>
          <div className="skill-item">
            <span className="skill-text">🎨 CSS3</span>
          </div>
          <div className="skill-item">
            <span className="skill-text">⚙️ JavaScript</span>
          </div>
          <div className="skill-item">
            <span className="skill-text">⚛️ React</span>
          </div>
          <div className="skill-item">
            <span className="skill-text">📦 Control de Versiones (Git)</span>
          </div>
          <div className="skill-item">
            <span className="skill-text">💻 Desarrollo Web Frontend</span>
          </div>
          <div className="skill-item">
            <span className="skill-text">📱 Diseño Responsivo</span>
          </div>
          <div className="skill-item">
            <span className="skill-text">🚀 Vite</span>
          </div>
        </div>
      </section>

      <section id="contacto" className="section-container contact-section">
        <p className="section-description">¿Te interesa colaborar conmigo? Puedo ayudarte a crear soluciones web modernas y profesionales. No dudes en contactarme para cualquier pregunta o proyecto.</p>
        <li>Teléfono: <a href="https://wa.me/571234567890" target="_blank">Escríbeme por WhatsApp</a></li>
        <li>Email: <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank">Mi Email</a></li>
        <li>Linkedin <a href='https://www.linkedin.com/in/carlos-andres-zuluaga-atehortua-72a707201/' target='_blank'>Mi Perfil</a></li>
        <li>GitHub <a href='https://github.com/Czuluaga16' target='_blank'>Mi Repositorio</a></li>
      </section>
    </main>
  )
}
