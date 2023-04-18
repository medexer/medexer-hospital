import React from 'react'
import { Wrapper } from "@googlemaps/react-wrapper"

import Map from './Map'
import MapMarker from './MapMarker';


const HomeMap = () => {
    const [zoom, setZoom] = React.useState(12)
    const [center, setCenter] = React.useState({
        lat: 9.8965,
        lng: 8.8583,
    });

    const onMapClick = (e) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng]);
    };

    const onMapIdle = (m) => {
        //console.log("onIdle");
        setZoom(m.getZoom());
        setCenter(m.getCenter().toJSON());
    };

    const renderMap = (status) => {
        return <span className='text-center text-gray-500'>
            <p className='py-[30vh] text-3xl font-medium'>Map Status is: {status}</p>
        </span>;
    };

    return (
        <Wrapper apiKey={import.meta.env.VITE_APP_DEV_MAPS_API_KEY} render={renderMap}>
            <Map
                center={center}
                onClick={onMapClick}
                onIdle={onMapIdle}
                zoom={zoom}
                mapTypeId={"roadmap"}
                streetViewControl={false}
                mapTypeControl={false}
                style={{ flexGrow: "1", height: "100%" }}
            >
                <MapMarker data={[]} />
            </Map>
        </Wrapper>
    )
}

export default HomeMap