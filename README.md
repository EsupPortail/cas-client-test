This project aims to make it easier to retrieve and display cas login data after authentication

The repository stands on the fondations of [Passport-SAML example](https://github.com/gbraad/passport-saml-example/).

Usage
-----

```bash
$ npm install
$ bower install
$ npm start
```

Configuration
-------------

The configuration is already done, you just have to replace your parameters into config/config.js

But might need more depending on your environment.

This tool works with [passport](http://www.passportjs.org/) which use stategies in order to execute login

- For **Cas P2, P3, SAML1** you need to have a look to [passport-cas](https://www.npmjs.com/package/passport-cas)

- For **SAML2**, you need to have a look to [passport-saml](https://www.npmjs.com/package/passport-saml)


License
-------

Licensed under the MIT license


Note
----

Based on :
- [PassportJS-Authentication](https://github.com/DanialK/PassportJS-Authentication) by [Danial Khosravi](http://danialk.github.io/)
