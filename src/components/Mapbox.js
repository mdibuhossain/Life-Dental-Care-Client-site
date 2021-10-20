import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';


const Mapbox = () => {

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: 23.8322982,
        longitude: 90.4171673,
        zoom: 14
    });

    return (
        <>
            <ReactMapGL
                {...viewport}
                mapStyle="mapbox://styles/ponirmahmud/ckuzrtv9s13wt14o52wm57o14"
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={nextViewport => setViewport(nextViewport)}
            >
            </ReactMapGL>
        </>
    );
};

export default Mapbox;