import { ICompanyCoordinates } from "../models/company";
import { ICoordinates } from "../models/info";

export function treatmentCoordinates(coordinates:ICoordinates[]) { 
  let addresses = coordinates.map((element: ICoordinates) => {
    let coordinatesLatLng = element.coordinates.split(" ");
    return {
      address: element.address,
      lat: coordinatesLatLng[0].slice(0, -1),
      phone: "",
      lng: coordinatesLatLng[1]
    }
  });
  return addresses;
}

export function treatmentCompanyCoordinates(coordinates:ICompanyCoordinates[]) { 
  let addresses = coordinates.map((element: ICompanyCoordinates) => {

    let coordinatesLatLng = element.geolocation.split(",");
    return {
      address: element.address,
      phone: element.phone,
      lat: coordinatesLatLng[0],
      lng: coordinatesLatLng[1]
    }
  });
  return addresses;
}