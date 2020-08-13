import { StyleSheet,  ScrollView,  View,  Text, Image, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import React from 'react';

const Inicio = ({navigation}) => {


    const goingLandingPage = () => {
        navigation.navigate('LandingPage')
    }

    return(
        <ScrollView>
            <View style={styles.container}>
            <Image
            style={styles.imageSignin}
        source={require('../src/images/signin.png')}
      /> 
       <Text style={{textAlign: 'center', marginBottom: 20}}>Sign in</Text>
       <View style={styles.iconsAlign}>
      <TouchableHighlight  onPress = {() => {console.log('facebook')}}  >
          <Image 
          style={styles.btnFacebookLogin}
              source={require('../src/images/signinFacebook.webp')}
          />
      </TouchableHighlight>
      <TouchableHighlight onPress = {() => {console.log('google')}}  >
          <Image
            style={styles.btnGoogleLogin}
            source={require('../src/images/googleSignin.webp')} 
            />
      </TouchableHighlight>
      <TouchableHighlight onPress = {() => {console.log('ios')}}  >
          <Image
            style={styles.btnAppleLogin}
            source={require('../src/images/appleSignin.png')} 
            />
      </TouchableHighlight>
      </View>
      <Text style={{marginTop: 40}}>
          Or you can login with your
          <TouchableWithoutFeedback onPressIn={ () => goingLandingPage()}>
          <Text style={{color: 'blue'}}> account</Text>
          </TouchableWithoutFeedback>
      </Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageSignin: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
        marginTop: 20
    },
    btnFacebookLogin: {
        borderRadius: 20,
        width: 50,
        height: 40,
    },
    btnGoogleLogin: {
        width: 45,
        height: 45,
        marginHorizontal: 50
    },
    btnAppleLogin: {
        width: 34,
        height: 42,
    },
    iconsAlign: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Inicio;