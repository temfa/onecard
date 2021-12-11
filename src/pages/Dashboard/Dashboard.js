import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import AppLayout from "../../layouts/appLayout"
import './Dashboard.css'

const Dashboard = () => {
    // const {keycloak} = useKeycloak()
    const {keycloak, initialized} = useKeycloak()
    console.log(keycloak)
    return (
        <div>
            <AppLayout pageTitle="Dashboard">
                    <p>Dashboard content</p>
                </AppLayout>
            {/* {keycloak.init ?
                keycloak.authenticated && <p>Hello</p>
                : <h2>keycloak initializing ....!!!!</h2>
            } */}
            {/* {`User is ${!keycloak.authenticated ? 'NOT ' : ''}authenticated`} */}

            {/* { keycloak.authenticated
                && <AppLayout pageTitle="Dashboard">
                    <p>Dashboard content</p>
                </AppLayout>
                // : keycloak.init()
                // : <h2>keycloak initializing ....!!!!</h2>
            } */}
        </div>
        // {!!keycloak.authenticated && (<p>hey</p>)}
    )
}

export default Dashboard
