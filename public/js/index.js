document.addEventListener('DOMContentLoaded', () => {

    async function getAllPolls(){
        const response = await fetch(`http://localhost:8080/api/polls`);
        const data = await response.json()
        return data;
    }
    async function getPollBySearch(Search){
        const response = await fetch(`http://localhost:8080/api/polls/search/${Search}`);
        const data = await response.json()
        return data;
    }
    
    const questions = document.querySelector(`#questions`);
    const url = window.location.href;
    console.log(url);
    
    getAllPolls()
        .then(data => {
            data.forEach(poll => {
            const questionCard = 
                `<li class="link-question">
                    <a href= "${url}question/${poll.id}">
                        ${poll.question}
                    </a>
                </li>`;
            questions.innerHTML += questionCard;
        })  
    });
    getPollBySearch().then(console.log);
});