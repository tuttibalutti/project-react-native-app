import React, { useState } from 'react'
import styled from 'styled-components/native'
import { View, Text, StyleSheet } from 'react-native'

//import UsePosition from './components/UsePosition'
import GeolocationFinder from './components/GeolocationFinder'

const Container = styled.View`
  flex: 1;
  background-color: papayawhip;
  justify-content: center;
  align-items: center;
`

const Title = styled.Text`
  font-size: 24px;
  color: palevioletred;
`

const App = () => {
  /*const [position, setPosition] = useState({});
  const [errorMsg, setErrorMsg] = useState('');*/

  return (
    <Container>
      <Title>This is your cool app!</Title>
      <Text>blabla</Text>
      <GeolocationFinder
      />
      <Title>💅💅💅</Title>
    </Container>
  )
}

export default App
