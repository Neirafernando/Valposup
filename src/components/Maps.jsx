import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Importa las imágenes directamente
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Asegúrate de que el ícono predeterminado de Leaflet funcione correctamente
L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow,
});

const MapComponent = () => {
    const position = [-33.022097, -71.644303]; // Coordenadas de Valparaíso, Chile
    const zoomLevel = 17; // Ajusta el nivel de zoom aquí

    return (
        <MapContainer center={position} zoom={zoomLevel} style={{ height: '400px', width: '100%' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
                <Popup>
                    Aquí se encuentra Valpo Sup.
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapComponent;
