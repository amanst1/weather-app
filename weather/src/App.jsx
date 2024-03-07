
import './App.css';
import WeatherApp from './components/WeatherApp';
import { useState, useEffect } from 'react';


function App() {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

    useEffect(() => {
      const getPosition = async () => {
        await navigator.geolocation.getCurrentPosition(
          position => {
            
            setCurrentLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          err => setError(err)
        );

        setLoading(false)
        
      };

      getPosition();
    }, []);

    
    
  if(error) {
    return (
      <>
          <h2>An Error has occured.</h2>
          <h4>{error.message}</h4>
      </>
    )
  }

  if(loading) return <h3>Loading...</h3>

  return (
    <>
      { currentLocation && <WeatherApp currentLocation={currentLocation} /> }
    </>
  )
}

export default App
