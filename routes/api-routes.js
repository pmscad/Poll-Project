const db = require(`../models/index`)

module.exports = function(app){
    app.get(`/api/polls`, function (req,res){
        db.Polls.findAll().then( result =>{
            res.status( 200 ).json(result);
        })
    })

    app.get(`/api/Polls/:id`, function (req, res){
        const pollId = req.params.id;
        console.log(pollId)
        if (pollId){
            db.Polls.findOne({
                where: {
                    id: pollId
                }
            }).then(result => {
                res.status( 200 ).json(result);
            })
        }
    });

    app.get(`/api/answers/:id`, function(req, res){
        const answerPollId = req.params.id;
        if (answerPollId){
            db.Answers.findAll({
                where: {
                    poll_id: answerPollId
                }
            }).then(result => {
                res.status( 200 ).json(result);
            })
        }
    });

    app.get(`/api/votes/:id`, function(req, res){
        const votePollId = req.params.id;
        if (votePollId){
            db.Votes.findAll({
                where: {
                    answer_id: votePollId
                }
            }).then(result => {
                res.status( 200 ).json(result);
            })
        }
    });

    app.post(`/api/polls/new`, function(req,res){
        const newPoll = req.body;
        let newPollId;
        db.Polls.create({
            question: newPoll.question
        }).then(result =>{
            newPollId = result.id;
            console.log(newPollId);
            newPoll.answers.forEach(answers=>{
                db.Answers.create({
                    poll_id: newPollId,
                    answer: answers
                })
            })
        res.end();
        })
    })
}