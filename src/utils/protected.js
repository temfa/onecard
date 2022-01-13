import { useKeycloak } from "@react-keycloak/web";
import Contact from "../pages/Contact/Contact";

const ProtectedRoute = ({ children }) => {
    const { keycloak } = useKeycloak()
    console.log(keycloak)

    const isLoggedIn = !keycloak.authenticated

    return isLoggedIn ? children : <Contact />
}

export default ProtectedRoute
