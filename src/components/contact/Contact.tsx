import "./Contact.scss";
import { ITreatmentContact } from "../../models/info"
interface propsType {
  contact: ITreatmentContact,
}

const Contact = ({ contact }: propsType) => {
  return (
    <div className="contact">
      <div className="contact__info">
        <p className="info__title">Контакты</p>
        <p className="info__descr">
          {contact.description}
        </p>
      </div>
      <div className="contacts__content">
        <div className="block__content">
          <p className="content-title">Наши телефоны:</p>
          <div className="content__descr">
            {
              contact.phone.map((element,index) => (
                <a className="link" href={element.link} key={index}>
                  <img src={element.icon} alt="" />
                  {element.title}
                </a>
              ))
            }
          </div>
        </div>
        <div className="line"></div>
        <div className="blocks__content">
          <div className="block__content">
            <p className="content-title">Email:</p>
            <div className="content__descr">
              <a className="link" href={contact.addresses[0].link}>
                <img src={contact.addresses[0].icon} alt="" />
                {contact.addresses[0].title}
              </a>
            </div>
          </div>
          <div className="block__content">
            <p className="content-title">Наш адрес:</p>
            <div className="content__descr">
              <a className="link" href={contact.addresses[1].link}>
                <img src={contact.addresses[1].icon} alt="" />
                {contact.addresses[1].title}
              </a>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className="block__content">
          <p className="content-title">Мы в социальных сетях:</p>
          <div className="content__descr">
            {
              contact.socialMedia.map((element, index) => (
                <a className="link" href={element.link} key={index}>
                  <img src={element.icon} alt="" />
                  {element.title}
                </a>
              ))
            }
          </div>
        </div>
      </div>
      {/* <Map  coordinates={contact.addresses}/> */}
    </div>
  );
};

export default Contact;
