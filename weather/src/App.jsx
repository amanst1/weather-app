
import './App.css';
import WeatherApp from './components/WeatherApp';
import { useState, useEffect } from 'react';


function App() {
  const[currentLocation, setCurrentLocation] = useState(null);

    useEffect(() => {
      const getPosition = async () => {
        await navigator.geolocation.getCurrentPosition(
          position => {
            
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          err => console.log(err)
        );
        
      };

      getPosition();
    }, []);
    

  return (
    <>
      { currentLocation && <WeatherApp currentLocation={currentLocation} /> }
    </>
  )
}

export default App
