import React, { useEffect, useRef, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import hidden from '../../../assets/icons/hidden.svg'
import './ChangePassword.scss'
type FormValues = {
  previousPass: string
  newPass: string
  repeatPass: string
}
function ChangePassword() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    mode: 'onChange',
  })
  const [newPassVisible, setNewPassVisible] = useState<boolean>(false)
  const [repPassVisible, setRepPassVisible] = useState<boolean>(false)
  const watchNewPass: string = watch('newPass')
  const onSubmit = (data: FormValues) => {
    console.log(data)
    reset()
  }
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section className="change-password">
      <h2 className="change-password__title">Сменить пароль</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="change-password__form">
        <div>
          <input
            type="text"
            className={errors.previousPass && 'error-input'}
            {...register('previousPass', { required: 'This is required' })}
            placeholder="Текущий пароль"
          />
          {errors.previousPass && (
            <p className="error-validate">{errors.previousPass.message}</p>
          )}
        </div>
        <div className="password">
          <input
            type={newPassVisible ? 'text' : 'password'}
            className={errors.newPass && 'error-input'}
            placeholder="Придумайте пароль"
            {...register('newPass', {
              required: 'This is required',
              minLength: {
                value: 8,
                message: 'Password must be at least 8 characters',
              },
            })}
          />
          <img
            src={hidden}
            alt="logo"
            onClick={() => setNewPassVisible(!newPassVisible)}
          />
          {errors.newPass && <p className="error-validate">{errors.newPass.message}</p>}
        </div>
        <div className="password">
          <input
            type={repPassVisible ? 'text' : 'password'}
            className={errors.newPass && 'error-input'}
            placeholder="Повторите пароль"
            {...register('repeatPass', {
              validate: (value) =>
                value === watchNewPass || 'The passwords do not match',
            })}
          />
          <img
            src={hidden}
            alt="logo"
            onClick={() => setRepPassVisible(!repPassVisible)}
          />
          {errors.repeatPass && (
            <p className="error-validate">{errors.repeatPass.message}</p>
          )}
        </div>
        <button disabled={!isValid}>Сохранить</button>
      </form>
    </section>
  )
}

export default ChangePassword
