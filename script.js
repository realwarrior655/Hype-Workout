const toggleBtn = document.querySelector('toggle-btn');
const sidebar = document.querySelector('sideBar');
const mainContent = document.querySelector('.main');

toggleBtn.addEventListener('click', () => {

    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('collapsed');
}
)
;
