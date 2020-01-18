const db = require(`../models/index`)
const Polls = require(`../models/Polls`)
const Answers = require(`../models/Answers`)
const Votes = require(`../models/Votes`)

module.exports = function(app){
    app.get(`/api/Polls/:id`, function(req, res){
        const pollId = req.params.id;
        console.log(pollId)
        if (pollId){
            db.Polls.findOne({
                where: {
                    id: pollId
                }
            }).then(function(result){
                return res.json(result);
            })
        } else {
            Polls.findAll().then(function(result){
                return res.json(result);
            })
        }
    });

    app.get(`/api/Answers/:id`, function(req, res){
        const pollId = req.params.id;
        if (pollId){
            Answers.findall({
                where: {
                    poll_id: pollId
                }
            }).then(function(result){
                return res.json(result);
            })
        }
    });

    app.get(`/api/Votes/:id`, function(req, res){
        const pollId = req.params.id;
        if (pollId){
            Votes.findall({
                where: {
                    answer_id: pollId
                }
            }).then(function(result){
                return res.json(result);
            })
        }
    });
}