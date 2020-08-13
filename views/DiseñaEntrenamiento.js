import { StyleSheet,  ScrollView,  View,  Text, Image, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import React, { useState } from 'react';
import CountDown from 'react-native-countdown-component';

const DiseñaEntrenamiento = () => {

    const [stateTable, setStateTable] = useState(false);

    const modifyCounting = () => {
        setStateTable(true)
        console.log('table', stateTable)
    }

    //Con el form hacer onChangeText, almacenar los minutos y segundos del form en un state y ya invocarlos en until (CountDown)


    return (
        <>
        <Text>Diseña Entrenamiento</Text>
        <CountDown
        until={60 * 30 /*minutos*/ + 30 /*segundos*/} //
        size={30}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: 'black'}}
        onPress={() => modifyCounting()}
        digitTxtStyle={{color: 'orange'}}
        timeToShow={['M', 'S']}
        timeLabels={{m: 'Minutos', s: 'Segundos'}}
      />
        </>
    )
}

export default DiseñaEntrenamiento