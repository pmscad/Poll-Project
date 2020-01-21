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

    getPollById(1).then(console.log);
    getAnswersById(1).then(console.log);
});