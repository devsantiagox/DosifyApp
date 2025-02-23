import { StyleSheet } from 'react-native';

const generalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iconContainer: {
        alignItems: 'center',
    },
    appName: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 20,
        letterSpacing: 1,
    },
});

export default generalStyles;