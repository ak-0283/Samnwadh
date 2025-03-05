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
});
