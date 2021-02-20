import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },

    typeIcons: {
        width: 60,
        height: 60,
        margin: 10
    },

    inative: {
        width: 60,
        height: 60,
        margin: 10,
        opacity: 0.5
    },

// ############### title ###############
    viewTitle: {
        width: '90%',
        alignSelf: 'center',
        marginVertical: 20
    },

    inputTitle: {
        borderBottomWidth: 1,
        borderColor: '#00AE0B',
        marginBottom: 30,
        padding: 4
    },

    title : {
        color: '#6C6C6C',
        fontSize: 16
    },

//############# description ##############
    inputDescripiton: {
        borderColor: '#00AE0B',
        borderWidth: 1,
        borderRadius: 8,
        minHeight: 80,
        marginTop: 5,
        textAlignVertical: 'top',
        padding: 4
    },

// ############### time ###############
    viewTime: {
        alignSelf: 'center',
        width: '90%',
        justifyContent: 'space-between',
        marginBottom: 20
    },

// ############# buttons #################
    viewButtons: {
        width: '90%',
        alignSelf: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    toggle: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    toggleText: {
        color: '#00AE0B',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16
    },

    deleteText: {
        color: '#2800D1',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16
    }
});

export default styles;