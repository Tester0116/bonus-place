import React, { useEffect, useId} from 'react';
import "./Profile.scss";
import userLogo from "../../assets/icons/contact/user.svg";
import phoneLogo from "../../assets/icons/contact/phoneLogo.svg";
import {Outlet} from 'react-router-dom';
import ControlTabs from '../../components/controlTabs/ControlTabs';

interface componentsType {
  icon: any
  id: string
  link: string
  name: string
}

const components: componentsType[] = [
    {
        icon: userLogo,
        id: "#user",
        link: "",
        name: "О нас",
    },
    {
        icon: phoneLogo,
        id: "#phone",
        name: "Контакты",
        link: "contact",
    },
    {
        icon: userLogo,
        id: "#user",
        name: "Помощь",
        link: "help",
    },
]
const Profile = () => {
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  const uniqId = useId()
  return (
    <div className="profile">
      <div className="container">
          <ControlTabs items={components} key={uniqId} />
          <div className="profile__right">
            <Outlet />
          </div>

      </div>
    </div>
  )
}

export default Profile
