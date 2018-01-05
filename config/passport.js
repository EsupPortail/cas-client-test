const SamlStrategy = require('passport-saml').Strategy;
const CasStrategy = require('../strategy/passport-cas').Strategy;

module.exports = function (passport, config) {

  passport.serializeUser(function (user, done) {
    done(null, user);
  });

  passport.deserializeUser(function (user, done) {
    done(null, user);
  });

  passport.use(config.passport.saml2.confName, new SamlStrategy(
    config.passport.saml2,
    function (profile, done) {
      return done(null, profile);
    })
  );

  passport.use(config.passport.saml1.confName, new CasStrategy(
    config.passport.saml1,
    function (profile, done) {
      return done(null, profile);
    })
  );

  passport.use(config.passport.cas2.confName, new CasStrategy(
    config.passport.cas2,
    function (profile, done) {
      return done(null, profile);
    })
  );

  passport.use(config.passport.cas3.confName, new CasStrategy(
    config.passport.cas3,
    function (profile, done) {
      return done(null, profile);
    })
  );
};
