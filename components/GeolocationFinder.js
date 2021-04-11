import React, { useState, useEffect } from 'react'
import { Platform, View, Text, StyleSheet } from 'react-native'
import styled from 'styled-components/native'

import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`
const GeolocationFinder = () => {
	const [latitude, setLatitude] = useState(null)
	const [longitude, setLongitude] = useState(null)

  useEffect(() => {
    
		GetCurrentLocation()
  }, []);


	const GetCurrentLocation = async () => {
		let { status } = await Location.requestPermissionsAsync();
		if (status !== 'granted') {
			// importera alert?
			Alert.alert(
				'Permission not granted',
				'Allow the app to use location service.',
				[{ text: 'OK' }],
				{ cancelable: false }
			);
		}
		let { coords } = await Location.getCurrentPositionAsync();

  	if (coords) {
			const { latitude, longitude } = coords;
			setLatitude(coords.latitude);
			setLongitude(coords.longitude);
		}

	}
	return (
    <View>
      <Text>What's your address?</Text>
      <Text>{[latitude, longitude]}</Text>
    </View>
  );
}

export default GeolocationFinder

