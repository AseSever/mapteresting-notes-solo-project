import React, { Component } from 'react';
import { connect } from 'react-redux';
import mapStoreToProps from '../../redux/mapStoreToProps';
import GoogleMap from 'google-map-react';

const apiKey = process.env.REACT_APP_GOOGLE_MAPS_APIKEY


class MyNotesMap extends Component {

    render() {
        return (
            <div style={{ height: '200px', width: '75%', margin: 'auto'}}>
                <GoogleMap
                    
                    bootstrapURLKeys={{ key: apiKey }}
                    
                    defaultCenter={{
                        lat: 44.9347317,
                        lng: -93.2844936
                    }}
                    defaultZoom={14}
                >
                </GoogleMap>
            </div>
        );
    }
}

export default connect(mapStoreToProps)(MyNotesMap);