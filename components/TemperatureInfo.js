import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

import { API_URL } from '../reusables/urls' 

const TemperatureInfo = ({ latitude, longitude }) => {
  const [waterTemp, setWaterTemp] = useState('')
  const [airTemp, setAirTemp] = useState('')

  const lat = latitude
  const lng = longitude
  const params = 'waterTemperature,airTemperature' //'airTemperature,waterTemperature,waveHeight';
  const option = {
    headers: {
      'Authorization': 'a42d723a-97d9-11eb-a242-0242ac130002-a42d7320-97d9-11eb-a242-0242ac130002'
    }
  }
  useEffect(() => {
    fetch(API_URL(lat, lng, params), option)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
            throw new Error('Oops, something went wrong.')
        }
      })  
      .then((jsonData) => {
        setWaterTemp(jsonData.hours[0].waterTemperature.sg)
        setAirTemp(jsonData.hours[0].airTemperature.smhi)
      })
      .catch(error => { 
        console.log('error here')
        alert(error.message)
        // Do something with data.
      })
      console.log(API_URL(lat, lng, params))
  },[])
  

  return (
    <View>
      <Text>här visas temp: {waterTemp}</Text>
      <Text>aittemp: {airTemp}</Text>
    </View>
  )
}

export default TemperatureInfo