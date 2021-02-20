import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    footer: {
        width: '100%',
        height: 64,
        backgroundColor: '#2800D1',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopColor: '#56FF61',
        borderTopWidth: 5
    },

    button: {
        position: 'relative',
        top: -37
    },

    icon: {
        width: 70,
        height: 70,
        borderWidth: 6,
        borderColor: "#fff",
        borderRadius: 50
    },

    text: {
        color: '#56FF61',
        fontSize: 18,
        position: 'relative',
        top: 12
    }
})

export default styles;