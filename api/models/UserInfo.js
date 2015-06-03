/**
* UserInfo.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    user_id   : { type: 'string', unique: true },
    id        : { type: 'string' },
    email     : { type: 'email',  unique: true },
    first_name: { type: 'string' },
    last_name : { type: 'string' },
    link      : { type: 'string' },
    type      : { type: 'string' }
  }
};

