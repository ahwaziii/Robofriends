import React from "react";
import { useState } from "react";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
function SearchBar({users}) {


  return (
    <div className="SearchBar"SearchBar>
        <div>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  
</MapContainer>
            
        </div>
    </div>
  );
}

export default SearchBar;
