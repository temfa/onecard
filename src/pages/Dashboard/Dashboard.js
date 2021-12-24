import { useKeycloak } from "@react-keycloak/web";
import React from "react";
import AppLayout from "../../layouts/appLayout";
import "./Dashboard.css";
import Quick from "../../components/Quick/Quick";
import Button from "../../components/Button/Button";
import DashboardTrans from "../../components/Dashboard/DashboardTrans";

const Dashboard = () => {
  const quickDetails1 = [
    {
      amount: "#5000",
      type: "MTN Airtime Topup",
    },
    {
      amount: "10GB",
      type: "MTN Data Topup",
    },
    {
      amount: "600 PIN",
      type: "NECO SCRATCH CARD",
    },
  ];

  const quickDetails2 = [
    {
      amount: "1000 UNIT",
      type: "EKDC  Topup",
    },
    {
      amount: "#5000",
      type: "MTN Data Topup",
    },
    {
      amount: "#5000",
      type: "MTN Data Topup",
    },
  ];
  // const {keycloak, initialized} = useKeycloak()
  const { keycloak } = useKeycloak();
  console.log(keycloak);
  return (
    <div>
      {
      keycloak.authenticated && <AppLayout pageTitle="Dashboard">
          <div className="dashboard-body">
            <div className="account">
              <h2>Account Balance</h2>
              <div className="dashboard-container">
                <h3>One Card Nigeria</h3>
                <h2>#896,584,697.00</h2>
                <p>24 Jan, 2021</p>
              </div>
              <div className="dashboard-quick">
                <h2>Quick Recharge</h2>
                <div className="dashboard-quick-body">
                  <div className="quick-body1">
                    {quickDetails1.map((items) => (
                      <Quick amount={items.amount} type={items.type} />
                    ))}
                  </div>
                  <div className="quick-body2">
                    {quickDetails2.map((items) => (
                      <Quick amount={items.amount} type={items.type} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="trans">
              <h2>Transaction History</h2>
              <div className="trans-body">
                <div className="trans-head">
                  <p>Recipient</p>
                  <p className="type">Transaction Type</p>
                  <p>Amount</p>
                </div>
                <DashboardTrans />
                <DashboardTrans />
                <DashboardTrans />
                <DashboardTrans />
                <DashboardTrans />
                <DashboardTrans />
                <DashboardTrans />
                <p className="view">View all</p>
              </div>
              <Button
                buttonText="Single Recharge"
                backgroundColor="#EB6A2B"
                Color="white"
                marginTop="31px"
              />
              <Button
                buttonText="Bulk Recharge"
                backgroundColor="#EB6A2B"
                Color="white"
                marginTop="31px"
              />
            </div>
          </div>
        </AppLayout>
        // : keycloak.login()
        // : <h2>keycloak initializing ....!!!!</h2>
      }
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
  );
};

export default Dashboard;
