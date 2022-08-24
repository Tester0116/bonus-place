import React, { useEffect, useId } from 'react';
import helpLogo from "../../../assets/icons/arrow/list.svg";
import { IFaq } from '../../../models/info';
import { infoApi } from '../../../redux/api/infoApi';
import "./Help.scss";

function Help() {
  const uniqId = useId();
  const {data:faq} = infoApi.useFetchFaqQuery();
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <section id='help'>
      <h2 className='help__title'>Помощь</h2>
      <div className="help__inner">
      {
          faq?.map((element:IFaq, index:number) => (
            <label key={`${uniqId}__help__${index}`}>
              <input type="radio" name='faq'/>
              <div className="card">
                <div className='card__inner'>
                  <h3 className="card__title">{element.question}</h3>
                  <img src={helpLogo} alt="logo" />
                </div>
                <p className='aboutUS__information'>{element.answer}</p>
              </div>
            </label>
          ))
        }
      </div>
    </section>
  )
}

export default Help
