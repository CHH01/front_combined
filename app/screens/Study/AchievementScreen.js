import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Pressable 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const AchievementScreen = () => {
  const navigation = useNavigation();

  const achievements = [
    {
      id: 1,
      title: '학습의 시작',
      description: '첫 강의 수강 완료',
      icon: 'play',
      acquired: true,
      date: '2024.03.15'
    },
    {
      id: 2,
      title: '열정적인 학습자',
      description: '연속 7일 학습 달성',
      icon: 'fire',
      acquired: true,
      date: '2024.03.10'
    },
    {
      id: 3,
      title: '퀴즈 마스터',
      description: '퀴즈 100점 달성',
      icon: 'award',
      acquired: true,
      date: '2024.03.05'
    },
    {
      id: 4,
      title: '지식의 탐험가',
      description: '모든 기초 강의 수료',
      icon: 'compass',
      acquired: false,
      progress: '80%'
    },
    {
      id: 5,
      title: '완벽주의자',
      description: '과제 10개 만점 달성',
      icon: 'check-circle',
      acquired: false,
      progress: '60%'
    }
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>성취 뱃지</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryTitle}>획득한 뱃지</Text>
          <Text style={styles.summaryCount}>3개</Text>
          <Text style={styles.summarySubtext}>전체 30개 중</Text>
        </View>

        <View style={styles.badgeList}>
          {achievements.map(badge => (
            <View key={badge.id} style={styles.badgeItem}>
              <View style={[
                styles.iconContainer,
                !badge.acquired && styles.inactiveIcon
              ]}>
                <Icon 
                  name={badge.icon} 
                  size={24} 
                  color={badge.acquired ? '#2196F3' : '#9E9E9E'} 
                />
              </View>
              <View style={styles.badgeInfo}>
                <Text style={styles.badgeTitle}>{badge.title}</Text>
                <Text style={styles.badgeDescription}>{badge.description}</Text>
                {badge.acquired ? (
                  <Text style={styles.badgeDate}>획득일: {badge.date}</Text>
                ) : (
                  <Text style={styles.badgeProgress}>진행률: {badge.progress}</Text>
                )}
              </View>
              {badge.acquired && (
                <Icon name="check" size={20} color="#4CAF50" />
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  summaryCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  summaryCount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  summarySubtext: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
  badgeList: {
    padding: 15,
  },
  badgeItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  inactiveIcon: {
    backgroundColor: '#F5F5F5',
  },
  badgeInfo: {
    flex: 1,
  },
  badgeTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  badgeDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  badgeDate: {
    fontSize: 12,
    color: '#999',
  },
  badgeProgress: {
    fontSize: 12,
    color: '#2196F3',
  },
});

export default AchievementScreen; 