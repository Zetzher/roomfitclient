import { StyleSheet,  ScrollView,  View,  Text, Image, ImageBackground, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import React from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const NavbarFooter = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View>
            <TouchableWithoutFeedback onPress = {() => {navigation.navigate("Perfil")}}  >
                <Image source={require('../src/images/navbarfooter/perfil.png')} style={styles.icon} />
                </TouchableWithoutFeedback>
            </View>
            <View>
            <TouchableWithoutFeedback onPress = {() => {navigation.navigate("VideoChat")}}  >
                <Image source={require('../src/images/navbarfooter/cameraFooter.png')} style={styles.icon} />
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {backgroundColor: 'goldenrod', 
    flexDirection: 'row', 
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center'
},
    icon: {
        width: 40,
        height: 40,
        
    }
})

export default NavbarFooter;