var models = require('../models');

module.exports = {
  get: function(req, res) {
    models.messages.getAll(function(err, results) {
      //to do = handle err
      res.json(results);
    });
  }, // a function which handles a get request for all messages
  post: function(req, res) {
    console.log('req body', req.body);
    var params = [ req.body.text, req.body.username, req.body.roomname ];
    models.messages.create(params, function(err, results) {
      //to do = handle err
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(201).end();
        // res.json(results);
      }

    });
  } // a function which handles posting a message to the database
};
