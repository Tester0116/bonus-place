import { ICouponCard } from "./coupon"
import { ICoordinates } from "./info"

export interface ICompanyCoordinates{
  address: string,
  phone:string,
  geolocation: string
}
export interface ICompanyData {
    company_name: string
    logo: string
    address: string
    email: string
    phone1:string
    phone2:string
    phone3: string
    description: string
    network: {
      instagram: string
      facebook: string
      whatsapp: string
      telegram: string
      vkontakte: string
      odnoklassniki: string
    },
    coupons: ICouponCard[]
    coordinates: ICompanyCoordinates[]
}
