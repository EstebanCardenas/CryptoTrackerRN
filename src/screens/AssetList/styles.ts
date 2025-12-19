import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 16,
    },
    separator: {
        height: 8,
    },
    quotesList: {
        paddingHorizontal: 16,
        paddingBottom: 12,
    },
});
