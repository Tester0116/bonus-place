import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import "./UserProfile.scss";

const userData={
  name:"Александр",
  secondName:"Македонский",
  phoneNumber:"+996555555555"
}

function UserProfile() {
  const [value, setValue]=useState<string>(userData.phoneNumber);
  useEffect(() => {
    window.scroll(0, 0)
}, [])
  return (
    <section className='user-profile'>
      <h2 className='user-profile__title'>Профиль</h2>
      <form className='user-profile__form'>
        <input className="user-profile__input" type="text" defaultValue={userData.name} />
        <input className="user-profile__input" type="text" defaultValue={userData.secondName}/>
          <PhoneInput
          id="phone"
          value={value}
          defaultCountry="KG"
          international
          smartCaret
          countryCallingCodeEditable={false}
          className="user-profile__input flag"
          onChange={(val)=>setValue(val ?? "")} />
        <button >Сохранить</button>
      </form>
    </section>
  )
}

export default UserProfile