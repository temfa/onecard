import React from "react";
import AppLayout from "../../layouts/appLayout";
import "./Bulk.css";
import Recharge from "../../components/Recharge/Recharge";
import RechargeDet from "../../components/RechargeDet/RechargeDet";

const Bulk = () => {
  return (
    <AppLayout pageTitle="Bulk Recharge">
      <div className="single-body">
        <RechargeDet details="To add mutiple numbers, add a comma (,) before typing another (08076543298, 080778.....) or Click here to upload a CSV file" />
        <Recharge />
      </div>
    </AppLayout>
  );
};

export default Bulk;
