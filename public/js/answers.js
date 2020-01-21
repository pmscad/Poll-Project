document.addEventListener('DOMContentLoaded', () => {

    async function getPollById(Id){
        const response = await fetch(`http://localhost:8080/api/polls/${Id}`);
        const data = await response.json()
        return data;
    }
    async function getVotesById(Id){
        const response = await fetch(`http://localhost:8080/api/votes/${Id}`);
        const data = await response.json()
        return data;
    }

    getPollById(1).then(console.log);
    getVotesById(1).then(console.log);
});