import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';

import styles from './styles';

import check from '../../assets/check.png';
import plus from '../../assets/plus.png';

export default function Footer({button, func}){

    return(
        <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={() => func("TaskPage")}>
                {button === 'plus' &&
                <Image source={plus} style={styles.icon}/> }
                
                {button === 'check' &&
                <Image source={check} style={styles.icon}/>
                }
            </TouchableOpacity>
            {button === 'text' &&
            <Text style={styles.text}>Terefas atrasadas</Text>
            }
        </View>
    )
}