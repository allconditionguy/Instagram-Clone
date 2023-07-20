import {View,Image,StyleSheet,TouchableOpacity,Text} from 'react-native'
import React from 'react'
import logoI from './Header.png'


const Header = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity><Image style={styles.logo} source={logoI}/></TouchableOpacity>
      <View style={styles.iconsContainer}>  
       <TouchableOpacity>
<Image
source={{
  uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/plus-2-math.png',
}}
style={styles.icon}
      />
       </TouchableOpacity>
       
       <TouchableOpacity>
        <Image
        source={{
          uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v1.png',
}}
      
        style={styles.icon}
        />
       </TouchableOpacity>


        <TouchableOpacity>
        <Image
        source={{
          uri:'https://img.icons8.com/fluency-systems-regular/60/ffffff/facebook-messenger.png'
        }}
        style={styles.icon}
        />
       </TouchableOpacity>
     
      
       </View>
      </View>
  )
}

const styles = StyleSheet.create({
    container:{
      justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    marginHorizontal:20,
    },


    iconsContainer:{
   flexDirection:'row',

    },
    logo:{
        width:160,
        height: 130,
        marginVertical:-45,
        resizeMode: 'contain',
    },
   
    icon:{
      width:30,
      height:30,
      marginLeft:10,
      resizeMode:'contain',
    },

      
})

export default Header