import { getMacAddressAsync } from 'expo-network';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';

import Styles from './styles';
import api from '../../services/api';

export default function QrScan({navigation}){

    const [mac, setMac] = useState();
    const [didMount, setDidMount] = useState(false);
    const [permission, setPermission] = useState(null);
    const [scan, setScan] = useState(false);

    const handleBarCodeScanned = ({data}) => {
        setScan(true);

        if(data.substring(0, 4) === "Web_"){
            SyncCell(data)
        }else{
            Alert.alert('Codigo inválido, tente novamente');
        }
    }

    async function SyncCell(id){
        await api.get(`task/sync/cell/${mac}/${id}`).then(resp => {
            Alert.alert('Sucesso!', 'Click sobre o qrcode em seu computador!')
            navigation.navigate('Home');
        })
    }

    async function getMacAddress() {
        getMacAddressAsync().then(mac => setMac(mac))
    }

    useEffect(() => {
        setDidMount(true);
        (
            async ()=>{
                const { status } = await BarCodeScanner.requestPermissionsAsync();
                setPermission(status === "granted")
            }
        )();
        getMacAddress();
        return () => setDidMount(false);
    }, [mac])

    return(
        <View style={Styles.container}>
            <View style={Styles.header}>
                <Text style={Styles.headerText}>Aponte para o qrcode no seu navegador</Text>
            </View>
            <BarCodeScanner onBarCodeScanned={scan ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject} />
            <View style={Styles.footer}>
                <TouchableOpacity style={Styles.button} onPress={() => navigation.navigate('Home')}>
                    <Text style={Styles.footerText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Styles.button1} onPress={() => setScan(false)}>
                    <Text style={Styles.footerText}>tentar novamente</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}