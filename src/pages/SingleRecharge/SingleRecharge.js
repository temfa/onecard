import React from "react";
import RechargeDet from "../../components/RechargeDet/RechargeDet";
import AppLayout from "../../layouts/appLayout";
import "./SingleRecharge.css";
import Recharge from "../../components/Recharge/Recharge";

const SingleRecharge = () => {
  return (
    <AppLayout pageTitle="Single Recharge">
      <div className="single-body">
        <RechargeDet />
        <Recharge />
      </div>
    </AppLayout>
  );
};

export default SingleRecharge;
