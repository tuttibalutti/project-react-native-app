import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const UsePosition = ({position, setPosition, errorMsg, setErrorMsg }) => {
  /*const [position, setPosition] = useState({});
  const [error, setError] = useState('');*/
  useEffect(() => {
		getLocation()
	}, []);

	const getLocation = () => {
		navigator.geolocation.getCurrentPosition(
				position => {
				setPosition(position.coords.longitude);
				setPosition(position.coords.latitude);
				
				console.log(
						position.coords.longitude,
						position.coords.latitude,
						
				);
				},
				error => alert(error.message),
				{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
		}

  return (
		<View>
			<Text>{position};</Text>
		
		</View>
	)
	
}

export default UsePosition