import React, { useEffect } from 'react';
import { loadGoogleMapsApi } from '../../apis/GoogleMapsApi';
import './style.css';

  const MapComponent = ({locationsGps}) => {
    window.initMap = () => {
      const map = new window.google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: locationsGps[0],
      });
  
      locationsGps.forEach(locationGps => {
        new window.google.maps.Marker({
          position: locationGps,
          map: map,
        });
      });
    };
  
    useEffect(() => {
      loadGoogleMapsApi('initMap');
  
      return () => {
        delete window.initMap;
      };
    }, []);

  return (
    <div className="container">
      <h3 className="location">Location</h3>
      <div className="map-container">
        <div className="map-placeholder">
          <div id="map" className="map"></div>
        </div>
      </div>
    </div>
  );
};

export default MapComponent;
