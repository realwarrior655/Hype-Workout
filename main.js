//sideBar Plegable

const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sideBar');
const mainContent = document.querySelector('.main');
const aside = document.querySelector('.aside')

toggleBtn.addEventListener('click', () => {
    
    // Alterna la clase 'collapsed' para sidebar y mainContent
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
    aside.classList.toggle('collapsed');

    // Si sidebar contiene la clase 'collapsed', le añadimos 'sideBar'
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.add('sideBar');
    } else {
        // Si no contiene la clase 'collapsed', removemos 'sideBar'
        sidebar.classList.add('sideBar');
    }

});

//Plantilla de curso

const cursos = [
    {
        nombre: "Curso de Verticales desde 0",
        imagen: "images/curso1.png", // URL de una imagen de fondo
        duracion: "12 semanas",
        requisitos: "Conocimiento previo de calistenia básica"
    },
    {
        nombre: "Curso de subida a fuerza y HSPU",
        imagen: "/images/curso1.png", // URL de una imagen de fondo
        duracion: "12 semanas",
        requisitos: "  \"30\" handstand libre, 3 HSPU asistidas"
    },
    {
        nombre: "Curso de 90Degree y Press to Handstand",
        imagen: "images/curso1.png", // URL de una imagen de fondo
        duracion: "4 meses",
        requisitos: "+5 HSPU prolijas, pliegue o pancake"
    },
    {
        nombre: "Curso de calistenia Básica",
        imagen: "images/curso1.png", // URL de una imagen de fondo
        duracion: "4 meses",
        requisitos: "flexiones de brazos, australianas y sentadillas"
    },
    {
        nombre: "Curso de calistenia intermedio",
        imagen: "images/curso1.png", // URL de una imagen de fondo
        duracion: "4 meses",
        requisitos: "muscle up y vertical"
    },
    {
        nombre: "Curso de calistenia avanzada",
        imagen: "images/curso1.png", // URL de una imagen de fondo
        duracion: "4 meses",
        requisitos: "+5 hspu, +5 muscle ups, +5 pistol squat"
    },
    
];

// Seleccionamos el contenedor donde insertaremos las tarjetas
const container = document.getElementById('courses-container');

// Usamos forEach para iterar sobre la lista de cursos y crear las plantillas
cursos.forEach((curso) => {
    // Creamos un div para la tarjeta del curso
    const courseCard = document.createElement('div');
    courseCard.classList.add('course-card');
    
    // Asignamos la imagen de fondo al curso
    courseCard.style.backgroundImage = `url(${curso.imagen})`;

    // Creamos el contenido de la tarjeta
    const courseInfo = `
        <div class="course-info">
            <div class="course-name">${curso.nombre}</div>
            <div class="course-duration">Duración: ${curso.duracion}</div>
            <div class="course-requirements">Requisitos: ${curso.requisitos}</div>
        </div>
    `;
    
    // Insertamos el contenido dentro de la tarjeta
    courseCard.innerHTML = courseInfo;
    
    // Agregamos la tarjeta al contenedor en el DOM
    container.appendChild(courseCard);
});
