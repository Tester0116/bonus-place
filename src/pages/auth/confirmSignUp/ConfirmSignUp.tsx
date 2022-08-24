import { useEffect, useState } from 'react'

import { Link } from 'react-router-dom'
import SuccessModal from '../../../components/successModal/SuccessModal'

import './ConfirmSignUp.scss'

const ConfirmSignUp = () => {
  const [storagePhone, setStoragePhone] = useState<string>('')
  useEffect(() => {
    const phone = localStorage.getItem('signUpPhone')
    setStoragePhone(phone ?? '')
  }, [])

  const [smsCode, setSmsCode] = useState<string>('')
  const [seconds, setSeconds] = useState<number>(59)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  let timer: number
  useEffect(() => {
    if (seconds <= 0) return stopTimer
    timer = setInterval(() => setSeconds(seconds - 1), 1000)
    return () => clearInterval(timer)
  }, [seconds])

  const stopTimer = () => clearInterval(timer)

  const restartTimer = () => setSeconds(59)

  const sendAgain = () => restartTimer()

  const submitHandler = (e: any) => {
    e.preventDefault()
    console.log(smsCode)
    setTimeout(() => {
      setModalVisible(true)
    }, 500)
  }

  return (
    <section className="confirm">
      <div className="container">
        {modalVisible ? (
          <SuccessModal title="Телефон подтвержден" />
        ) : (
          <form className="confirm__form" onSubmit={submitHandler}>
            <h1 className="confirm__form--title">
              Подтверждение номера телефона
            </h1>
            <p className="confirm__form--phone">
              +{Number(storagePhone).toLocaleString('ru')}
            </p>
            <Link className="confirm__form--change-phone" to={'/auth/signup'}>
              Неверный номер телефона?
            </Link>
            <input
              className="confirm__form--input"
              type="text"
              required
              placeholder="Введите код подтверждения"
              value={smsCode}
              onChange={(e) => setSmsCode(e.target.value)}
            />
            <button className="confirm__form--submit btn" type="submit">
              Подтвердить
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

export default ConfirmSignUp
