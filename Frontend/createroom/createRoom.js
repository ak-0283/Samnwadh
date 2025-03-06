document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("room-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent page refresh

    const name = document.getElementById("name").value.trim();
    const roomId = document.getElementById("roomId").value.trim();

    if (name === "" || roomId === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Show confirmation popup
    alert(`Room Created Successfully!\nName: ${name}\nRoom ID: ${roomId}`);

    // Reset form fields
    form.reset();
  });
});
// yhis is a comment``

document.addEventListener("DOMContentLoaded", () => {
  const darkModeToggle = document.getElementById("darkModeToggle");

  // Check if user has a saved preference
  const isDarkMode = localStorage.getItem("darkMode") === "enabled";
  if (isDarkMode) {
    document.body.classList.add("dark-mode");
    darkModeToggle.querySelector(".sun").style.display = "none";
    darkModeToggle.querySelector(".moon").style.display = "inline";
  } else {
    darkModeToggle.querySelector(".sun").style.display = "inline";
    darkModeToggle.querySelector(".moon").style.display = "none";
  }

  // Toggle dark mode on click
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDarkModeActive = document.body.classList.contains("dark-mode");

    // Update icons
    if (isDarkModeActive) {
      darkModeToggle.querySelector(".sun").style.display = "none";
      darkModeToggle.querySelector(".moon").style.display = "inline";
      localStorage.setItem("darkMode", "enabled");
    } else {
      darkModeToggle.querySelector(".sun").style.display = "inline";
      darkModeToggle.querySelector(".moon").style.display = "none";
      localStorage.setItem("darkMode", "disabled");
    }
  });
});

