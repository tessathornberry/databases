var db = require('../db');

module.exports = {
  getAll: function (callback) {
    // return db.query("SELECT * FROM messages",
    //   (err, res, field) => {
    //     if (err) {
    //       return "Error";
    //     } else {
    //       return res;
    //     }
    //   }
    // );
    //return index.getAllMessages();

    //var allMessages = chat.models.messages.findAll();
    //return allMessages;
    var queryStr = "SELECT messages.id, messages.text, messages.roomname, users.username \
    FROM messages left outer join users on (messages.userid = users.id) \
    order by messages.id desc";
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });

  }, // a function which produces all the messages

  create: function (params, callback) {
    var queryStr = "INSERT into messages(text, userid, roomname) value (?, (SELECT id FROM users WHERE username = ? limit 1), ?)";

    db.query(queryStr, params, function(err, results) {
      console.log('results of create query', results);
      callback(err, results);
    });

  } // a function which can be used to insert a message into the database
};

//exports.counterFile = path.join(__dirname, 'counter.txt');