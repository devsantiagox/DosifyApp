import homeStyles from '@/styles/homeStyles';
import React, { useEffect, useRef } from 'react';
import { View, Text, Animated, Dimensions } from 'react-native';
import Svg, { Circle } from "react-native-svg";

interface CircularProgressProps {
    progress: number;
    totalDoses: number;
    completedDoses: number;
}

const { width } = Dimensions.get('window');

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

const CircularProgress: React.FC<CircularProgressProps> = ({ progress, totalDoses, completedDoses }) => {
    const animationValue = useRef(new Animated.Value(0)).current;
    const size = width * 0.55;
    const strokeWidth = width * 0.1;
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    useEffect(() => {
        Animated.timing(animationValue, {
            toValue: progress,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [progress]);

    const strokeDashoffset = animationValue.interpolate({
        inputRange: [0, 1],
        outputRange: [circumference, 0],
    });

    return (
        <View style={homeStyles.progressContainer}>
            <View style={homeStyles.progressTextContainer}>
                <Text style={homeStyles.progressPercentage}> {Math.round(progress)}%</Text>
                <Text style={homeStyles.progressLabel}>
                    {" "}
                    {completedDoses} de {totalDoses} dosis
                </Text>
            </View>
            <Svg width={size} height={size} style={homeStyles.progressRing}>
                <Circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="rgba(255, 255, 255, 0.2)"
                    strokeWidth={strokeWidth}
                    fill="none"
                />
                <AnimatedCircle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="white"
                    strokeWidth={strokeWidth}
                    fill="none"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    transform={`rotate(-90 ${size / 2} ${size / 2})`}
                />
            </Svg>
        </View>
    )
};

export default CircularProgress;