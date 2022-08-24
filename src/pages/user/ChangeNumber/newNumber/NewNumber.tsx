import React from 'react'
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import "./NewNumber.scss"
interface newNumberProps{
  checkNumber: Function,
  setValue: Function,
  value: string
}
function NewNumber({checkNumber, setValue, value}:newNumberProps) {
  const onSubmitForm=(e:any)=>{
    e.preventDefault()
    checkNumber()
  }
  return (
    <div className="newNumber">
      <p className='change-number__describe'>Введите новый номер телефона чтобы отправить код подтверждения</p>
      <form onSubmit={onSubmitForm}>
        <PhoneInput
          id="phone"
          value={value}
          defaultCountry="KG"
          international
          smartCaret
          countryCallingCodeEditable={false}
          className="change-number__input"
          onChange={(val)=>setValue(val ?? "")} />
        <button disabled={value.length !== 13} className='change-number__btn'>Далее</button>
      </form>
    </div>
  )
}

export default NewNumber