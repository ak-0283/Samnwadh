<<<<<<< HEAD
// Toggle the navbar visibility on small screens
let isMenuOpen = false;
document.getElementById("menu-toggle").addEventListener("click",  ()=> {
  if(!isMenuOpen){
    document.querySelector(".navbar").classList.add("active");
    isMenuOpen = true;
  } else {
    document.querySelector(".navbar").classList.remove("active");
    isMenuOpen = false;
  }
=======
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const darkModeToggle = document.getElementById('darkModeToggle');
const sunIcon = darkModeToggle.querySelector('.sun');
const moonIcon = darkModeToggle.querySelector('.moon');

// Mobile Menu Toggle
menuToggle.addEventListener('click', () => {
  mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
>>>>>>> c6448c5fdfd83f4ff238a347d0d79becbd007c88
});

// Dark Mode Toggle (Basic Example)
darkModeToggle.addEventListener('click', () => {
  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');
  document.documentElement.classList.toggle('dark');
});