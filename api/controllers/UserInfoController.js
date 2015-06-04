/**
 * UserInfoController
 *
 * @description :: Server-side logic for managing userinfoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {

  update: function(req, res){
    UserInfo.update({id:req.params.id},req.body).then(function(data){
      res.send(data);
    }).catch(function(err){
      res.send(500,err);
    });
  }

};

