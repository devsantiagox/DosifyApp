import authStyles from "../styles/authStyles";
import { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
} from "react-native";
// import { useRouter } from "expo-router";
import * as LocalAuthentication from "expo-local-authentication";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function AuthScreen() {
    // const router = useRouter();
    const [isAuthenticating, setIsAuthenticating] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [hasBiometrics, setHasBiometrics] = useState(false);

    useEffect(() => {
        checkBiometrics();
    }, []);

    const checkBiometrics = async () => {
        const hasHardware = await LocalAuthentication.hasHardwareAsync();
        const isEnrolled = await LocalAuthentication.isEnrolledAsync();
        setHasBiometrics(hasHardware && isEnrolled);
    };

    const authenticate = async () => {
        try {
            setIsAuthenticating(true);
            setError(null);

            // Comprueba si el dispositivo tiene hardware biométrico
            const hasHardware = await LocalAuthentication.hasHardwareAsync();
            const supportedTypes =
                await LocalAuthentication.supportedAuthenticationTypesAsync();
            const hasBiometrics = await LocalAuthentication.isEnrolledAsync();

            const auth = await LocalAuthentication.authenticateAsync({
                promptMessage:
                    hasHardware && hasBiometrics
                        ? "Use Face ID or Touch ID"
                        : "Enter your PIN to access MedRemind",
                fallbackLabel: "Use PIN",
                cancelLabel: "Cancel",
                disableDeviceFallback: false,
            });

            if (auth.success) {
                // TODO: Se debe crear la vista de home
                // router.replace("/home");
            } else {
                setError("Autenticación fallida. Por favor, inténtalo de nuevo.");
            }
        } catch (err) {
            setError("Ocurrió un error. Por favor, inténtalo de nuevo.");
            console.error(err);
        } finally {
            setIsAuthenticating(false);
        }
    };

    return (
        <LinearGradient colors={["#4CAF50", "#2E7D32"]} style={authStyles.container}>
            <View style={authStyles.content}>
                <View style={authStyles.iconContainer}>
                    <Ionicons name="medical" size={80} color="white" />
                </View>

                <Text style={authStyles.title}>Dosify</Text>
                <Text style={authStyles.subtitle}>Su Asistente Personal De Medicación</Text>

                <View style={authStyles.card}>
                    <Text style={authStyles.welcomeText}>¡Bienvenido de nuevo!</Text>
                    <Text style={authStyles.instructionText}>
                        {hasBiometrics
                            ? "Usa Face ID/Touch ID o tu PIN para acceder a tus medicamentos"
                            : "Ingresa tu PIN para acceder a tus medicamentos"}
                    </Text>

                    <TouchableOpacity
                        style={[authStyles.button, isAuthenticating && authStyles.buttonDisabled]}
                        onPress={authenticate}
                        disabled={isAuthenticating}
                    >
                        <Ionicons
                            name={hasBiometrics ? "finger-print-outline" : "keypad-outline"}
                            size={24}
                            color="white"
                            style={authStyles.buttonIcon}
                        />
                        <Text style={authStyles.buttonText}>
                            {isAuthenticating
                                ? "Verificando..."
                                : hasBiometrics
                                    ? "Autentícate"
                                    : "Ingresa tu PIN"}
                        </Text>
                    </TouchableOpacity>

                    {error && (
                        <View style={authStyles.errorContainer}>
                            <Ionicons name="alert-circle" size={20} color="#f44336" />
                            <Text style={authStyles.errorText}>{error}</Text>
                        </View>
                    )}
                </View>
            </View>
        </LinearGradient>
    );
}