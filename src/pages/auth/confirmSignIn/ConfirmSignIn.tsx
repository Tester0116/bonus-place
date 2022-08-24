import { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'

import hidden from '../../../assets/icons/hidden.svg'
import notHidden from '../../../assets/icons/not-hidden.svg'
import './ConfirmSignIn.scss'
import {userApi} from "../../../redux/api/userApi";
import {addAuthTokenToLocalstorage} from "../../../localstorage/auth";

const ConfirmSignIn = () => {
  const navigate = useNavigate()
  const [signIn, result] = userApi.useSignInMutation()

  const [storagePhone, setStoragePhone] = useState('')
  useEffect(() => {
    const phone = localStorage.getItem('signInPhone')
    setStoragePhone(phone ?? '')
  }, [])

  const [password, setPassword] = useState('')
  const [passErr, setPassErr] = useState('')
  const [passVisible, setPassVisible] = useState(false)

  const submitHandler = async (e: any) => {
    e.preventDefault()
    if (password === '') {
      return setPassErr('Введите пароль')
    } else setPassErr('')
    try {
      const response = await signIn({
        phone: storagePhone,
        password
      })
      addAuthTokenToLocalstorage(response.data.access)
      navigate('/')
    } catch {
      alert('Server Error')
    }


  }

  return (
    <section className="confirm">
      <div className="container">
        <form className="confirm__form" onSubmit={submitHandler}>
          <h1 className="confirm__form--title">Войдите, чтобы продолжить</h1>
          <p className="confirm__form--phone">
            +{Number(storagePhone).toLocaleString('ru')}
          </p>
          <div className="confirm__form--items">
            <input
              type={passVisible ? 'text' : 'password'}
              placeholder="Введите пароль"
              className="confirm__form--input-hide"
              autoComplete={'on'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={() => setPassVisible(!passVisible)} type="button">
              <img
                className="confirm__form--hide-icon"
                src={passVisible ? notHidden : hidden}
                alt="hidden icon"
              />
            </button>
          </div>
          {passErr && <span className="confirm__form--error">{passErr}</span>}
          <button className="confirm__form--submit btn" type="submit">
            Войти
          </button>
          <Link className="confirm__form--sms" to={'/auth/recovery'}>
            Не помню пароль
          </Link>
        </form>
      </div>
    </section>
  )
}

export default ConfirmSignIn
