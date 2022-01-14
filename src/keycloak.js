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
   realm: realm, 
   clientId: clientId,
   onLoad: 'login-required',
   pkceMethod: 'S256',
   checkLoginIframe: true,
   checkLoginIframeInterval: 25,
   // frameAncestors: 'self'
   // sslRequired: "external",
   // resource: "public-client",
   // publicClient: true,
   // onLoad: 'check-sso',
   // url: 'https://auth.factorialsystems.io/auth',
}

// const keycloak = new Keycloak(keycloakConfig, initOptions);

const keycloak = new Keycloak(keycloakConfig);
export default keycloak
