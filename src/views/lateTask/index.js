import React, { useEffect, useState } from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';
import styles from './styles';
import api from '../../services/api';
import { getMacAddressAsync } from 'expo-network';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import TaskCard from '../../components/TaskCard/index';



export default function LateTask({ navigation }){

    const [loading, setLoading] = useState(true);
    const [task, setTask] = useState([]);
    const [didMount, setDidMount] = useState(false);
    const [mac, setMac] = useState();

    async function getMacAddress(){
        getMacAddressAsync().then(mac => setMac(mac))
     }

    async function load(){
        await api.get(`/task/filter/late/${mac}`).then(resp => {
            setTask(resp.data)
            setLoading(false)
        })
    }

    function Back(){
        navigation.navigate('Home');
    }

    useEffect(() => {
        setDidMount(true);
        getMacAddress();
        load();
        return () => setDidMount(false);
    }, [mac])

    return(
        <View style={styles.container}>
            <Header func={Back}/>

                <ScrollView style={styles.content} contentContainerStyle={{alignItems: 'center'}}>
                    {task.length === 0 && 
                        <Text style={styles.text}>Não há tarefas atrasadas</Text>                       
                    }

                    { 
                    loading ? <ActivityIndicator color='#56FF61' style={{margin: 30}} size={50}/> :
                    task.map((data, index) => (
                        <TaskCard key={index} data={data}/>  
                    ))
                    }
                
                </ScrollView>

            <Footer button="text"/>
        </View>
    )
}
