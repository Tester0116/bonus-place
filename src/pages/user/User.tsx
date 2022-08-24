import React, { useEffect, useId} from 'react'
import userLogo from "../../assets/icons/contact/user.svg";
import phoneLogo from "../../assets/icons/contact/phoneLogo.svg";
import couponLogo from "../../assets/icons/ticket-filled.svg";
import passwordLogo from "../../assets/icons/password.svg";
import "./User.scss";
import {Outlet, useLocation } from 'react-router-dom';
import ControlTabs from '../../components/controlTabs/ControlTabs';

interface componentsType {
    icon: string,
    id: string,
    name: string,
    link: string,
}

const components: componentsType[] = [
    {
        icon: userLogo,
        id: "#user",
        name: "Профиль",
        link: ""
    },
    {
        icon: couponLogo,
        id: "#coupon",
        name: "Мои купоны",
        link: "myCoupon"
    },
    {
        icon: phoneLogo,
        id: "#phone",
        name: "Сменить номер",
        link: "changeNumber",
    },
    {
        icon: passwordLogo,
        id: "#password",
        name: "Сменить пароль",
        link: "changePassword"
    },
]

function User() {
    return (
        <div className='user'>
            <div className="container">
                <div className="user__inner">
                    <ControlTabs items={components}/>
                    <div className="user__content">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default User;