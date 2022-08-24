import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import hidden from '../../../assets/icons/hidden.svg'
import notHidden from '../../../assets/icons/not-hidden.svg'
import './ConfirmRecovery.scss'
import SuccessModal from '../../../components/successModal/SuccessModal'

const ConfirmRecovery = () => {
  const [phone, setPhone] = useState<string>('')
  const [phoneErr, setPhoneErr] = useState<string>('')
  const [smsCode, setSmsCode] = useState<string>('')
  const [smsErr, setSmsErr] = useState<string>('')

  const [toRecover, setToRecover] = useState<boolean>(false)

  const [seconds, setSeconds] = useState<number>(59)
  const navigate = useNavigate()

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (phone === '') return setPhoneErr('Введите номер')
    else setPhoneErr('')
    if (smsCode === '') return setSmsErr('Введите код')
    else setSmsErr('')

    navigate('/auth/confirmRecovery')
    setPhone('')
    setSmsCode('')
    setToRecover(true)
  }

  let timer: number
  useEffect(() => {
    if (seconds <= 0) return stopTimer
    timer = setInterval(() => setSeconds(seconds - 1), 1000)
    return () => clearInterval(timer)
  }, [seconds])

  const stopTimer = () => clearInterval(timer)

  const restartTimer = () => setSeconds(59)

  const sendAgain = () => restartTimer()

  // START SECOND
  const [success, setSuccess] = useState<boolean>(false)

  const [firstPass, setFirstPass] = useState<string>('')
  const [secondPass, setSecondPass] = useState<string>('')
  const [passErr, setPassErr] = useState<string>('')

  const [passVisible, setPassVisible] = useState<boolean>(false)
  const [rePassVisible, setRePassVisible] = useState<boolean>(false)

  const handleSubmitRecover = (e: any) => {
    e.preventDefault()
    if (firstPass !== secondPass) return setPassErr('Пароли не совпадают')
    setSuccess(true)
  }
  return (
    <section className="recovery">
      <div className="container">
        {success ? (
          <SuccessModal />
        ) : toRecover ? (
          <form className="signUp__form" onSubmit={handleSubmitRecover}>
            <h1 className="signUp__form--title">Восстановление пароля</h1>
            <div className="signUp__form--items">
              <input
                type={passVisible ? 'text' : 'password'}
                placeholder="Введите новый пароль"
                className="signUp__form--input"
                autoComplete={'on'}
                required
                value={firstPass}
                onChange={(e) => setFirstPass(e.target.value)}
              />
              <button
                onClick={() => setPassVisible(!passVisible)}
                type="button"
              >
                <img
                  className="signUp__form--hide-icon"
                  src={passVisible ? notHidden : hidden}
                  alt="hidden icon"
                />
              </button>
            </div>
            <div className="signUp__form--items">
              <input
                type={rePassVisible ? 'text' : 'password'}
                placeholder="Повторите новый пароль"
                className="signUp__form--input"
                autoComplete={'on'}
                required
                value={secondPass}
                onChange={(e) => setSecondPass(e.target.value)}
              />
              <button
                onClick={() => setRePassVisible(!rePassVisible)}
                type="button"
              >
                <img
                  className="signUp__form--hide-icon"
                  src={rePassVisible ? notHidden : hidden}
                  alt="hidden icon"
                />
              </button>
            </div>
            {passErr && (
              <span className="recovery__form--error confirm-err">
                {passErr}
              </span>
            )}
            <button className="btn" type="submit">
              Далее
            </button>
          </form>
        ) : (
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
              <span className="recovery__form--error confirm-err">
                {phoneErr}
              </span>
            )}
            <div
              className={
                smsErr ? 'recovery__form--item err' : 'recovery__form--item'
              }
            >
              <input
                type="number"
                placeholder="Введите код подтверждения"
                className="recovery__form--input"
                value={smsCode}
                onChange={(e) => setSmsCode(e.target.value)}
              />
            </div>
            {smsErr && <span className="recovery__form--error">{smsErr}</span>}

            <button className="recovery__form--btn btn" type="submit">
              Далее
            </button>
            <p className="confirm__form--sms">Не пришло SMS сообщение?</p>
            <button
              className={
                seconds <= 0
                  ? 'confirm__form--reset-btn btn active'
                  : 'confirm__form--reset-btn btn'
              }
              type="button"
              disabled={seconds <= 0 ? false : true}
              onClick={sendAgain}
            >
              {seconds <= 0
                ? 'Отправить еще раз'
                : `Отправить снова через 0:${String(seconds).padStart(2, '0')}`}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default ConfirmRecovery
