const formPollAnswers = document.querySelector(`.poll-answers`);
const addButton = document.querySelector (`#add`);
const createPoll = document.querySelector(`#poll-button`);
const questionText = document.querySelector(`#question-text`);
const answersForQuestion =[];

async function postNewQuestion(question , answers) {
    await fetch('http://localhost:8080/api/polls/new', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ "question": question, "answers": answers})
    });
}

addButton.addEventListener (`click`, (event) => {
    event.preventDefault();
    function newElement() {
        let input = document.createElement("input")
        input.className = `answer-text`;
        input.placeholder = `Type your answer`
        formPollAnswers.insertBefore(input, addButton);
    }
    newElement();
});

createPoll.addEventListener(`click`, (event)=>{ 
    const answerText = document.querySelectorAll(`.answer-text`);
    event.preventDefault()
    answerText.forEach(answer =>{
        answersForQuestion.push(answer.value)
    });
    postNewQuestion( questionText.value, answersForQuestion );
});