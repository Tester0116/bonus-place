import vkontakte from "../assets/icons/blue_social_media/vk.svg";
import instagram from "../assets/icons/blue_social_media/instagram.svg";
import facebook from "../assets/icons/blue_social_media/facebook.svg"
import odnoklassniki from "../assets/icons/blue_social_media/ok.svg"
import phoneIcon from "../assets/icons/contact/phone.svg";
import email from "../assets/icons/contact/mail.svg";
import adress from "../assets/icons/contact/location.svg";
import { ICompanyCoordinates, ICompanyData } from "../models/company";
import { ITreatmentContactItem } from "../models/info";
function treatmentCompanyContact(companyData:ICompanyData) {
  return {
    socialMedia: [
      {
        title: "Facebook",
        icon: facebook,
        link: companyData.network?.facebook ?? "",
      },
      {
        title: "Instagram",
        icon: instagram,
        link: companyData.network?.instagram ?? "",
      },
      {
        title: "Vkontakte",
        icon: vkontakte,
        link: companyData.network?.vkontakte ?? "",
      },
      {
        title: "Odnoklassniki",
        icon: odnoklassniki,
        link: companyData.network?.odnoklassniki ?? "",
      },
      {
        title: "Whatsapp",
        icon: facebook,
        link: companyData.network?.whatsapp ?? "",
      },
    ],
    phone: phone(companyData),
    addresses: [
      {
        title: companyData.address,
        icon: adress,
        link: "https://www.google.com/maps/@42.8718062,74.6054418,15z"
      },
      {
        title: companyData.email,
        icon: email,
        link: "mailto:" + companyData.email,
      },
    ],
    description: companyData.description
  }
}

function phone(companyData:ICompanyData) {
  let i = 0;
  let newContact = Object.entries(companyData);
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
export default treatmentCompanyContact