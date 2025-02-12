import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import WrapperContainer from '../../components/WrapperContainer'
import DrawerHeader from '../../components/DrawerHeader'

const AboutUs = () => {
  return (
    <WrapperContainer>
      <DrawerHeader title={"About Us"}/>
    </WrapperContainer>
  )
}

export default AboutUs

const styles = StyleSheet.create({})