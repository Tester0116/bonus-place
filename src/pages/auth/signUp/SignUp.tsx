import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'

import hidden from '../../../assets/icons/hidden.svg'
import notHidden from '../../../assets/icons/not-hidden.svg'
import './SignUp.scss'
import { userApi } from '../../../redux/api/userApi'

type FormValues = {
  firstName: string
  lastName: string
  password: string
  repeatPassword: string
}
const SignUp = () => {
  const navigate = useNavigate()
  const [phoneErr, setPhoneErr] = useState<string>('')

  const [phone, setPhone] = useState<string>('')
  const [newPassVisible, setNewPassVisible] = useState<boolean>(false)
  const [repPassVisible, setRepPassVisible] = useState<boolean>(false)

  const [authUser, { error }] = userApi.useAuthUserMutation()

  const {
    getValues,
    register,
    formState: { errors },
    handleSubmit,
    reset,
    watch,
  } = useForm<FormValues>()
  const watchNewPass = watch('password')

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    if (phone === '') {
      return setPhoneErr('Введите номер')
    } else setPhoneErr('')

    localStorage.setItem('signUpPhone', phone)
    navigate('/auth/confirmSignUp')
    reset()
    localStorage.setItem('userPhone', phone)
    authUser({
      first_name: getValues('firstName'),
      last_name: getValues('firstName'),
      password: getValues('firstName'),
      password2: getValues('firstName'),
      phone: phone,
    })
      .unwrap()
      .then((res) => {
        console.log(res)
        navigate('/auth/confirm')
        reset()
      })
      .catch((err) => {
        alert(err.data.message)
      })
  }

  return (
    <section className="signUp">
      <div className="container">
        <form className="signUp__form" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="signUp__form--title">Регистрация</h1>
          <div
            className={
              errors?.firstName
                ? 'signUp__form--items err'
                : 'signUp__form--items'
            }
          >
            <input
              type="text"
              placeholder="Имя"
              className="signUp__form--input"
              {...register('firstName', {
                required: 'Поле обязательно заполнить',
                minLength: {
                  value: 4,
                  message: 'Минимум 4 символов',
                },
              })}
            />
          </div>
          {errors?.firstName && (
            <span className="signUp__form--error">
              {errors?.firstName?.message}
            </span>
          )}
          <div
            className={
              errors?.lastName
                ? 'signUp__form--items err'
                : 'signUp__form--items'
            }
          >
            <input
              type="text"
              placeholder="Фамилия"
              className="signUp__form--input"
              {...register('lastName', {
                required: 'Поле обязательно заполнить',
                minLength: {
                  value: 4,
                  message: 'Минимум 4 символов',
                },
              })}
            />
          </div>
          {errors?.lastName && (
            <span className="signUp__form--error">
              {errors?.lastName?.message}
            </span>
          )}
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
              className="signUp__form--input"
              value={phone}
              onChange={(val) => setPhone(val ?? '')}
              placeholder="Номер телефона"
            />
          </div>
          {phoneErr && <span className="signUp__form--error">{phoneErr}</span>}
          <div
            className={
              errors?.password
                ? 'signUp__form--items err'
                : 'signUp__form--items'
            }
          >
            <input
              type={newPassVisible ? 'text' : 'password'}
              placeholder="Придумайте пароль"
              className="signUp__form--input"
              autoComplete={'on'}
              {...register('password', {
                required: 'Поле обязательно заполнить',
                minLength: {
                  value: 8,
                  message: 'Минимум 8 символов',
                },
              })}
            />

            <button
              onClick={() => setNewPassVisible(!newPassVisible)}
              type="button"
            >
              <img
                className="signUp__form--hide-icon"
                src={newPassVisible ? notHidden : hidden}
                alt="hidden icon"
              />
            </button>
          </div>
          {errors?.password && (
            <span className="signUp__form--error">
              {errors?.password?.message}
            </span>
          )}
          <div
            className={
              errors?.repeatPassword
                ? 'signUp__form--items err'
                : 'signUp__form--items'
            }
          >
            <input
              className="signUp__form--input"
              type={repPassVisible ? 'text' : 'password'}
              placeholder="Повторите пароль"
              autoComplete={'on'}
              {...register('repeatPassword', {
                validate: (value) =>
                  value === watchNewPass || 'Пароли не совпадают',
              })}
            />
            <button
              onClick={() => setRepPassVisible(!repPassVisible)}
              type="button"
            >
              <img
                className="signUp__form--hide-icon"
                src={repPassVisible ? notHidden : hidden}
                alt="hidden icon"
              />
            </button>
          </div>
          {errors?.repeatPassword && (
            <span className="signUp__form--error">
              {errors?.repeatPassword?.message}
            </span>
          )}
          <button className="signUp__form--btn btn" type="submit">
            Далее
          </button>
        </form>
      </div>
    </section>
  )
}

export default SignUp
