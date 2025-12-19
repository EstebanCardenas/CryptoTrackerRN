import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
    modalBackground: {
        flex: 1, 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: 'rgb(0,0,0,0.8)',
    },
    container: {
        backgroundColor: 'white',
        elevation: 2,
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 24,
        width: width - 76,
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 16,
    },
    input: {
        height: 42,
        borderWidth: 1,
        padding: 12,
        borderRadius: 8,
        width: '100%',
        marginBottom: 16,
    },
    button: {
        backgroundColor: 'black',
        width: 72,
    },
    closeButton: { 
        position: 'absolute', 
        top: 12, 
        right: 12, 
    },
});
