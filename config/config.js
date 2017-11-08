var casUrl = 'https://cas-localhost/cas';
var loginHost = 'login-localhost';
var loginUrl = 'https://' + loginHost;

var idpCert = 'your_certificate_idp====_needs_to_be_changed_depending_on_your_conf';

module.exports = {
  development: {
    app: {
      name: 'Cas test login platform protocol',
      port: process.env.PORT || 8080
    },
    passport: {
      serverBaseURL: loginUrl,
      casLogoutUrl: casUrl + '/logout',
      cas2: {
        confName: 'cas2',
        ssoBaseURL: casUrl,
        serverBaseURL: loginUrl
        
      },
      cas3: {
        confName: 'cas3',
        version: 'CAS3.0',
        ssoBaseURL: casUrl,
        serverBaseURL: loginUrl
      },
      saml1: {
        confName: 'saml1',
        version: 'CAS3.0',
        ssoBaseURL: casUrl,
        serverBaseURL: loginUrl,
        useSaml: true
      },
      saml2: {
        confName: 'saml',
        host: loginHost,
        path: process.env.SAML_PATH || '/assert',
        entryPoint: process.env.SAML_ENTRY_POINT || casUrl + '/idp/profile/SAML2/Redirect/SSO',
        issuer: 'passport-saml',
        cert: process.env.SAML_CERT || idpCert,
        protocol: 'https://',
        decryptionPvk : idpCert,
        // disable expiration
        acceptedClockSkewMs: -1,
        logoutUrl: casUrl + '/idp/profile/SAML2/Redirect/SLO'
      }
    }
  }
};
