import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import './SignIn.scss'

const SignIn = () => {
  const [phone, setPhone] = useState('')
  const [phoneErr, setPhoneErr] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (phone === '') {
      return setPhoneErr('Введите номер')
    } else setPhoneErr('')

    localStorage.setItem('signInPhone', phone)
    navigate('/auth/confirmSignIn')
    setPhone('')
  }
  return (
    <section className="signIn">
      <Outlet />
      <form className="signIn__form" onSubmit={handleSubmit}>
        <h1 className="signIn__form--title">Войдите, чтобы продолжить</h1>
        <div
          className={
            phoneErr ? 'signUp__form--items err' : 'signUp__form--items'
          }
        >
          <PhoneInput
            defaultCountry="KG"
            international
            smartCaret
            countryCallingCodeEditable={false}
            className="signIn__form--input"
            onChange={(val) => setPhone(val ?? '')}
            placeholder={'Номер телефона'}
            value={phone}
          />
        </div>
        {phoneErr && <span className="signUp__form--error">{phoneErr}</span>}

        <button className="signIn__form--btn btn">Войти</button>
        <Link className="signIn__form--link" to={'/auth/signUp'}>
          Зарегистрироваться
        </Link>
      </form>
    </section>
  )
}

export default SignIn
