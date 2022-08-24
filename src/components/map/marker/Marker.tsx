import React from 'react'
import marker from "../../../assets/icons/contact/marker.webp"
import "./Marker.scss"
interface propsType {
  text: string,
  lat: number,
  lng: number
}
function Marker({ text, lat, lng }: propsType) {
  return (
    <div className='marker'>
      <img src={marker} alt="marker" />
      {/* <span>{text}</span> */}
    </div>
  )
}

export default Marker