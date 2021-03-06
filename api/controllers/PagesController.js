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
  },
  friends_list: function(req, res) {
    Passport.findOne({user: req.session.passport.user}).then(function(data) {
      console.log("req.session.passport.user: ", req.session.passport.user);
      console.log("accessToken: ", data.tokens.accessToken);
      var accessToken = data.tokens.accessToken;

      var client = fbapi.user(accessToken); // needs a valid access_token
      client.me.friends(function (err, data) {
        if(err) {
          console.log("Error: " + JSON.stringify(err));
        } else {
          console.log("Original data: ", data);

          res.send(data);

          // var allFriends = [];
          // var friendTestArray = [];

          // // console.log("allFriends", allFriends, "friendTestArray", friendTestArray);

          // //currently, this only pulls the first entry.
          // for (i = 0; i < data.length; i += 1) {
          //   UserInfo.findOne({id: data[i].id}).then(function(d) {
          //     if (friendTestArray.length < 3) {
          //       friendTestArray.push(d.id, d.first_name + " " + d.last_name, d.type);
          //       console.log("friendTestArray inside loop", friendTestArray);
          //     } else {
          //       allFriends.push(friendTestArray);
          //       console.log("friendTestArray", friendTestArray);
          //       friendTestArray = [];
          //       res.send(JSON.stringify(allFriends));
          //     }
          //   })
          // }

        }
      });
})
}
}