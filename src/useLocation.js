import { useState, useEffect } from 'react';

const useLocation = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Will only get invoked once
  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => {
        setLat(position.coords.latitude);
      },
      error => {
        setErrorMessage(error.message);
      }
    );
  }, []);

  return [lat, errorMessage];
};

export default useLocation;
