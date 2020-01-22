document.addEventListener('DOMContentLoaded', () => {

    async function getPollById(id){
        const response = await fetch(`http://localhost:8080/api/polls/${id}`);
        const data = await response.json()
        return data;
    }
    async function getAnswersById(Id){
        const response = await fetch(`http://localhost:8080/api/answers/${Id}`);
        const data = await response.json()
        return data;
    }
    async function getVotesById(id){
        const response = await fetch(`http://localhost:8080/api/votes/${id}`);
        const data = await response.json()
        return data;
    }

    const id = 1;
    const question =document.querySelector(`#answered-question`);
    const answerToQuestion = document.querySelector(`#answers`);

    getPollById(id)
        .then(poll=> {
            const questionCard = 
                `<h2 class="question_answered">
                        ${poll.question}
                </h2>`;
            question.innerHTML += questionCard;
        })  
      
    getAnswersById(id)
        .then(answers =>{
            answers.forEach(answer =>{
                const voteCount = [];
                getVotesById(answer.id)
                .then(vote =>{
                    voteCount.push(vote);
                })
                .then(data =>{
                    const answerCard = 
                    `<div class="answer">
                        <p class="answer-text">
                            ${answer.answer}
                        </p>
                        <div class="votes-received" id="${answer.id}">
                            <p class="voute-count">
                                ${voteCount[0].length}
                            </p>
                        </div>
                    </div>`;
                    answerToQuestion.innerHTML += answerCard;
                    console.log(data)
                })
            })  
        })
});