document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    menuIcon.addEventListener('click', function() {
        dropdownMenu.classList.toggle('show');
    });
    // Add more JavaScript for animations and interactions
});