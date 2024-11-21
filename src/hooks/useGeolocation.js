import { useState, useEffect, useRef } from 'react';

export const useGeolocation = (address, geolocationEnabled, latitude, longitude) => {
  const [geolocation, setGeolocation] = useState({});
  const [location, setLocation] = useState('');
  const isMounted = useRef(true);

  useEffect(() => {
    const fetchData = async () => {
      // Logika pro získání geolokace...

      if (isMounted.current) {
        // Nastavení geolokace a lokace
        setGeolocation(fetchedGeolocation);
        setLocation(fetchedLocation);
      }
    };

    fetchData();

    return () => {
      isMounted.current = false;
    };
  }, [address, geolocationEnabled, latitude, longitude]);

  return { geolocation, location };
};
