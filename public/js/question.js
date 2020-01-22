document.addEventListener('DOMContentLoaded', () => {

    async function getPollById(Id){
        const response = await fetch(`http://localhost:8080/api/polls/${Id}`);
        const data = await response.json()
        return data;
    }
    async function getAnswersById(Id){
        const response = await fetch(`http://localhost:8080/api/answers/${Id}`);
        const data = await response.json()
        return data;
    }
    async function postNewVote(answer_id , unique_id) {
        await fetch('http://localhost:8080/api/votes/new', {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          credentials: 'same-origin', 
          headers: {
            'Content-Type': 'application/json'
          },
          redirect: 'follow',
          referrerPolicy: 'no-referrer',
          body: JSON.stringify({ "answer_id": answer_id, "unique_id": unique_id})
        });
    }
    
    let id = 1;
    const question = document.querySelector(`#question-here`);
    const answers = document.querySelector(`#answers-here`);
    console.log(answers)
    getPollById(id).then(data => {
        const questionSelected = 
            `<p class="picked-question mobile-picked-question" id="${data.id}">${data.question}</p>`;
            question.innerHTML += questionSelected;
    });
    getAnswersById(id).then(data => {
        data.forEach(answer =>{
            console.log(answer)
        const answersSelected = 
        `<div class="favorite-answer mobile-favorite-answer">
            <p class="picked-answer mobile-picked-answer">${answer.answer}</p>
            <button class ="vote-answer" type="submit" id="${answer.id}">VOTE</button>
        </div>
        `;
        answers.innerHTML += answersSelected;
        const voteButtons = document.querySelectorAll(`.vote-answer`);
        voteButtons.forEach(voteButton =>{
            voteButton.addEventListener(`click`, (event) =>{
                console.log(`Voting for ${event.target.id}`)
                postNewVote(event.target.id);
            }) 
        })
        })
    });
    
});