/**
 * Passport configuration
 *
 * This is the configuration for your Passport.js setup and where you
 * define the authentication strategies you want your application to employ.
 *
 * I have tested the service with all of the providers listed below - if you
 * come across a provider that for some reason doesn't work, feel free to open
 * an issue on GitHub.
 *
 * Also, authentication scopes can be set through the `scope` property.
 *
 * For more information on the available providers, check out:
 * http://passportjs.org/guide/providers/
 */

 var host = process.env.NODE_ENV == 'production' ? 'mozaiq.herokuapp.com' : 'localhost:1337';

 module.exports.passport = {
  local: {
    strategy: require('passport-local').Strategy
  },

  facebook: {
    name: 'Facebook',
    protocol: 'oauth2',
    strategy: require('passport-facebook').Strategy,
    options: {
      clientID: process.env.FACEBOOK_APP_ID,
      clientSecret: process.env.FACEBOOK_SECRET,
      callbackURL: "http://" + host + "/auth/facebook/callback",
      scope: ['email', 'user_friends', 'public_profile'] /* email is necessary for login behavior */
    }
  }
};