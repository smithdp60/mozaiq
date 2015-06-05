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


          // data = [
          // {
          //   id: "10205730082203000",
          //   feed: { },
          //   name: "Katie Gilmur"
          // },
          // {
          //   id: "10205730082203000",
          //   feed: { },
          //   name: "Allieeeee Moses"
          // }
          // ]

          // res.send(JSON.stringify(data[0].id));

          var allFriends = [];
          var friendTestArray = [];

          for (i = 0; i < data.length; i += 1) {
            UserInfo.find({id: data[i].id}).exec(function(d) {
              // friendTestArray = d;
              if (friendTestArray.length < 3) {
                friendTestArray.push(d.id, d.first_name + " " + d.last_name, d.type);
              } else {
                allFriends.push(friendTestArray);
                friendTestArray = [];
                res.send(JSON.stringify(allFriends));
              }
            })
          }

        }
      });
})
}
}