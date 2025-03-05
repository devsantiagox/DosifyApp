import homeStyles from '@/styles/homeStyles';
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { Link, useRouter } from "expo-router";
import CircularProgress from '../interfaces/cirtcularProgress';
import { QUICK_ACTIONS } from '../utils/quickActions';

export default function HomeScreen() {
    const router = useRouter();

    return (
        <ScrollView style={homeStyles.container} showsVerticalScrollIndicator={false}>
            <LinearGradient colors={["#1a8e2d", "#146922"]} style={homeStyles.header}>
                <View style={homeStyles.headerContent}>
                    <View style={homeStyles.headerTop}>
                        <View style={{ flex: 1 }}>
                            <Text style={homeStyles.greeting}>Progreso Diario</Text>
                        </View>
                        <TouchableOpacity style={homeStyles.notificationButton}>
                            <Ionicons name="notifications-outline" size={24} color="white" />
                            {
                                <View style={homeStyles.notificationBadge}>
                                    <Text style={homeStyles.notificationCount}>1</Text>
                                </View>
                            }
                        </TouchableOpacity>
                    </View>
                    <CircularProgress progress={50} totalDoses={10} completedDoses={5} />
                </View>
            </LinearGradient>

            <View style={homeStyles.content}>
                <View style={homeStyles.quickActionsContainer}>
                    <Text style={homeStyles.sectionTitle}> Acciones Rapidas</Text>
                    <View style={homeStyles.quickActionsGrid}>
                        {QUICK_ACTIONS.map((action) => (
                            <Link href={'/home'} key={action.route} asChild>
                                <TouchableOpacity style={homeStyles.actionButton}>
                                    <LinearGradient
                                        colors={action.gradient}
                                        style={homeStyles.actionGradient}
                                    >
                                        <View style={homeStyles.actionContent}>
                                            <View style={homeStyles.actionIcon}>
                                                <Ionicons name={action.icon} size={24} color={action.color} />
                                            </View>
                                            <Text style={homeStyles.actionLabel}>{action.label}</Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            </Link>
                        ))}
                    </View>
                </View>
            </View>

            <View style={{ paddingHorizontal: 20 }}>
                <View style={homeStyles.sectionHeader}>
                    <Text style={homeStyles.sectionTitle}> Horario de Hoy</Text>
                    <Link rel="stylesheet" href='/calender' asChild>
                        <TouchableOpacity>
                            <Text>Ver Todo</Text>
                        </TouchableOpacity>
                    </Link>
                </View>
                {true ? (
                    <View style={homeStyles.emptyState}>
                        <Ionicons name="medical-outline" size={48} color="#1a1a1a" />
                        <Text style={homeStyles.emptyStateText}>
                            No Hay Medicamentos Programados Para Hoy
                        </Text>
                        <Link href="/medications/add" asChild>
                            <TouchableOpacity style={homeStyles.addMedicationButton}>
                                <Text style={homeStyles.addMedicationButtonText}>
                                    Agregar Medicamento
                                </Text>
                            </TouchableOpacity>
                        </Link>
                    </View>
                ) : (
                    [].map((medications) => {
                        // const taken =
                        return (
                            <View key={medication.id} style={homeStyles.doseCard}>
                                <View
                                    style={homeStyles.doseBadge}
                                // {
                                //     backgroundColor: medication.color
                                // }
                                >
                                    <Ionicons name="medical" size={24} />
                                </View>
                                <View style={homeStyles.doseInfo}>
                                    <View>
                                        <Text style={homeStyles.medicineName}></Text>
                                        <Text style={homeStyles.dosageInfo}></Text>
                                    </View>
                                    <View style={homeStyles.doseTime}>
                                        <Ionicons name="time-outline" size={24} color="#ccc" />
                                        <Text style={homeStyles.timeText}>Tiempo</Text>
                                    </View>
                                </View>
                                {true ? (
                                    <View style={homeStyles.takeDoseButton}>
                                        <Ionicons name="checkmark-circle-outline" size={24} />
                                        <Text style={homeStyles.takeDoseText}>Tomado</Text>
                                    </View>
                                ) : (
                                    <TouchableOpacity style={homeStyles.takeDoseButton}>
                                        <Text style={homeStyles.takeDoseText}>Faltantes</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                        )
                    })
                )}
            </View>

            {/* <Modal
                visible={true}
                animationType="slide"
                transparent={true}
            >
                <View style={homeStyles.modalOverlay}>
                    <View style={homeStyles.modalContent}>
                        <View style={homeStyles.modalHeader}>
                            <Text style={homeStyles.modalTitle}>Notifications</Text>
                            <TouchableOpacity
                                style={homeStyles.closeButton}
                            >
                                <Ionicons name="close" size={24} color="#333" />
                            </TouchableOpacity>
                        </View>
                        {[].map((medication) => (
                            <View key={medication.name} style={homeStyles.notificationItem}>
                                <View style={homeStyles.notificationIcon}>
                                    <Ionicons name="medical" size={24} />
                                </View>
                                <View style={homeStyles.notificationContent}>
                                    <Text style={homeStyles.notificationTitle}>Nombre Medicamento</Text>
                                    <Text style={homeStyles.notificationMessage}>Dosis Medicamento</Text>
                                    <Text style={homeStyles.notificationTime}>Tiempo Medicamento</Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </Modal> */}
        </ScrollView >
    );
}