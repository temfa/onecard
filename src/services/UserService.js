import Keycloak from 'keycloak-js'
 
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'
// const keycloak = new Keycloak()
const _kc = new Keycloak('/keycloak.json');
/**
* Initializes Keycloak instance and calls the provided callback function if successfully authenticated.
*
* @param onAuthenticatedCallback
*/
const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
      onLoad: 'check-sso',
      silentCheckSsoRedirectUri: window.location.origin + '/silent-check-sso.html',
      pkceMethod: 'S256',
    })
      .then((authenticated) => {
        if (authenticated) {
            onAuthenticatedCallback();
        } else {
            // onAuthenticatedCallback();
            doLogin();
        }
    })
};

const doLogin = () => {
    console.log(!_kc.authenticated)
    return !_kc.authenticated && _kc.login;
}

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
  _kc.updateToken(5)
    .then(successCallback)
    .catch(doLogin);
 
const UserService = {
    initKeycloak,
    doLogin,
    isLoggedIn,
    getToken,
    updateToken,
};
  
export default UserService;