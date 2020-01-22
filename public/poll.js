
const formPollAnswers = document.querySelector(`.poll-answers`);
// const answerInput = document.querySelector(`.answer-text`);
// const copyUrlButton = document.querySelector(`.copy-button`);
const addButton = document.querySelector (`.add`);


formPollAnswers.addEventListener (`click`, (event) => {
    event.preventDefault();
    newElement();
});

function newElement() {
    let input = document.createElement("input")
    input.className = `answer-text`;
    formPollAnswers.insertBefore(input, addButton);
}