import React from 'react'
import { View,Text } from 'react-native'

import ProfileSceen from './ProfileSceen'
import DetailsSceen from './DetailsSceen'
import HomeSceen from './HomeSceen'

import {NavigationContaine} from '@react-navigation/native'
import {createStackNavigation} from '@react-navigation/stack'

const AppStack = createStackNavigation()
const App=()=>{
  return(
    <NavigationContaine>
      <AppStack.Navigator>
        <AppStack.Sceen name="Home" component={HomeSceen} />
      </AppStack.Navigator>
    </NavigationContaine>
  )
}

export default App