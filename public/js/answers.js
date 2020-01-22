document.addEventListener('DOMContentLoaded', () => {

    async function getPollById(id){
        const response = await fetch(`http://localhost:8080/api/polls/${id}`);
        const data = await response.json()
        return data;
    }
    async function getVotesById(id){
        const response = await fetch(`http://localhost:8080/api/votes/${id}`);
        const data = await response.json()
        return data;
    }

    getPollById(1).then(console.log);
    getVotesById(1).then(console.log);
});