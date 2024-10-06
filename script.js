const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sideBar');
const mainContent = document.querySelector('.main');

toggleBtn.addEventListener('click', () => {
    
    // Alterna la clase 'collapsed' para sidebar y mainContent
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');

    // Si sidebar contiene la clase 'collapsed', le añadimos 'sideBar'
    if (sidebar.classList.contains('collapsed')) {
        sidebar.classList.add('sideBar');
    } else {
        // Si no contiene la clase 'collapsed', removemos 'sideBar'
        sidebar.classList.add('sideBar');
    }

});


