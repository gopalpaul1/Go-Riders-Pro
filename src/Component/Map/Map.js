import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '10px'
};

const location = {
  lat: 23.707310,
  lng: 90.415482
};

const onLoad = marker => {
    console.log('marker: ', marker)
  }

function Map() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBOk6SX33wZHbMomZw_9vAb4sGhW7ancjI"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={location}
        zoom={10}
      >
        <Marker
            onLoad={onLoad}
            position={location}
        />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Map)