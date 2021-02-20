import React, { useEffect, useState } from 'react';
import { Text, TextInput, TouchableOpacity, KeyboardAvoidingView, View, Switch, ScrollView, Image, Alert, ActivityIndicator } from 'react-native';
import styles from './styles';
import DateTimePickerAndroid from '../../components/getTimeDate/index.android';
import api from '../../services/api';
import { getMacAddressAsync } from 'expo-network';
import { format } from 'date-fns';

import Header from '../../components/Header/index';
import Footer from '../../components/Footer/index';
import typeIcons from '../../utils/icons';


export default function TaskPage({ navigation }) {

    const [loading, setLoading] = useState(false)
    const [done, setDone] = useState(false);
    const [type, setType] = useState();
    const [time, setTime] = useState();
    const [date, setDate] = useState();
    const [date1, setDate1] = useState();
    const [title, setTitle] = useState();
    const [mac, setMac] = useState();
    const [description, setDescription] = useState();
    const [didMount, setDidMount] = useState(false);

    async function getMacAddress() {
        getMacAddressAsync().then(mac => setMac(mac))
    }

    async function FetchOne() {

        setLoading(true)

        await api.get(`/task/${navigation.state.params.id}`).then(resp => {
            
            setType(resp.data.type);
            setTitle(resp.data.title);
            setDescription(resp.data.description);
            setDate1(format(new Date(resp.data.when), 'dd-MM-yyyy'))
            setDate(format(new Date(resp.data.when), 'yyyy-MM-dd'));
            setTime(format(new Date(resp.data.when), 'HH:mm'));
            setDone(resp.data.complete);
            setLoading(false)
        })
    }

    function Back() {
        navigation.navigate('Home');
    }

    function Submit() {
        //validation 
        if (!type) {
            return Alert.alert("O tipo é obrigatorio!")
        } else if (!title) {
            return Alert.alert("O titulo é obrigatorio!")
        } else if (!description) {
            return Alert.alert("A descrição é obrigatoria!")
        } else if (!date) {
            return Alert.alert("A data é obrigatoria!")
        } else if (!time) {
            return Alert.alert("A hora é obrigatoria!")
        } else {

            if (navigation.state.params) {
                api.put(`/task/${navigation.state.params.id}`, {
                    complete: done,
                    mac,
                    type,
                    title,
                    description,
                    when: `${date}T${time}:00.000`
                }).then(resp => {
                    Back()
                })
            } else {
                api.post('/task', {
                    mac,
                    type,
                    title,
                    description,
                    when: `${date}T${time}:00.000`
                }).then(resp => {
                    Back()
                })
            }
        }
    }

    async function Delete() {

        Alert.alert(
            'Alerta!',
            'Tem certeza de que deseja excluir a tarefa?',
            [
                {
                    text: 'Cancelar',
                    onPress: () => { },
                    style: 'cancel'
                },
                {
                    text: 'OK', onPress: () => {

                        api.delete(`/task/${navigation.state.params.id}`).then(() => {
                            Back();
                        })

                    }
                }
            ],
            { cancelable: false }
        )
    }

    useEffect(() => {
        setDidMount(true);
        getMacAddress();
        navigation.state.params && FetchOne();
        return () => setDidMount(false);
    }, [mac])

    return (
        <KeyboardAvoidingView style={styles.container}>

            <Header page="taskpage" func={Back} />
            {loading ? <ActivityIndicator color='#56FF61' style={{ margin: 30, alignSelf:'center' }} size={50} /> :
            <ScrollView style={{ width: '100%', marginBottom: 90 }} >

                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    {typeIcons.map((icon, index) => (
                        icon &&
                        <TouchableOpacity key={index} onPress={() => setType(index)}>
                            <Image source={icon} style={type && type !== index ? styles.inative : styles.typeIcons} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <View style={styles.viewTitle}>
                    <Text style={styles.title}>Titulo</Text>
                    <TextInput maxLength={40} defaultValue={title} onChangeText={title => setTitle(title)} style={styles.inputTitle} />

                    <Text style={styles.title}>Descrição</Text>
                    <TextInput maxLength={300} defaultValue={description} onChangeText={description => setDescription(description)} multiline={true} style={styles.inputDescripiton} />
                </View>

                <View style={styles.viewTime}>
                    <DateTimePickerAndroid mode='date' dateTime={date => setDate(date)} val={date1} />
                    <DateTimePickerAndroid mode='time' dateTime={time => setTime(time)} val={time} />
                </View>

                {navigation.state.params &&
                    <View style={styles.viewButtons}>
                        <View style={styles.toggle}>
                            <Switch onValueChange={() => setDone(!done)} value={done} thumbColor={done ? '#00AE0B' : '#909090'} />
                            <Text style={styles.toggleText}>Concluída</Text>
                        </View>

                        <TouchableOpacity onPress={() => Delete()} style={styles.toggle}>
                            <Text style={styles.deleteText}>Excluir</Text>
                        </TouchableOpacity>
                    </View>
                }

            </ScrollView>
            }
            <Footer button="check" func={Submit} />

        </KeyboardAvoidingView>
    )
}