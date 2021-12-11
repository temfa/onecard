import React, { useState } from "react";
import OneCardLogoWhite from '../../assets/logos/onecard-white.svg'
import './Sidebar.css'

const Sidebar = () => {
    const [menuList] = useState([
        {
            item: 'Dashboard',
            active: true,
            roleType: 'all',
        },
        {
            item: 'Single Recharge',
            active: false,
            roleType: 'all',
        },
        {
            item: 'Bulk Recharge',
            active: false,
            roleType: 'all',
        },
        {
            item: 'Fund Wallet',
            active: false,
            roleType: 'all',
        },
        {
            item: 'Beneficiaries',
            active: false,
            roleType: 'all',
        },
        {
            item: 'Auto & Scheduled',
            active: false,
            roleType: 'all',
        },
        {
            item: 'Transactions',
            active: false,
            roleType: 'all',
        },
        {
            item: 'Roles',
            active: false,
            roleType: 'all',
        },
    ])
    const [accountList] = useState([
        {
            item: 'Profile',
            active: false,
            roleType: 'all',
        },
        {
            item: 'Logout',
            active: false,
            roleType: 'all',
        },
    ])
    return (
        <div className="sidebar">
            <div className="sidebar-container">
                <img className="logo-white" src={OneCardLogoWhite} alt="white onecard logo" />
                <div className="sidebar-menu">
                    <p className="title">Menu</p>
                    <ul className="menu-list">
                        { menuList.map((item, index) => <li className={item.active ? 'active' : ''} key={index}>{item.item}</li>) }
                    </ul>
                </div>
                <div className="sidebar-menu">
                    <p className="title">Account</p>
                    <ul className="menu-list">
                        { accountList.map((item, index) => <li className={item.active ? 'active' : ''} key={index}>{item.item}</li>) }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;
