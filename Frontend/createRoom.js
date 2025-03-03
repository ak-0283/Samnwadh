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
