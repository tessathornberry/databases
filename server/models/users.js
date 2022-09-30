var db = require('../db');

module.exports = {
  getAll: function (callback) {
    var queryStr = "SELECT * FROM users";
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  },

  create: function (params, callback) {
    var queryStr = "INSERT into users(username) values(?)";
    db.query(queryStr, function(err, results) {
      callback(err, results);
    });
  }
};