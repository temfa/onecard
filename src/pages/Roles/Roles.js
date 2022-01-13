import React from "react";
import AppLayout from "../../layouts/appLayout";
import "./Roles.css";
import { useKeycloak } from '@react-keycloak/web'

const Roles = () => {
  const keycloak = useKeycloak()
  console.log(keycloak)

  return (
    <AppLayout pageTitle="Roles">
      <p>Roles content</p>
    </AppLayout>
  );
};

export default Roles;
