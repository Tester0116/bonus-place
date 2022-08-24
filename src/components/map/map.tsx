import React from "react";
import GoogleMapReact from 'google-map-react';
import Marker from "./marker/Marker";
import { ICoordinates } from "../../models/info";
import { treatmentCompanyCoordinates, treatmentCoordinates } from "../../hooks/treatmentCoordinates";
import { ICompanyCoordinates } from "../../models/company";
import './map.scss'
type coordinatesType = {
  address: string,
  phone: string,
  lat: string,
  lng: string
}
interface propsType {
  coordinates: coordinatesType[]
}
export default function Map({ coordinates }: propsType) {
  const defaultProps = {
    center: {
      lat: +coordinates[0].lat,
      lng: +coordinates[0].lng
    },
    zoom: 14
  };

  return (
    <div className="map__block" style={{ height: '100vh', width: '100%' }}>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >{
            coordinates.map(element => (
              <Marker
                lat={+element.lat}
                lng={+element.lng}
                text="Marker"
              />
            ))
          }
        </GoogleMapReact>
      </div>
      {
        coordinates.length > 1 ?
          <div className="map__contanct">
            <div className="item">
              <p>Новокосино</p>
              <p className="title"> г. Москва, ул. Городецкая, д. 5</p>
              <p>+996 000 00 00 00</p>
            </div>
          </div> : ""
      }
    </div >
  );
}