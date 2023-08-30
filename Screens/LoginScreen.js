import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import LoginForm from '../components/loginScreen/LoginForm'

const INSTAGRAM_LOGO =
  'https://i.postimg.cc/9F2t2KqY/instagram-social-media-icon-gradient-social-media-logo-197792-4682-removebg-preview.png'

const LoginScreen = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
    <LoginForm navigation={navigation} />
  </View>
  
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
})

export default LoginScreen
