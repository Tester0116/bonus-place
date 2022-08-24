import { IContact, ITreatmentContact, ITreatmentContactItem } from "../models/info";
import vkontakte from "../assets/icons/blue_social_media/vk.svg";
import instagram from "../assets/icons/blue_social_media/instagram.svg";
import facebook from "../assets/icons/blue_social_media/facebook.svg"
import odnoklassniki from "../assets/icons/blue_social_media/ok.svg"
import phoneIcon from "../assets/icons/contact/phone.svg";
import email from "../assets/icons/contact/mail.svg";
import adress from "../assets/icons/contact/location.svg";

function treatmentContact(contact: IContact): ITreatmentContact{
  const treatContact:ITreatmentContact = {
    socialMedia: [
      {
        title: "Facebook",
        icon: facebook,
        link: contact.facebook ?? "",
      },
      {
        title: "Instagram",
        icon: instagram,
        link: contact.instagram ?? "",
      },
      {
        title: "Vkontakte",
        icon: vkontakte,
        link: contact.vkontakte ?? "",
      },
      {
        title: "Odnoklassniki",
        icon: odnoklassniki,
        link: contact.odnoklassniki ?? "",
      },
      {
        title: "Whatsapp",
        icon: facebook,
        link: contact.whatsapp ?? "",
      },
    ],
    phone: phone(contact),
    addresses: [
      {
        title: contact.address,
        icon: adress,
        link: "https://www.google.com/maps/@42.8718062,74.6054418,15z"
      },
      {
        title: contact.email,
        icon: email,
        link: "mailto:" + contact.email,
      },
    ],
    description: contact.description
  }
  return treatContact;
}


function phone(contact: IContact) {
  let i = 0;
  let newContact = Object.entries(contact);
  let phoneNumbers:ITreatmentContactItem[] = [];

  newContact.forEach(element => {
    if(element[0].includes("phone")){
      phoneNumbers.push({
        title: element[1],
        icon: phoneIcon,
        link: "tel:"+ element[1]
      })
    }  
  });
  return phoneNumbers;
}
export default treatmentContact;
