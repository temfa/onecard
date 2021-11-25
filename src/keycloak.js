import Keycloak from 'keycloak-js'

const keycloakConfig = {
   url: 'http://localhost:8080/auth',
//    url: 'https://auth.factorialsystems.io/auth',
   realm: 'onecard', 
   clientId: 'public-client',
   onLoad: 'check-sso',
   pkceMethod: 'S256',
   checkLoginIframe: true,
//    checkLoginIframeInterval: 25,
//    frameAncestors: 'self'
}

// const keycloak = new Keycloak(keycloakConfig, initOptions);

const keycloak = new Keycloak(keycloakConfig);
export default keycloak
