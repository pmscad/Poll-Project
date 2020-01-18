const Answers = require(`../models/Answers.js`);
const Polls = require(`../models/Polls.js`);
const Votes = require(`../models/Votes.js`);
Answers.hasOne(Polls, {
    foreignKey: `poll_id`
});
Polls.belongTo(Answers);
Votes.hasOne(Answers, {
    foreignKey: `answer_id`
});
Answers.belongTo(Votes);

module.exports = function(app){
    app.get(`/api/Polls/:id`, function(req, res){
        const pollId = req.params.id;
        if (pollId){
            Polls.findOne({
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
};