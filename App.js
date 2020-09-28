/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

//CUSTOM IMPORT
// import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';

import WelcomeLoginSignUp from './components/WelcomeScreens/WelcomeLoginSignUp'
import CustomerLogin from './components/WelcomeScreens/CustomerProfile/CustomerLogin'
import TradespersonLogin from './components/WelcomeScreens/TradespersonProfile/TradespersonLogin'
import CustomerHomePage from './components/CustomerHome/CustomerHomePage'
//CUSTOM IMPORT END

let heightBody = Dimensions.get('screen')

class WelcomeScreen extends React.Component {

  render() {
    return(
      <>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            <View style={styles.body}>
              <WelcomeLoginSignUp navigation={this.props.navigation} />
            </View>
          </ScrollView>
        </SafeAreaView>
      </>
    )
  }

}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#0d0d0d',
    height: heightBody.height
  },
  body: {
    backgroundColor: '#0d0d0d',
    color: '#0d0d0d',
  },
})

const Stack = createStackNavigator()

function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName='Welcome'
        screenOptions={{
          headerTintColor: '#F2F2F2',
          headerStyle: {
            backgroundColor: '#0d0d0d'
          }
        }}
      >
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Customer' component={CustomerLogin} />
        <Stack.Screen name='Tradesperson' component={TradespersonLogin} />
        <Stack.Screen name='Home' component={CustomerHomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
