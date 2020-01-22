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
  
postNewQuestion( "is this working?", [ "elephant", "no", "terrible"] )