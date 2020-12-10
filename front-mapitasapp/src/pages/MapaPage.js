import React, { useEffect } from 'react'
import { useMapbox } from '../hooks/useMapbox';


const puntoInicial = {
    lng: -58.4826,
    lat: -34.5719,
    zoom: 14.31
}


const MapaPage = () => {
    const { coords, setRef, nuevoMarcador$, movimientoMarcador$ } = useMapbox( puntoInicial );

    useEffect(() => {

        nuevoMarcador$.subscribe( marcador => {
            console.log('MapaPAge')
            console.log(marcador);
        })

    }, [nuevoMarcador$]);
    

    useEffect(() => {

        movimientoMarcador$.subscribe( marcador => {
            console.log(marcador.id);
        });

    }, [movimientoMarcador$]);


    return (
        <>
            <div className="info">
                Lat: { coords.lat } | Lng: { coords.lng } | Zoom: { coords.zoom }
            </div>
            <div
                ref={ setRef }
                className="mapContainer"
            >
            </div>
        </>
    )
}

export default MapaPage
