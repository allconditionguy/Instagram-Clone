import React, { useEffect, useState } from 'react'
import { SignOutStack, SignedInStack } from './navigation'


const AuthNavigation = () => {
  const [currentUser, setCurrentUser] = useState(null)

  const userHandler = (user) =>
    user ? setCurrentUser(user) : setCurrentUser(null)
    
  useEffect(
    () => firebase.auth().onAuthStateChanged((user) => userHandler(user)),
    []
  )
  return <>{currentUser ? <SignedInStack /> : <SignOutStack />}</>
}

export default AuthNavigation
