import { StyleSheet,  ScrollView,  View,  Text, Image, ImageBackground, TouchableHighlight, Button, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import NavbarFooter from '../components/NavbarFooter';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const LandingPage = ({navigation}) => {




    return(
    <>
        <View style={{backgroundColor: 'black'}}>
        <Text style={{marginVertical: 10, textAlign: 'center', color: 'white'}}>Diseña tu propio entrenamiento</Text>
        
        <View style={{flexDirection: 'row'}}>
        <TouchableWithoutFeedback onPress = {() => {navigation.navigate("DiseñaEntrenamiento")}}  >
            <Image source={require("../src/images/landingImage.jpg")}
            style={styles.image}
             />
             </TouchableWithoutFeedback>
        </View>

        <Text style={{marginVertical: 10, textAlign: 'center', color: 'white'}}>Clases guiadas/dirigidas</Text>
        <View style={{flexDirection: 'row'}}>
        <TouchableWithoutFeedback onPress = {() => {navigation.navigate("ClasesDirigidas")}}  >
            <Image source={require("../src/images/landingImage1.jpg")}
            style={styles.image}
             />
             </TouchableWithoutFeedback>
        </View>

        <Text style={{marginVertical: 10, textAlign: 'center', color: 'white'}}>Entrenamiento del día</Text>
        <View style={{flexDirection: 'row'}}>
        <TouchableWithoutFeedback onPress = {() => {navigation.navigate("Entrenamiento")}}  >
            <Image source={require("../src/images/landingimage2.jpg")}
            style={styles.image}
             />
             </TouchableWithoutFeedback>
        </View>
        </View>
        <NavbarFooter navigation={navigation} />
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: hp('22.5%')
      },
})

export default LandingPage;