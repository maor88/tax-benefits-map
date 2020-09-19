import React from 'react';
import GoogleMapReact from 'google-map-react';
import {API_KEY,GEOCODE_KEY} from '../config.js'
import {LOCATIONS_DATA} from '../data/locations-data.js'
import Marker from './Marker/Marker.js'
import Geocode from "react-geocode";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './style.css';


Geocode.setApiKey(GEOCODE_KEY);
Geocode.setLanguage("iw");
Geocode.setRegion("il");



const SettlementMap = props => {



    const config = {
        center: {
          lat: 32.08,
          lng: 34.78
        },
        zoom: 9
      };

    return (
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: API_KEY }}
                defaultCenter={config.center}
                defaultZoom={config.zoom}
                >
                {
                   LOCATIONS_DATA.map( (location,index) => {
                        return <Marker
                                    key = {index}
                                    lat={location.lat}
                                    lng={location.lng}
                                    color= 'blue'
                                    tax={location.tax}
                                    name = {location.name}
                                />
                    })
                }
                </GoogleMapReact>
      </div>
    );
}

export default SettlementMap;