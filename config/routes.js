module.exports = function (app, config, passport, stringify) {

  app.get('/', function (req, res) {
    if (req.isAuthenticated()) {
      var rawBody = req.user.rawBody;
      delete req.user.rawBody;
      res.render('home',
        {
          user: req.user,
          userHtml: stringify(req.user),
          rawBody: rawBody
        });
    } else {
      res.render('home',
        {
          user: null
        });
    }
  });

  app.get('/signup', function (req, res) {
    res.render('signup');
  });

  app.get('/profile', function (req, res) {
    if (req.isAuthenticated()) {
      res.render('profile',
        {
          user: req.user
        });
    } else {
      res.redirect('/login');
    }
  });

  app.get('/logout', function (req, res) {
    req.logout();
    var casLogoutUrl = config.passport.casLogoutUrl + "?service=" + encodeURIComponent(config.passport.serverBaseURL); 
    res.redirect(casLogoutUrl);
  });
  
  // ******************* SAML1 ******************** //
  app.get('/loginSAML1',
    passport.authenticate(config.passport.saml1.confName,
      {
        successRedirect: '/',
        failureRedirect: '/login'
      })
  );
  
  // ******************* P2 ******************** //
  app.get('/loginP2',
    passport.authenticate(config.passport.cas2.confName,
      {
        successRedirect: '/',
        failureRedirect: '/login'
      })
  );
  
  // ******************* P3 ******************** //
  app.get('/loginP3',
    passport.authenticate(config.passport.cas3.confName,
      {
        successRedirect: '/',
        failureRedirect: '/login'
      })
  );

  // ******************* SAML2 ******************** //
  app.get('/loginSAML2',
    passport.authenticate(config.passport.saml2.confName,
      {
        successRedirect: '/',
        failureRedirect: '/login'
      })
  );

  // url "/assert", see conf
  app.post(config.passport.saml2.path,
    passport.authenticate(config.passport.saml2.confName,
      {
        failureRedirect: '/',
        failureFlash: true
      }),
    function (req, res) {
      res.redirect('/');
    }
  );
  
  // Endpoint to retrieve metadata 
  app.get("/metadata.xml", function(req, res) {
    var strategy = passport._strategy(config.passport.saml2.confName);
    res.type('application/xml');
    res.send(strategy.generateServiceProviderMetadata(config.passport.saml2.cert));
  });

};
