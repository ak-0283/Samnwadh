function getGreeting() {
    if (localStorage.getItem("greetingShown")) {
        document.getElementById("overlay").style.display = "none";
        return;
    }

    const hours = new Date().getHours();
    let greeting;

    if (hours >= 5 && hours < 12) {
        greeting = "Good Morning! 🌅\n\nWelcome to Samnwadh!";
    } else if (hours >= 12 && hours < 17) {
        greeting = "Good Afternoon! ☀️\n\nWelcome to Samnwadh!";
    } else if (hours >= 17 && hours < 21) {
        greeting = "Good Evening! ☀️\n\nWelcome to Samnwadh!";
    } else {
        greeting = "Good Night! 🌙\n\nWelcome to Samnwadh!";
    }

    document.getElementById("greeting").innerHTML = greeting.replace(/\n/g, "<br>"); // Preserve line breaks
    document.getElementById("overlay").style.display = "block"; 
    localStorage.setItem("greetingShown", "true");
}

function closeCard() {
    document.getElementById("overlay").style.display = "none";
    localStorage.setItem("greetingShown", "true");
}

getGreeting();