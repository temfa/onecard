import Keycloak from 'keycloak-js'

let url, realm, clientId

switch(process.env.NODE_ENV) {
   case 'production':
      url = 'https://auth.factorialsystems.io/auth'
      realm = 'onecard'
      clientId = 'public-client'
      break
   default:
      url = 'http://localhost:8080/auth'
      realm = 'demo'
      clientId = 'js-console'
}

const keycloakConfig = {
   url: url,
   // url: 'https://auth.factorialsystems.io/auth',
   realm: realm, 
   clientId: clientId,
   onLoad: 'login-required',
   // onLoad: 'check-sso',
   pkceMethod: 'S256',
   checkLoginIframe: true,
   // sslRequired: "external",
   // resource: "public-client",
   // publicClient: true,
   checkLoginIframeInterval: 25,
   // frameAncestors: 'self'
}

// const keycloak = new Keycloak(keycloakConfig, initOptions);

const keycloak = new Keycloak(keycloakConfig);
export default keycloak
