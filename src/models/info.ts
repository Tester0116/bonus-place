export interface IContact{
  vkontakte?:string,
  instagram?:string,
  odnoklassniki?:string,
  facebook?:string,
  whatsapp?:string,
  email?:string,
  phone?:string,
  address?:string,
  phone1?:string,
  phone2?:string,
  phone3?:string,
  description?: string,
}
export interface ITreatmentContactItem{
  title?: string,
  icon: string,
  link: string,
}

export interface ITreatmentContact{
  socialMedia: ITreatmentContactItem[],
  phone: ITreatmentContactItem[],
  addresses: ITreatmentContactItem[],
  description?: string,
}

export interface IFaq{
  question: string,
  answer: string,
}
export interface ICoordinates{
  address: string,
  coordinates: string,
}
export interface IPublicOffer{
  title:string,
  description: string,
}
export interface IPrivacyPolicy{
  title:string,
  description: string,
}
export interface ICarousel{
  image: string
}
