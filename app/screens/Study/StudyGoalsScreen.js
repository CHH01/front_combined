import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const StudyGoalsScreen = () => {
  const navigation = useNavigation();
  
  const [goals, setGoals] = useState({
    short: [
      { id: 1, title: '알고리즘 문제 5개 풀기', progress: 0.6, deadline: '이번 주' },
      { id: 2, title: 'React 강의 3개 완료하기', progress: 0.3, deadline: '이번 주' },
    ],
    mid: [
      { id: 3, title: '프로젝트 1단계 완성하기', progress: 0.45, deadline: '이번 달' },
    ],
    long: [
      { id: 4, title: '풀스택 개발자 되기', progress: 0.15, deadline: '1년' },
    ]
  });

  const handleEditGoal = (goal) => {
    navigation.navigate('EditGoal', { goal });
  };

  const handleDeleteGoal = (goalId) => {
    Alert.alert(
      '목표 삭제',
      '정말 이 목표를 삭제하시겠습니까?',
      [
        { text: '취소', style: 'cancel' },
        { 
          text: '삭제', 
          style: 'destructive',
          onPress: () => {
            // 목표 삭제 로직 구현
          }
        }
      ]
    );
  };

  const renderGoalSection = (title, goalsList) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {goalsList.map((goal) => (
        <TouchableOpacity
          key={goal.id}
          style={styles.goalItem}
          onPress={() => handleEditGoal(goal)}
        >
          <View style={styles.goalContent}>
            <Text style={styles.goalTitle}>{goal.title}</Text>
            <Text style={styles.deadline}>{goal.deadline}</Text>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${goal.progress * 100}%` }]} />
            </View>
          </View>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => handleDeleteGoal(goal.id)}
          >
            <Icon name="trash-2" size={20} color="#ff4444" />
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>학습 목표</Text>
        <TouchableOpacity onPress={() => navigation.navigate('AddGoal')}>
          <Icon name="plus" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {renderGoalSection('단기 목표', goals.short)}
        {renderGoalSection('중기 목표', goals.mid)}
        {renderGoalSection('장기 목표', goals.long)}
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
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: '#333',
  },
  goalItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  goalContent: {
    flex: 1,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 5,
  },
  deadline: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
  },
  progressBar: {
    height: 6,
    backgroundColor: '#f0f0f0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 3,
  },
  deleteButton: {
    padding: 10,
  },
});

export default StudyGoalsScreen; 