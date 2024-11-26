import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

const EditGoalScreen = ({ route, navigation }) => {
  const { goal } = route.params;
  const [goalData, setGoalData] = useState({
    title: '',
    category: 'short',
    deadline: new Date(),
    description: '',
    progress: 0,
  });

  useEffect(() => {
    // 기존 목표 데이터로 초기화
    if (goal) {
      setGoalData({
        title: goal.title,
        category: goal.category,
        deadline: new Date(goal.deadline),
        description: goal.description || '',
        progress: goal.progress || 0,
      });
    }
  }, [goal]);

  const [showDatePicker, setShowDatePicker] = useState(false);

  const categories = [
    { id: 'short', label: '단기 목표', description: '1주일 ~ 1개월' },
    { id: 'mid', label: '중기 목표', description: '1개월 ~ 6개월' },
    { id: 'long', label: '장기 목표', description: '6개월 이상' },
  ];

  const handleUpdate = () => {
    if (!goalData.title.trim()) {
      Alert.alert('알림', '목표 제목을 입력해주세요.');
      return;
    }
    // TODO: 목표 업데이트 로직 구현
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="x" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>목표 수정</Text>
        <TouchableOpacity onPress={handleUpdate}>
          <Text style={styles.saveButton}>완료</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* 진행률 표시 */}
        <View style={styles.section}>
          <Text style={styles.label}>현재 진행률</Text>
          <View style={styles.progressContainer}>
            <View style={styles.progressBar}>
              <View style={[styles.progress, { width: `${goalData.progress * 100}%` }]} />
            </View>
            <Text style={styles.progressText}>{`${Math.round(goalData.progress * 100)}%`}</Text>
          </View>
        </View>

        {/* 나머지 입력 필드들은 AddGoalScreen과 동일 */}
        <View style={styles.section}>
          <Text style={styles.label}>목표 제목</Text>
          <TextInput
            style={styles.input}
            placeholder="목표를 입력해주세요"
            value={goalData.title}
            onChangeText={(text) => setGoalData({ ...goalData, title: text })}
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>목표 기간</Text>
          <View style={styles.categoryContainer}>
            {categories.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={[
                  styles.categoryButton,
                  goalData.category === category.id && styles.categoryButtonActive,
                ]}
                onPress={() => setGoalData({ ...goalData, category: category.id })}
              >
                <Text style={[
                  styles.categoryText,
                  goalData.category === category.id && styles.categoryTextActive,
                ]}>
                  {category.label}
                </Text>
                <Text style={[
                  styles.categoryDescription,
                  goalData.category === category.id && styles.categoryTextActive,
                ]}>
                  {category.description}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>목표 기한</Text>
          <TouchableOpacity
            style={styles.dateButton}
            onPress={() => setShowDatePicker(true)}
          >
            <Text style={styles.dateText}>
              {goalData.deadline.toLocaleDateString()}
            </Text>
            <Icon name="calendar" size={20} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.label}>상세 설명</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="목표에 대한 상세 설명을 입력해주세요"
            multiline
            numberOfLines={4}
            textAlignVertical="top"
            value={goalData.description}
            onChangeText={(text) => setGoalData({ ...goalData, description: text })}
          />
        </View>
      </ScrollView>

      {showDatePicker && (
        <DateTimePicker
          value={goalData.deadline}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setGoalData({ ...goalData, deadline: selectedDate });
            }
          }}
        />
      )}
    </View>
  );
};

// AddGoalScreen의 스타일을 복사하고 추가 스타일 정의
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
  saveButton: {
    fontSize: 16,
    color: '#2196F3',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  section: {
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  textArea: {
    height: 100,
    paddingTop: 15,
  },
  categoryContainer: {
    flexDirection: 'column',
    gap: 10,
  },
  categoryButton: {
    padding: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
  },
  categoryButtonActive: {
    borderColor: '#2196F3',
    backgroundColor: '#E3F2FD',
  },
  categoryText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
    marginBottom: 4,
  },
  categoryDescription: {
    fontSize: 14,
    color: '#666',
  },
  categoryTextActive: {
    color: '#2196F3',
  },
  dateButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  progressBar: {
    flex: 1,
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progress: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
    width: 45,
    textAlign: 'right',
  },
});

export default EditGoalScreen; 