import React from 'react';
import { GoogleMap, withScriptjs,withGoogleMap} from 'react-google-maps'
//27.844573, -82.638146
const Map = (props) => {
    return(
        <GoogleMap defaultZoom={15}
        defaultCenter={{lat: 27.844573, lng: -82.638146}}
        />
    )
}

export default withScriptjs(
    withGoogleMap(
        Map
    )
);