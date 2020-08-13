/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StyleSheet, View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import 'react-native-gesture-handler';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Inicio from './views/Inicio';
import LandingPage from './views/LandingPage';
import EntrenamientoDia from './views/EntrenamientoDia';
import ClasesDirigidas from './views/ClasesDirigidas';
import DiseñaEntrenamiento from './views/DiseñaEntrenamiento';
import Perfil from './views/Perfil';
import VideoChat from './views/VideoChat'

const Stack = createStackNavigator();
//Navegación de tipo stack
const App = () => {

  

  function LogoTitle() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image
        style={styles.headerImage}
        source={require('./src/images/signin.png')}
      />
      </View>
    );
  }
  
  return (
    <>
      <NavigationContainer>

        <Stack.Navigator
        initialRouteName="Inicio"
        screenOptions={{
          headerTitle: props => <LogoTitle {...props} />,
          headerLeft: null
        }}
        >
          <Stack.Screen
            name="Inicio"
            component={Inicio}
          />
          <Stack.Screen
          name="LandingPage"
          component={LandingPage}
          />
          <Stack.Screen
          name="Entrenamiento"
          component={EntrenamientoDia}
          />
          <Stack.Screen
          name="ClasesDirigidas"
          component={ClasesDirigidas}
          />
          <Stack.Screen
          name="DiseñaEntrenamiento"
          component={DiseñaEntrenamiento}
          />
          <Stack.Screen
          name="Perfil"
          component={Perfil}
          />
          <Stack.Screen
          name="VideoChat"
          component={VideoChat}
          />
        </Stack.Navigator>

      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 120,
    height: 50
  }
});

export default App;
