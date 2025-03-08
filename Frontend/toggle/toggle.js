

// Dark Mode Toggle (Basic Example)
darkModeToggle.addEventListener('click', () => {
  sunIcon.classList.toggle('hidden');
  moonIcon.classList.toggle('hidden');
  document.documentElement.classList.toggle('dark');
});
document.getElementById('menu-toggle').addEventListener('click',()=>{
  console.log('clicked')
  document.querySelector('.navbar').classList.toggle('active')
})