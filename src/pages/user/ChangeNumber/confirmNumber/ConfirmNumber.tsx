import React, { useEffect, useState } from 'react'
import './ConfirmNumber.scss'
interface confirmNumberProps {
  setCorrectNumber: Function
  value: string
}
function ConfirmNumber({ value, setCorrectNumber }: confirmNumberProps) {
  const [confirmCode, setConfirmCode] = useState<string>('')
  const [seconds, setSeconds] = useState<number>(59)

  const codeInput = (e: any) => {
    if (e.target.value.length <= 6) setConfirmCode(e.target.value)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1)
    }, 1000)
    if (seconds <= 0) clearInterval(interval)
    return () => clearInterval(interval)
  }, [seconds])
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div className="confirm-number">
      <p className="number">{value}</p>
      <p className="confirm-number__wrong">Неверный номер телефона?</p>
      <form>
        <input
          type="number"
          onChange={codeInput}
          value={confirmCode}
          className="confirm-number__input"
          placeholder="Введите код подтверждения"
        />
        <button
          disabled={confirmCode.length !== 6}
          className="confirm-number__btn"
        >
          Сменить номер
        </button>
      </form>
      <p className="didnot-come">Не пришло SMS сообщение?</p>
      <button disabled={seconds > 0} className="confirm-number__again">
        Отправить снова{' '}
        {seconds != 0 && 'через 00:' + String(seconds).padStart(2, '0')}
      </button>
    </div>
  )
}

export default ConfirmNumber
