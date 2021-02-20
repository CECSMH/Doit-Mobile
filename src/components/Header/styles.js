import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: 68,
        backgroundColor: '#2800D1',
        borderBottomWidth: 5,
        borderColor: '#56FF61',
        alignItems: 'center',
        justifyContent: 'center'
    },

    qricon:{
        position: 'absolute',
        left: 20
    },

    qrimg: {
        width: 23,
        height: 23
    },

    angleLeft: {
        width: 13,
        height: 20
    },

    logo: {
        width: 83,
        height: 25,
    },
    
//################ notification #####################

    notification:{
        position: 'absolute',
        right: 20
    },

    bell: {
        width: 17,
        height: 22
    },

    field: {
        width: 17,
        height: 17,
        backgroundColor: '#fff',
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        left: 6,
        bottom: 8
    },

    number: {
        color: '#00AE0B',
        fontSize: 11,
        fontWeight: 'bold'
    },


//########## filter #################

    filterArea: {
        position: 'absolute',
        left: 54
    },

    select: {
        width: 120,
        height: 30,
        color: '#ffffff',
        backgroundColor: 'transparent'
    },

    angle: {
        position: 'absolute',
        left: 94,
        bottom: 10,
        width: 13,
        height: 8
    },

});

export default styles;