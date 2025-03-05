// Toggle the navbar visibility on small screens
document.getElementById("menu-toggle").addEventListener("click", function () {
  const navbar = document.querySelector(".navbar");

  // Toggle the "active" class to show/hide the menu
  navbar.classList.toggle("active");

  // Optionally, prevent body scroll when the menu is open
  document.body.classList.toggle("menu-open");
});
