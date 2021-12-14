import React from "react";
import "./ProfilePage.css";
import AppLayout from "../../layouts/appLayout";
import ProfilePic from "../../assets/Rectangle 23.png";
import FCMB from "../../assets/Rectangle 38.png";
import Mastercard from "../../assets/Rectangle 40.png";

const ProfilePage = () => {
  return (
    <AppLayout pageTitle="Profile">
      <div className="profile-container">
        <div className="profile-detail">
          <div className="profile-name">
            <div>
              <img src={ProfilePic} alt="ProfilePic" />
              <div>
                <h2>Peter James</h2>
                <p>Edit Profile</p>
              </div>
            </div>
          </div>
          <div className="profile-info">
            <label>Email</label>
            <input type="email" placeholder="adamjames@gmail.com" />
          </div>
          <div className="profile-info">
            <label>Phone</label>
            <input type="text" placeholder="+234 8175635367" />
          </div>
        </div>
        <div className="bank-details">
          <div>
            <label>Bank Verification Number</label>
            <input type="text" placeholder="685744637****" />
          </div>
          <div>
            <label>Date of Birth</label>
            <input type="text" placeholder="10   |   10   |   10" />
          </div>
          <div>
            <label>Means of Identification</label>
            <input type="text" placeholder="NIN   |   6857763524467" />
          </div>
          <div>
            <label>Bank </label>
            <div className="bank-cont">
              <img src={FCMB} alt="FCMB" />
              <div>
                <h3>FCMB</h3>
                <p>5564372934</p>
              </div>
            </div>
          </div>
          <div>
            <label>Bank </label>
            <div className="bank-cont">
              <img src={Mastercard} alt="Mastercard" />
              <div>
                <h3>Mastercard</h3>
                <p>**** ***** ****564</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ProfilePage;
