import React, { useState } from "react";
import "./Profile.css";
import Bell from "../../assets/icons/bell.svg"
import BellActive from "../../assets/icons/bell-active.svg"
import ProfilePicture from "../../assets/profile-picture.png"

const Profile = ({ pageTitle, userDetails }) => {
    const [notification] = useState(false)
    return (
        <div className="profile">
            <h1 className="page-title">{ pageTitle }</h1>
            <div className="profile-section">
                {
                    notification 
                        ? <img src={BellActive} alt="notifications exist" />
                        : <img src={Bell} alt="zero notification" />
                }
                <div className="profile-details">
                    <h4>Peter James</h4>
                    <div className="image-box">
                        <img src={ProfilePicture} alt="picture of current user" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
