export const loadGoogleMapsApi = (callbackName) => {
  const existingScript = document.getElementById('googleMapsApiScript');

  if (!window.google && !existingScript) {
    const script = document.createElement('script');
    script.id = 'googleMapsApiScript'; 
    script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=${callbackName}`;
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
  } else if (existingScript && window.google) {
    window[callbackName]();
  }
};
