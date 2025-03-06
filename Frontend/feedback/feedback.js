document.getElementById("feedback-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page refresh

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let rating = document.getElementById("rating").value;
  let message = document.getElementById("message").value.trim();
  let feedbackMessage = document.getElementById("feedback-message");

  if (!name || !email || !message) {
      feedbackMessage.style.color = "red";
      feedbackMessage.innerText = "Please fill in all required fields.";
      return;
  }

  // Store feedback (You can later send it to a server)
  localStorage.setItem("feedback", JSON.stringify({ name, email, rating, message }));

  feedbackMessage.style.color = "green";
  feedbackMessage.innerText = "Thank you for your feedback!";
  setTimeout(() => window.location.href = "index.html", 2000);
  // Clear form after submission
  document.getElementById("feedback-form").reset();
});
