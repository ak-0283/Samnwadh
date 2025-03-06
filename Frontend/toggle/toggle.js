const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const darkModeToggle = document.getElementById('darkModeToggle');
const sunIcon = darkModeToggle.querySelector('.sun');
const moonIcon = darkModeToggle.querySelector('.moon');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// Dark Mode Toggle (Basic Example)
darkModeToggle.addEventListener('click', () => {
  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');
  document.documentElement.classList.toggle('dark');
});