import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import styles from './styles';
import { getMacAddressAsync } from 'expo-network';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import TaskCard from '../../components/TaskCard/index';
import api from '../../services/api';


export default function Home({ navigation }) {

    const [task, setTask] = useState([]);
    const [filter, setFilter] = useState('all');
    const [loading, setLoading] = useState(true);
    const [mac, setMac] = useState();
    const [didMount, setDidMount] = useState(false);

    async function getMacAddress() {
        getMacAddressAsync().then(mac => setMac(mac))
    }

    async function load() {
        await api.get(`/task/filter/${filter}/${mac}`).then(resp => {
            setTask(resp.data)
            setLoading(false)
        })
    }

    function Redirect(target) {
        target === "TaskPage" && navigation.navigate('TaskPage');
        target === "LateTask" && navigation.navigate('LateTask');
        target === "qrcode" && navigation.navigate('QrScan');
    }

    function FetchOne(id) {
        navigation.navigate('TaskPage', { id })
    }


    useEffect(() => {
        setDidMount(true);
        getMacAddress();
        load();
        return () => setDidMount(false);
    }, [filter, mac])

    return (
        <View style={styles.container}>
            <Header filter={(value) => setFilter(value)} func={Redirect} page="home" />

            <ScrollView style={styles.content} contentContainerStyle={{ alignItems: 'center' }}>
                    {task.length === 0 && 
                        <Text style={styles.text}>Não há tarefas nesse filtro</Text>                       
                    }

                {
                    loading ? <ActivityIndicator color='#56FF61' style={{ margin: 30 }} size={50} /> :
                        task.map((data, index) => (
                            <TaskCard key={index} data={data} loadOne={FetchOne} />
                        ))
                }

            </ScrollView>

            <Footer button="plus" func={Redirect} />
        </View>
    )
}