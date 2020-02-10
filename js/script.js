let coursesBtn = document.getElementById('courses'),
    coursesMenu = document.querySelector('.courses-menu'),
    header = document.querySelector('.header-section');

header.addEventListener('click', (e) => {
    let eventTarget = e.target;
    eventTarget === coursesBtn 
    ? coursesMenu.classList.toggle('courses-hide')
    : coursesMenu.classList.add('courses-hide');
});