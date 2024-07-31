document.addEventListener("DOMContentLoaded", function() {
    const yesBtn = document.getElementById("yesBtn");
    const noBtn = document.getElementById("noBtn");
    const message = document.getElementById("message");
    const gifContainer = document.getElementById("gifContainer");

    const messages = [
        "Will you be my Batman?",
	"Are you sure?",
	 "Gotham City needs us!!",
	 "I know you want to!!",
	 "Don't break my heart...",
	"Just say YES!"
    ];

    let clickCount = 0;

    noBtn.addEventListener("click", function() {
        clickCount++;
        yesBtn.style.transform = `scale(${1 + clickCount * 0.1})`;
        message.textContent = messages[Math.min(clickCount - 1, messages.length - 1)];
    });

    yesBtn.addEventListener("click", function() {
        message.textContent = "Lets save Gotham City 💖";
        gifContainer.classList.remove("hidden");
        yesBtn.classList.add("hidden");
        noBtn.classList.add("hidden");
    });
});
