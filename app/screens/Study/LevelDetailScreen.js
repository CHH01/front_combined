import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    ScrollView, 
    TouchableOpacity,
    Pressable 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LevelDetailScreen = ({ navigation }) => {
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>레벨 정보</Text>
            </View>

            <View style={styles.currentLevelCard}>
                <Text style={styles.cardTitle}>현재 레벨</Text>
                <View style={styles.levelInfo}>
                    <Text style={styles.levelNumber}>5</Text>
                    <Text style={styles.levelText}>레벨</Text>
                </View>
                <View style={styles.progressContainer}>
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { width: '70%' }]} />
                    </View>
                    <Text style={styles.progressText}>다음 레벨까지 230XP</Text>
                </View>
            </View>

            <View style={styles.statsCard}>
                <Text style={styles.cardTitle}>레벨 통계</Text>
                <View style={styles.statsRow}>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>1,250</Text>
                        <Text style={styles.statLabel}>총 획득 XP</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statValue}>32</Text>
                        <Text style={styles.statLabel}>연속 학습일</Text>
                    </View>
                </View>
            </View>

            <View style={styles.levelRequirementsCard}>
                <Text style={styles.cardTitle}>다음 레벨 달성 조건</Text>
                <View style={styles.requirementItem}>
                    <View style={styles.requirementProgress}>
                        <Text style={styles.requirementText}>학습 시간</Text>
                        <Text style={styles.requirementValue}>15/20 시간</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { width: '75%' }]} />
                    </View>
                </View>
                <View style={styles.requirementItem}>
                    <View style={styles.requirementProgress}>
                        <Text style={styles.requirementText}>퀴즈 점수</Text>
                        <Text style={styles.requirementValue}>8/10 개</Text>
                    </View>
                    <View style={styles.progressBar}>
                        <View style={[styles.progress, { width: '80%' }]} />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        padding: 10,
        position: 'absolute',
        left: 10,
        zIndex: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    currentLevelCard: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 15,
    },
    levelInfo: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginBottom: 15,
    },
    levelNumber: {
        fontSize: 40,
        fontWeight: 'bold',
        color: '#2196F3',
    },
    levelText: {
        fontSize: 16,
        marginLeft: 5,
        marginBottom: 8,
    },
    progressContainer: {
        marginTop: 10,
    },
    progressBar: {
        height: 8,
        backgroundColor: '#E0E0E0',
        borderRadius: 4,
        marginBottom: 8,
    },
    progress: {
        height: '100%',
        backgroundColor: '#2196F3',
        borderRadius: 4,
    },
    progressText: {
        fontSize: 14,
        color: '#666',
    },
    statsCard: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    statItem: {
        alignItems: 'center',
    },
    statValue: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
        marginTop: 5,
    },
    levelRequirementsCard: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 20,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    requirementItem: {
        marginBottom: 15,
    },
    requirementProgress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    requirementText: {
        fontSize: 14,
        color: '#333',
    },
    requirementValue: {
        fontSize: 14,
        color: '#666',
    },
});

export default LevelDetailScreen; 