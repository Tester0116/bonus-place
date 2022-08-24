import React, { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { infoApi } from '../../../redux/api/infoApi';
import "./AboutUS.scss"
const AboutUS=()=>{
  const {data:aboutUs } = infoApi.useFetchInfoQuery();
  return (
    <section id='aboutUS'>
        <h2 className='aboutUS__title'>О нас</h2>
        <p className='aboutUS__information'>{aboutUs?.description}
        </p>
    </section>
  )
}
export default AboutUS