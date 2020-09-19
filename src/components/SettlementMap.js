import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import {API_KEY,GEOCODE_KEY} from '../config.js'
// import {LOCATIONS} from '../data/locations.js'
import {LOCATIONS_DATA} from '../data/locations-data.js'
import Marker from './Marker/Marker.js'
import Geocode from "react-geocode";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import './style.css';


Geocode.setApiKey(GEOCODE_KEY);
Geocode.setLanguage("iw");
Geocode.setRegion("il");


// const wait = (ms) => {
//     var start = new Date().getTime();
//     var end = start;
//     while(end < start + ms) {
//       end = new Date().getTime();
//    }
//  }

// const chunkArray = (myArray, chunk_size) => {
//     let index = 0;
//     const arrayLength = myArray.length;
//     let tempArray = [];
    
//     for (index = 0; index < arrayLength; index += chunk_size) {
//         let myChunk = myArray.slice(index, index+chunk_size);
//         // Do something if you want with the group
//         tempArray.push(myChunk);
//     }

//     return tempArray;
// }


const SettlementMap = props => {

    // const [locations, setLocations] = useState([])
    
    // useEffect (async ()=> {
    //     const result = chunkArray(LOCATIONS, 90);
    //     let locations_added = []
    //     let cnt = 0
    //     result[5].forEach(async (location) => {
    //         getLocationByPlaceName(location[0], location[1]).then( res => {
    //             locations_added.push(res)
    //             cnt++;
    //             if(cnt === result[5].length -1){
    //                 console.log(JSON.stringify(locations_added))
    //             }
    //         })
    //     });

       
    // },[])

    // const getLocationByPlaceName  = async (name, tax) =>  {
    //     let location;
    //     await Geocode.fromAddress(name).then(
    //         response => {
    //             location = response.results[0].geometry.location;
    //         },
    //         error => {
    //           console.error(error);
    //         }
    //       );
    //     return { lat: location.lat, lng: location.lng, name:name, tax:tax}
    // }

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