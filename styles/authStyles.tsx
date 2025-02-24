import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get("window");

const authStyles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
    },
    iconContainer: {
        width: 120,
        height: 120,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: "bold",
        color: "white",
        marginBottom: 10,
        textShadowColor: "rgba(0, 0, 0, 0.2)",
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 3,
    },
    subtitle: {
        fontSize: 18,
        color: "rgba(255, 255, 255, 0.9)",
        marginBottom: 40,
        textAlign: "center",
    },
    card: {
        backgroundColor: "white",
        borderRadius: 20,
        padding: 30,
        width: width - 40,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    welcomeText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#333",
        marginBottom: 10,
    },
    instructionText: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
        marginBottom: 30,
    },
    button: {
        backgroundColor: "#4CAF50",
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 12,
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    buttonDisabled: {
        opacity: 0.7,
    },
    buttonIcon: {
        marginRight: 10,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "600",
    },
    errorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 20,
        padding: 10,
        backgroundColor: "#ffebee",
        borderRadius: 8,
    },
    errorText: {
        color: "#f44336",
        marginLeft: 8,
        fontSize: 14,
    },
});

export default authStyles;