import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        borderRadius: 12,
        color: 'white',
        padding: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        borderWidth: 1,
        borderColor: 'gray',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    symbolText: {
        fontSize: 12,
    },
    priceText: {
        marginRight: 8,
        fontWeight: 'bold',
    },
    rightContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
});
