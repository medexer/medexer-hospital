import Lottie from 'lottie-react'
import React, { useEffect } from 'react'
import { Wrapper } from "@googlemaps/react-wrapper"
import { useDispatch, useSelector } from 'react-redux'

import Map from './Map'
import MapMarker from './MapMarker'
import { Animation10 } from '../../assets'
import { authFetchHospitalProfile } from '../../state/redux/actions/auth.actions'


const HomeMap = () => {
    const dispatch = useDispatch()

    const { searchResults } = useSelector(state => state.hospital)
    const { hospitalProfile } = useSelector(state => state.auth)

    const [clicks, setClicks] = React.useState([]);
    const [zoom, setZoom] = React.useState(13)
    const [center, setCenter] = React.useState({
        lat: 9.8965,
        lng: 8.8583,
    });

    useEffect(() => {
        dispatch(authFetchHospitalProfile())
    }, [])

    useEffect(() => {
        if(hospitalProfile){
            setCenter({
                lat: parseFloat(hospitalProfile?.latitude),
                lng: parseFloat(hospitalProfile?.longitude),
            })
        }
    }, [hospitalProfile])

    const onMapClick = (e) => {
        // avoid directly mutating state
        setClicks([...clicks, e.latLng]);
    };

    const onMapIdle = (m) => {
        //console.log("onIdle");
        setZoom(m.getZoom());
        setCenter(m.getCenter()?.toJSON());
    };

    const renderMap = (status) => {
        return <div className="flex flex-col items-center h-[400px]">
            <Lottie
                loop={true}
                className='h-full'
                animationData={Animation10}
            />
        </div>
    };


    console.log(searchResults)

    return (
        <Wrapper apiKey={import.meta.env.VITE_APP_DEV_MAPS_API_KEY} render={renderMap}>
            <Map
                disableDefaultUI={true}
                center={center}
                onClick={onMapClick}
                onIdle={onMapIdle}
                zoom={zoom}
                mapTypeId={"roadmap"}
                mapTypeControl={false}
                streetViewControl={false}
                style={{ flexGrow: "1", height: "100%" }}
            >
                <MapMarker data={searchResults} />
            </Map>
        </Wrapper >
    )
}

export default HomeMap