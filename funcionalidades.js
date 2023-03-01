// Smooth Scrolling
document.querySelectorAll('nav a').forEach(enlace => {
    enlace.addEventListener('click', (evento) => {
      evento.preventDefault(); // Prevenimos el comportamiento por defecto del enlace
  
      // 2 Enlace
      const destino = document.querySelector(enlace.getAttribute('href'));
  
      // 3 Encontrar sección
      if (destino) {
        destino.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
// Obtener todas las secciones
const resumenSection = document.getElementById("resumen");
const experienciaSection = document.getElementById("experiencia");
const educacionSection = document.getElementById("educacion");
const habilidadesSection = document.getElementById("habilidades");

// Obtener los elementos de cada sección
const resumenElement = resumenSection.querySelector("p");
const experienciaElement = experienciaSection.querySelector("ul");
const educacionElement = educacionSection.querySelector("ul");
const habilidadesElement = habilidadesSection.querySelector("ul");

// Agregar evento clic a cada sección
resumenSection.addEventListener("click", () => {
  resumenElement.innerHTML = "Además de mi trabajo como desarrollador de software en ABC Inc., tengo una variedad de pasatiempos que me mantienen ocupado fuera de la oficina. Me encanta jugar al fútbol los fines de semana, disfruto de la fotografía y la edición de video en mi tiempo libre, y también soy un ávido lector de ciencia ficción. Creo firmemente que tener una vida equilibrada entre el trabajo y el tiempo libre es esencial para mantener la motivación y la creatividad en el trabajo.";
});

experienciaSection.addEventListener("click", () => {
  experienciaElement.innerHTML = `
    <li>
        <h3>Desarrollador de software en ABC Inc.</h3>
        <p>Julio 2018 - presente</p>
        <p>Como desarrollador de software en ABC Inc., Jacob ha liderado varios proyectos críticos para el negocio y ha trabajado en estrecha colaboración con los equipos de diseño y de calidad para entregar productos de alta calidad a tiempo. Sus responsabilidades incluyen la planificación y coordinación de entregas de software, el diseño y la implementación de nuevas funcionalidades, la realización de pruebas de integración y la solución de problemas.</p>
    </li>
    <li>
        <h3>Asistente administrativo en una clínica dental.</h3>
        <p>Enero 2021 - Diciembre 2022</p>
        <p>Mis tareas incluyen programar citas, responder llamadas, gestionar expedientes de pacientes y colaborar en la facturación y el inventario. Además, soy responsable de mantener un ambiente acogedor para los pacientes y resolver cualquier problema que puedan tener durante su visita.</p>
    </li>
  `;
});

educacionSection.addEventListener("click", () => {
  educacionElement.innerHTML = `
    <li>
        <h3>Universidad de XYZ.</h3>
        <p>Licenciado en Informática, con una especialización en Desarrollo de Software.</p>
    </li>
    <li>
        <h3>Clínica Dental ABC.</h3>
        <p>Asistente Administrativo.</p>
    </li>
  `;
});

habilidadesSection.addEventListener("click", () => {
  habilidadesElement.innerHTML = `
    <li>6600 Oak Ridge Ln</li>
    <li>(436) 877-4995</li>
    <li>jacob.thomas@example.com</li>
    <li>Gracias por tomar el tiempo de revisar mi currículum. Espero tener la oportunidad de conversar más acerca de mi experiencia y cómo puedo contribuir al éxito de su empresa.</li>
  `;
});

// Obtenemos todas las secciones
const secciones = document.querySelectorAll('section');

// Agregamos un listener 'click' a cada sección
secciones.forEach((seccion) => {
  seccion.addEventListener('click', () => {
    // Cambiamos el color de fondo al hacer clic
    seccion.style.backgroundColor = 'lightgray';

    // Agregamos una clase CSS con una animación
    seccion.classList.add('clicked-section');
  });
});

// Alerta
window.addEventListener("load", function() {
    alert("¡Bienvenido! Por favor haga clic en las secciones claves para mostrar más información.");
  });
  