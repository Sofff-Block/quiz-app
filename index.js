console.clear()

const bookmark = document.querySelector('[data-js="bookmark"]');
bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("bookmark__icon--active");
});

const cardAnswer = document.querySelector('[data-js="cardAnswer"]');
const answerSpan = document.querySelector('[data-js="answerSpan"]');

cardAnswer.addEventListener("click", () => {
    answerSpan.classList.toggle("card__answer--visible");

    if (cardAnswer.classList.contains("card__answer--visible")) {
        answerSpan.textContent = "Hide answer";
    } else {
        answerButton.textContent = "Show answer";
    }
});

