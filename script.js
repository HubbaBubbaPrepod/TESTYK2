document.addEventListener("DOMContentLoaded", () => {
    const questionText = document.getElementById("questionText");
    
    setTimeout(() => {
        animateText();
    }, 1000);
});
function animateText() {
    const questionText = document.getElementById("questionText");
    setTimeout(() => {
        questionText.textContent = "Это снова я!";
    }, 2000); 
    setTimeout(() => {
        questionText.classList.add("hidden"); 
        document.querySelector(".character").classList.remove("hidden"); 
        document.querySelector(".container").classList.remove("hidden");
        showNameInput();
    }, 4000);
}

function showNameInput() {
    const nameInputContainer = document.getElementById("nameInputContainer");

    nameInputContainer.classList.remove("hidden");

    document.getElementById("startButton").addEventListener("click", () => {
        const name = document.getElementById("nameInput").value.trim();
        if (name) {
            document.getElementById("nameInputHidden").value = name;

            nameInputContainer.style.transition = "opacity 0.5s";
            nameInputContainer.style.opacity = 0;

            setTimeout(() => {
                nameInputContainer.classList.add("hidden");
                document.getElementById("quiz").classList.remove("hidden");
                showQuestion(1); 
            }, 500);
        }
    });
}

function nextQuestion(currentQuestion) {
    const current = document.getElementById(`question${currentQuestion}`);
    const next = document.getElementById(`question${currentQuestion + 1}`);

    current.classList.add("hidden");
    current.style.opacity = 0;

    if (next) {
        next.classList.remove("hidden");
        next.style.opacity = 1; 
        next.style.animation = "fadeIn 0.5s forwards";
    } else {
        document.getElementById("quizForm").submit();
    }
}
