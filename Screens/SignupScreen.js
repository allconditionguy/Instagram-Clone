import { StyleSheet, Image, View } from 'react-native'
import React from 'react'
import SignupForm from '../components/signupScreen/SignupForm'

const INSTAGRAM_LOGO =
  'https://i.postimg.cc/9F2t2KqY/instagram-social-media-icon-gradient-social-media-logo-197792-4682-removebg-preview.png'

const SignupScreen = ({navigation}) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
    <SignupForm navigation={navigation} />
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

export default SignupScreen