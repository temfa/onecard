import React from "react";
import BeneficiaryDetail from "../../components/BeneficiaryDetail/BeneficiaryDetail";
import BorderedButton from "../../components/Button/BorderedButton";
import AppLayout from "../../layouts/appLayout";
import "./Beneficiaries.css";

const Beneficiaries = () => {
  return (
    <AppLayout pageTitle="Beneficiaries">
      <div className="beneficiaries">
        <div>
          <h2 className="recharge-banner">My Beneficiaries</h2>
          <div className="my-beneficiaries">
            <input type="text" placeholder="Search Beneficiaries" />
            <div className="a">
              <div>
                <p>A</p>
                <BeneficiaryDetail />
              </div>
              <BeneficiaryDetail marginLeft="10%" />
              <BeneficiaryDetail marginLeft="10%" />
            </div>
            <div className="b">
              <div>
                <p>B</p>
                <BeneficiaryDetail />
              </div>
              <BeneficiaryDetail marginLeft="10%" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="recharge-banner">Create New beneficiary</h2>
          <div className="create-beneficiaries">
            <input type="text" placeholder="Select category" />
            <input type="text" placeholder="Phone" />
            <input type="text" placeholder="Alias" />
            <BorderedButton
              buttonText="Save"
              backgroundColor="#EB6A2B"
              Color="white"
              marginTop="226px"
              width="266px"
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Beneficiaries;
