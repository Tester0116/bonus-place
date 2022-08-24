import { Link } from 'react-router-dom'
import facebook from "../../assets/icons/blue_social_media/facebook.svg"
import vk from "../../assets/icons/blue_social_media/vk.svg";
import instagram from "../../assets/icons/blue_social_media/instagram.svg";
import ok from "../../assets/icons/blue_social_media/ok.svg";
import mail from '../../assets/icons/contact/mail.svg'
import phone from '../../assets/icons/contact/phone.svg'
import './Footer.scss'

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="block__content">
          <p className="content-title">Покупателям</p>
          <div className="content__descr">
            <Link to="/" className="link">
              Как сделать заказ
            </Link>
            <Link to="/" className="link">
              Способы оплаты
            </Link>
            <Link to="/profile/help" className="link">
              Вопросы и ответы
            </Link>
            <Link to="/" className="link">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
        <div className="block__content">
          <p className="content-title">Компания</p>
          <div className="content__descr">
            <Link to="/profile" className="link">
              О нас
            </Link>
            <Link to="/profile/contact" className="link">
              Контакты
            </Link>
          </div>
        </div>
        <div className="block__content">
          <p className="content-title">Мы в соц сетях</p>
          <div className="content__descr">
            <a target="_blank" className="link" href="https://vk.com/">
              <img src={vk} alt="" />
              Вконтакте
            </a>
            <a
              target="_blank"
              className="link"
              href="https://ru-ru.facebook.com/"
            >
              <img src={facebook} alt="" />
              Facebook
            </a>
            <a target="_blank" className="link" href="https://ok.ru/">
              <img src={ok} alt="" />
              Одноклассники
            </a>
            <a
              target="_blank"
              className="link"
              href="https://www.instagram.com/"
            >
              <img src={instagram} alt="" />
              Instagram
            </a>
          </div>
        </div>
        <div className="block__content">
          <p className="content-title">Свяжитесь с нами</p>
          <div className="content__descr">
            <a target="_blank" className="link" href="mailto:mail@mix.kg">
              <img src={mail} alt="mail icon" />
              mail@mix.kg
            </a>
            <a target="_blank" className="link" href="tel:+996 555 55 55 55">
              <img src={phone} alt="phone icon" />
              +996 555 55 55 55
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
