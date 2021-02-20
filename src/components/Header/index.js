import React, { useEffect, useState } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-community/picker';
import api from '../../services/api';
import { getMacAddressAsync } from 'expo-network';

import styles from './styles';

import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';
import qricon from '../../assets/qrcode.png';
import angle from '../../assets/angle.png';
import organize from '../../assets/organize.png';
import angleLeft from '../../assets/angleLeft.png';



 
export default function Header({filter, page, func}){

    const [selected ,setSelected] = useState('all');
    const [org, setOrg] = useState("both");
    const [notifications, setNotifications] = useState();
    const [didMount, setDidMount] = useState(false);
    const [mac, setMac] = useState();


    async function getMacAddress(){
        getMacAddressAsync().then(mac => setMac(mac))
     }

    async function loadLate(){
        await api.get(`/task/filter/late/${mac}`).then(resp =>{
            setNotifications(resp.data.length)
        })
    }
    

    useEffect(() => {
        setDidMount(true);
        getMacAddress();
        loadLate();
        return () => setDidMount(false);
    }, [mac])

    return(
        <View style={styles.header}>

            
            <TouchableOpacity style={styles.qricon} onPress={() => func(page === "home" ? 'qrcode' : 'back')}>
                { page === 'home' ? 
                <Image source={qricon}  style={styles.qrimg}/>
                :
                <Image source={angleLeft} style={styles.angleLeft}/>
                }
            </TouchableOpacity> 
            
            {page === 'home' ?
            <TouchableOpacity style={styles.filterArea}>
                <Picker style={styles.select} onValueChange={item => {setSelected(item), filter(item)}} selectedValue={selected} mode="dropdown">
                    <Picker.Item label="Concluido" value="done"/>
                    <Picker.Item label="Todos" value="all"/>
                    <Picker.Item label="Hoje" value="today"/>
                    <Picker.Item label="Semana" value="week"/>
                    <Picker.Item label="Mês" value="month"/>
                    <Picker.Item label="Ano" value="year"/>
                </Picker>
                <Image style={styles.angle} source={angle}/>
            </TouchableOpacity>
            :
            <Image source={logo} style={styles.logo} />
            }
            
            {page === 'home' &&
            
            <TouchableOpacity style={styles.notification} onPress={() => func("LateTask")}>
                <Image source={bell} style={styles.bell}/>

                { notifications > 0 &&
                <View style={styles.field}>
                    <Text style={styles.number}>{notifications}</Text>
                </View>
                }
            </TouchableOpacity>
            
            }

        </View>
    )
}