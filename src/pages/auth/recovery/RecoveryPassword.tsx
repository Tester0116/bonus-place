import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import './RecoveryPassword.scss'

const RecoveryPassword = () => {
  const [phone, setPhone] = useState<string>('')
  const [phoneErr, setPhoneErr] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (phone === '') {
      return setPhoneErr('Введите номер')
    } else setPhoneErr('')

    navigate('/auth/confirmRecovery')
    setPhone('')
  }

  return (
    <section className="confirm">
      <div className="container">
        <form className="recovery__form" onSubmit={handleSubmit}>
          <h1 className="recovery__form--title">Восстановление пароля</h1>
          <p className="recovery__form--description">
            Введите номер телефона чтобы отправить код подтверждения
          </p>
          <div
            className={
              phoneErr ? 'recovery__form--item err' : 'recovery__form--item'
            }
          >
            <PhoneInput
              defaultCountry="KG"
              international
              smartCaret
              countryCallingCodeEditable={false}
              className="recovery__form--input"
              onChange={(val) => setPhone(val ?? '')}
              placeholder={'Номер телефона'}
              value={phone}
            />
          </div>
          {phoneErr && (
            <span className="recovery__form--error">{phoneErr}</span>
          )}

          <button className="recovery__form--btn btn" type="submit">
            Далее
          </button>
        </form>
      </div>
    </section>
  )
}

export default RecoveryPassword
