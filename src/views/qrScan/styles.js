import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'black'
    },

    header:{
        width: '100%',
        height: 68,
        backgroundColor: '#2800D1',
        borderBottomWidth: 5,
        borderColor: '#56FF61',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        color: 'white',
        fontSize: 16
    },

    footer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 68,
        flexDirection: 'row',
        justifyContent: 'center'
    },

    footerText: {
        color: 'white',
        textTransform: 'uppercase',
        fontSize: 12
    },

    button:{
        height: 24,
        width: 150,
        backgroundColor: '#00AE0B',
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button1 :{
        height: 24,
        width: 150,
        backgroundColor: '#2800D1',
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
    
});

export default styles;