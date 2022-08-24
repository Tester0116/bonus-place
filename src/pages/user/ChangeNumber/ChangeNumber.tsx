import React, { useEffect, useState } from 'react';
import "./ChangeNumber.scss";
import ConfirmNumber from './confirmNumber/ConfirmNumber';
import NewNumber from './newNumber/NewNumber';
function ChangeNumber() {
  const [value, setValue] = useState<string>("");
  const [correctNumber, setCorrectNumber] = useState<boolean>(false);

  const checkNumber = () => {
    if (value.length === 13) setCorrectNumber(true)
  }
  useEffect(() => {
    window.scroll(0, 0)
}, [])
  return (
    <section className="change-number">
      <h2 className="change-number__title">Смена номера</h2>
      {correctNumber ? <ConfirmNumber value={value} setCorrectNumber={setCorrectNumber} /> : 
                       <NewNumber value={value} checkNumber={checkNumber} setValue={setValue} />}
    </section>
  )
}

export default ChangeNumber
