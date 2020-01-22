
const formPollAnswers = document.querySelector(`.poll-answers`);
const copyUrlButton = document.querySelector(`.copy-button`);
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


const copyToClipBoard = (str) =>
{
    const el = document.createElement('textarea');
    el.value = str;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};
copyUrlButton.addEventListener(`click`,function(){
    
    let copyUrl =  window.location.href;
    copyToClipBoard(copyUrl);
    alert("Invite members to Vote. Paste invitation");
});