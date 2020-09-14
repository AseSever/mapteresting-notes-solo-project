import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_APIKEY

function MapContainer(props) {

    
    const [currentPosition, setCurrentPosition] = useState({});

    const success = (position) => {
        const currentPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
    };

    const onMarkerDragEnd = (event) => {
        const lat = event.latLng.lat();
        const lng = event.latLng.lng();
        setCurrentPosition({ lat, lng })
    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(success);
    })

    const mapStyles = {
        height: '400px',
        width: '80%',
        margin: 'auto',
    };

    const defaultCenter = {
        lat: 44.9355463,
        lng: -93.2827433
    }
    return (
        <div>
            
            {JSON.stringify(currentPosition)}
            <LoadScript
                googleMapsApiKey={apiKey}>
                <GoogleMap
                    mapContainerStyle={mapStyles}
                    zoom={15}
                    center={currentPosition.lat && currentPosition}
                >
                    {
                        currentPosition.lat ?
                            <Marker
                                position={currentPosition}
                                onDragEnd={(event) => onMarkerDragEnd(event)}
                                // onChange={() => props.handleInputChangeFor(currentPosition)}
                                draggable={true} /> : 
                                null
                    }
                </GoogleMap>
            </LoadScript>
        </div>
    );
}

export default connect(mapStoreToProps)(MapContainer);