import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { format } from 'date-fns';

import icons from '../../utils/icons';
import done from '../../assets/done.png';


export default function TaskCard({data, loadOne}){

    return(
        <TouchableOpacity style={styles.container} onPress={() => loadOne(data._id)}>
            <View style={styles.content}>
                <Image source={icons[data.type]} style={styles.icon} />
                <Text style={styles.title}>{data.title}</Text>
            </View>
            <View style={styles.dateTime}>
                <Text style={styles.date}>{format(new Date(data.when), 'dd/MM/yyyy')}</Text>
                
                {data.complete && <Image source={done} style={styles.checkIcon}/>}

                <Text style={styles.time}>{format(new Date(data.when), 'HH:mm')}</Text>
            </View>
        </TouchableOpacity>
        
    )
}