import * as React from "react";
import { cat_colors, status_colors } from "../../data";
import { faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { IconMarker1 } from "../../assets";


const MapMarker = (options) => {
    const [marker, setMarker] = React.useState();
    const map = options?.map;
    const data = options?.data;

    function setColor(name) {
        return cat_colors[name]
    }

    React.useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }

        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);

    React.useEffect(() => {

        if (marker) {
            marker.setOptions(options);
        }

        if (data !== null) {
            data.forEach(element => {
                const lat = parseFloat(element?.profile?.latitude);
                const lng = parseFloat(element?.profile?.longitude);
                const latLng = new google.maps.LatLng(lat, lng);


                const infowindow = new google.maps.InfoWindow({
                    ariaLabel: element.fullName,
                    content: `<div
                        class=" block space-y-3 min-w-[300px] max-w-[420px] py-2 px-2 rounded-lg shadow-md font-roboto">
                        <img
                        alt="avatar"
                        src={${import.meta.env.VITE_APP_DEV_API_ROOT}${element?.avatar}}
                        className='rounded-md w-[160px] h-[120px]'
                    />

                        <h5 class="text-[16px] font-bold tracking-tight text-black ">${element.fullName}</h5>
                        <p class="font-normal text-[16px] text-black ">Email: ${element.email}</p>
                        <p class="font-normal text-[16px] text-black ">Phone number: ${element?.profile?.contact_number}</p>
                        <p class="font-normal text-[16px] text-black ">Address: ${element?.profile?.address}</p>
                    </div>`,
                });

                const pngMarker = {
                    url: IconMarker1,
                    // fillColor: 'blue',
                    fillOpacity: 1,
                    strokeWeight: 0,
                    rotation: 0,
                    scale: 0.077,
                    anchor: new google.maps.Point(
                        new File([IconMarker1], "new_image.png", { type: "image/png" }).size / 2,
                        new File([IconMarker1], "new_image.png", { type: "image/png" }).size,
                    ),
                };

                console.log(IconMarker1 / 2)

                const marker = new google.maps.Marker({
                    position: latLng,
                    map: map,
                    // label: element.affiliation_category,
                    title: element.fullName,
                    draggable: false,
                    fullscreenControl: false,
                    icon: {
                        path: faMapLocation.icon[4],
                        fillColor: "#3B82F6",
                        fillOpacity: 1,
                        anchor: new google.maps.Point(
                            faMapLocation.icon[0] / 2, // width
                            faMapLocation.icon[1] // height
                        ),
                        strokeWeight: 0.75,
                        strokeColor: "#000000",
                        scale: 0.08,
                    },
                    // icon: pngMarker

                });


                marker.addListener("click", () => {
                    infowindow.open({
                        anchor: marker,
                        map,
                    });
                });
            });
        }


    }, [marker, options, options?.data]);
    return null;
};

export default MapMarker