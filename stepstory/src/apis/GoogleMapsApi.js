export const loadGoogleMapsApi = (callbackName) => {
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&callback=${callbackName}`;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    } else {
      window[callbackName]();
    }
  };
  