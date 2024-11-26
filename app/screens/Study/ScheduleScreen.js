import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Modal,
  TextInput,
  Switch,
  Platform
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/Feather';
import DateTimePicker from '@react-native-community/datetimepicker';

const ScheduleScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [schedules, setSchedules] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    title: '',
    startTime: new Date(),
    endTime: new Date(),
    repeat: false,
    notification: false,
    shared: false,
  });

  // 일정 추가
  const handleAddSchedule = () => {
    setSchedules([...schedules, { ...newSchedule, id: Date.now() }]);
    setModalVisible(false);
    setNewSchedule({
      title: '',
      startTime: new Date(),
      endTime: new Date(),
      repeat: false,
      notification: false,
      shared: false,
    });
  };

  // 일정 삭제
  const handleDeleteSchedule = (id) => {
    setSchedules(schedules.filter(schedule => schedule.id !== id));
  };

  // 캘린더 뷰 전환 버튼
  const ViewModeButtons = () => (
    <View style={styles.viewModeContainer}>
      <Pressable
        style={[styles.viewModeButton, viewMode === 'month' && styles.activeViewMode]}
        onPress={() => setViewMode('month')}
      >
        <Text style={styles.viewModeText}>월간</Text>
      </Pressable>
      <Pressable
        style={[styles.viewModeButton, viewMode === 'week' && styles.activeViewMode]}
        onPress={() => setViewMode('week')}
      >
        <Text style={styles.viewModeText}>주간</Text>
      </Pressable>
      <Pressable
        style={[styles.viewModeButton, viewMode === 'day' && styles.activeViewMode]}
        onPress={() => setViewMode('day')}
      >
        <Text style={styles.viewModeText}>일간</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>학습 일정</Text>
        <Pressable onPress={() => setModalVisible(true)}>
          <Icon name="plus" size={24} color="#333" />
        </Pressable>
      </View>

      <ViewModeButtons />

      <Calendar
        style={styles.calendar}
        onDayPress={day => setSelectedDate(day.dateString)}
        markedDates={{
          [selectedDate]: { selected: true, selectedColor: '#4A90E2' },
        }}
      />

      <ScrollView style={styles.scheduleList}>
        {schedules.map(schedule => (
          <View key={schedule.id} style={styles.scheduleItem}>
            <View style={styles.scheduleInfo}>
              <Text style={styles.scheduleTitle}>{schedule.title}</Text>
              <Text style={styles.scheduleTime}>
                {schedule.startTime.toLocaleTimeString()} - {schedule.endTime.toLocaleTimeString()}
              </Text>
            </View>
            <View style={styles.scheduleActions}>
              <Pressable onPress={() => {}}>
                <Icon name="edit-2" size={20} color="#666" />
              </Pressable>
              <Pressable onPress={() => handleDeleteSchedule(schedule.id)}>
                <Icon name="trash-2" size={20} color="#666" />
              </Pressable>
            </View>
          </View>
        ))}
      </ScrollView>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>새 일정 추가</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Icon name="x" size={24} color="#333" />
              </Pressable>
            </View>

            <TextInput
              style={styles.input}
              placeholder="일정 제목"
              value={newSchedule.title}
              onChangeText={(text) => setNewSchedule({...newSchedule, title: text})}
            />

            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>반복</Text>
              <Switch
                value={newSchedule.repeat}
                onValueChange={(value) => setNewSchedule({...newSchedule, repeat: value})}
              />
            </View>

            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>알림</Text>
              <Switch
                value={newSchedule.notification}
                onValueChange={(value) => setNewSchedule({...newSchedule, notification: value})}
              />
            </View>

            <View style={styles.settingItem}>
              <Text style={styles.settingLabel}>공유</Text>
              <Switch
                value={newSchedule.shared}
                onValueChange={(value) => setNewSchedule({...newSchedule, shared: value})}
              />
            </View>

            <Pressable
              style={styles.addButton}
              onPress={handleAddSchedule}
            >
              <Text style={styles.addButtonText}>일정 추가</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewModeContainer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 10,
  },
  viewModeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeViewMode: {
    backgroundColor: '#4A90E2',
  },
  viewModeText: {
    color: '#333',
  },
  calendar: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  scheduleList: {
    flex: 1,
    padding: 15,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  scheduleInfo: {
    flex: 1,
  },
  scheduleTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  scheduleTime: {
    fontSize: 14,
    color: '#666',
  },
  scheduleActions: {
    flexDirection: 'row',
    gap: 15,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ScheduleScreen; 