import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
  {
    name: 'Home',
    active: 'https://i.postimg.cc/Ls2V9xbH/home-filled.png',
    inactive: 'https://i.postimg.cc/BQPpMLFG/home-outline.png',
  },
  {
    name: 'Search',
    active: 'https://i.postimg.cc/Jhpj1MXq/search-filled.png',
    inactive: 'https://i.postimg.cc/kXSNxrrJ/search.png',
  },
  {
    name: 'Reels',
    active: 'https://i.postimg.cc/HnDj3SKq/reels-filled.png',
    inactive: 'https://i.postimg.cc/s2xB2G7N/reels-outline.png',
  },
  {
    name: 'Shop',
    active: 'https://i.postimg.cc/MKQcg4gW/shop-filled.png',
    inactive: 'https://i.postimg.cc/Rh33SbFL/shop-outline.png',
  },
  {
    name: 'Profile',
    active:
      'https://icdn.caughtoffside.com/wp-content/uploads/2021/07/Trent-Alexander-Arnold-in-pre-season-action-for-Liverpool.jpg',
    inactive:
      'https://icdn.caughtoffside.com/wp-content/uploads/2021/07/Trent-Alexander-Arnold-in-pre-season-action-for-Liverpool.jpg',
  },
]
const BottomTabs = ({icons}) => {
  const [activeTab, setActiveTab] =useState('Home')

  const Icon = ({ icon}) => (
    <TouchableOpacity onPress={() => setActiveTab(icon.name)
    }>
      <Image 
        source ={{ uri: activeTab === icon.name ? icon.active : icon.inactive }} 
        style={[
          styles.icon,
          icon.name === 'Profile' ? styles.profilePic() : null,
          activeTab === 'Profile' && icon.name === activeTab
            ? styles.profilePic(activeTab)
            : null,
        ]}
      />
    </TouchableOpacity>
  )
  return (
    <View style={styles.wrapper}>
      <Divider width={1} orientation='vertical' />
      <View style={styles.container}>
        {icons.map((icon, index) => (
          <Icon key={index} icon={icon} />
        ))}
      </View>
    </View>    
  )
}

const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    width: '100%',
    bottom: '0%',
    zIndex: 999,
    backgroundColor: '#000',
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 50,
    paddingTop: 10
  },

  icon: {
    width: 30,
    height: 30,
  },

  profilePic: (activeTab = '') => ({
    borderRadius: 50,
    borderWidth: activeTab === 'Profile' ? 2:0,
    borderColor: '#fff',
  }),
  
})

export default BottomTabs