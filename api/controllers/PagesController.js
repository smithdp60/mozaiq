/**
 * PagesController
 *
 * @description :: Server-side logic for managing pages
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 var fbapi = require('facebook-api');

 module.exports = {
  index: function(req, res) {
    res.view('pages/index');
  },
  user_data: function(req, res) {
    Passport.findOne({user: req.session.passport.user}).then(function(data) {
      console.log("req.session.passport.user: ", req.session.passport.user);
      console.log("accessToken: ", data.tokens.accessToken);
      var accessToken = data.tokens.accessToken;

      var client = fbapi.user(accessToken); // needs a valid access_token
      client.me.info(function (err, data) {
        if(err) {
          console.log("Error: " + JSON.stringify(err));
        } else {
          res.send(JSON.stringify(data));
        }
      });
    });
  }
};