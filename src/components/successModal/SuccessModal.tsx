import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import doneIcon from '../../assets/icons/check.svg'
import './SuccessModal.scss'

interface SuccessProps {
  title?: string
}

const SuccessModal: FC<SuccessProps> = ({ title = 'Успешно' }) => {
  const navigate = useNavigate()
  return (
    <div className="success">
      <img className="success__img" src={doneIcon} alt="success icon" />
      <b className="success__title">{title}</b>
      <button
        className="success__btn btn"
        onClick={() => navigate('/', { replace: false })}
      >
        На главную
      </button>
    </div>
  )
}

export default SuccessModal
