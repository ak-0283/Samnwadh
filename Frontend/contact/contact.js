// email notification
import { config } from "./config.js";
(() => {
  emailjs.init(config.EMAILJS_USER_ID);
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const username = formData.get("username");
  const email = formData.get("email");
  const mobileNumber = formData.get("phone");
  const address = formData.get("address");
  const message = formData.get("message");

  const templateParams = {
    from_username: username,
    from_email: email,
    from_mobileNumber: mobileNumber,
    from_address: address,
    from_message: message,
  };

  emailjs
    .send(
      config.EMAILJS_SERVICE_ID,
      config.EMAILJS_TEMPLATE_ID,
      templateParams,
      config.EMAILJS_USER_ID
    )
    .then(
      (response) => {
        console.log("SUCCESS");
        alert("Message Sent");
        form.reset();
      },
      (error) => {
        alert("Error sending message. Please try again.");
        console.log(error);
      }
    );
});
