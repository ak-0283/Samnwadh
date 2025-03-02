document.getElementById("menu-toggle").addEventListener("click", function() {
  console.log('')
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("active"); // Toggle the menu visibility
  
  const body = document.body;
  if (navbar.classList.contains("active")) {
    body.classList.add("menu-open"); // Add class to shift content and hide the hamburger icon
  } else {
    body.classList.remove("menu-open"); // Remove class to allow scrolling and show hamburger icon
  }
});


