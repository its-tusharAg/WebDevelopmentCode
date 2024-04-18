// var html = document.querySelectorAll('html')[0];
// var themeToggle = document.querySelectorAll('*[data-bs-toggle-theme]')[0];

// html.setAttribute('data-bs-theme', 'dark');
// if (themeToggle) {
//   themeToggle.addEventListener('click', function(event) {
//     event.preventDefault();

//     if (html.getAttribute('data-bs-theme') === 'dark') {
//       html.setAttribute('data-bs-theme', 'light');
//     } else {
//       html.setAttribute('data-bs-theme', 'dark');
//     }
//   });
// }

const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menulinks.classList.toggle('active');
})