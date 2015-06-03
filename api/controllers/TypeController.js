/**
 * TypeController
 *
 * @description :: Server-side logic for managing assesses
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
  addType: function(req, res) {
    if(req.session.user) {
      UserInfo.update({
        id: req.session.user.id},
        { type: "testing test"
      })
      .then(function(data) {
        res.send(data);
      })
    } else {
      res.send(403, 'You must be logged in!');
    }
  }
};
