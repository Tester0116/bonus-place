import React, { useEffect } from 'react'
import Contact from '../../../components/contact/Contact';
import Map from '../../../components/map/map';
import treatmentContact from '../../../hooks/treatmentContact';
import { treatmentCoordinates } from '../../../hooks/treatmentCoordinates';
import { infoApi } from '../../../redux/api/infoApi';

function ProfileContact() {
  const { data: contact, isError, isLoading: loadingContact } = infoApi.useFetchContactQuery();
  const { data: coordinates, isLoading: loadingCoordinates } = infoApi.useFetchCoordinatesQuery();
   
  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div>
      {contact !== undefined ?
        <Contact contact={treatmentContact(contact)} /> : ""
      }
      {
        coordinates !== undefined ?
          <Map coordinates={treatmentCoordinates(coordinates)} /> : ""
      }
    </div>
  )
}

export default ProfileContact