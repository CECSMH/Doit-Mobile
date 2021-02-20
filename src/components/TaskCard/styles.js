import { BackHandler, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '96%',
        height: 80,
        borderRadius: 10,
        marginBottom: 5,
        marginTop: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5,
        elevation: 2,
        flexDirection: 'row', 
    },

// ############### left side ###################
    content: {
        width: '76%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },

    icon: {
        margin: 12,
        width: 60,
        height: 60
    },

    title: {
        color: '#00AE0B',
        fontSize: 14,
        width: '68%'
    },

//############# right side ##############

    dateTime: {
        width: '24%',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        paddingRight: 7,
        paddingVertical: 2
    },

    date: {
        color: '#56FF61',
        fontSize: 12,
        fontWeight: 'bold'
    },

    time: {
        color: '#414141',
        fontSize: 12,
        fontWeight: '300'
    },

    checkIcon: {
        width: 15,
        height: 14
    }
})

export default styles;