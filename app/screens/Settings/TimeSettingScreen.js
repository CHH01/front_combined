import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const TimeSettingScreen = ({ route }) => {
  const { title } = route.params; // '평일' 또는 '주말'
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [isStartPickerVisible, setStartPickerVisible] = useState(false);
  const [isEndPickerVisible, setEndPickerVisible] = useState(false);
  const navigation = useNavigation();

  const formatTime = (date) => {
    return date.toLocaleTimeString('ko-KR', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{title} 알림 시간</Text>
        <View style={styles.placeholder} />
      </View>
      
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.item}
          onPress={() => setStartPickerVisible(true)}
        >
          <Text style={styles.itemTitle}>시작 시간</Text>
          <Text style={styles.timeText}>{formatTime(startTime)}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.item}
          onPress={() => setEndPickerVisible(true)}
        >
          <Text style={styles.itemTitle}>종료 시간</Text>
          <Text style={styles.timeText}>{formatTime(endTime)}</Text>
        </TouchableOpacity>

        <DateTimePickerModal
          isVisible={isStartPickerVisible}
          mode="time"
          onConfirm={(time) => {
            setStartTime(time);
            setStartPickerVisible(false);
          }}
          onCancel={() => setStartPickerVisible(false)}
        />

        <DateTimePickerModal
          isVisible={isEndPickerVisible}
          mode="time"
          onConfirm={(time) => {
            setEndTime(time);
            setEndPickerVisible(false);
          }}
          onCancel={() => setEndPickerVisible(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  backButton: {
    padding: 8,
  },
  placeholder: {
    width: 40,  // 뒤로가기 버튼과 동일한 너비
  },
  content: {
    flex: 1,
    padding: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemTitle: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 16,
    color: '#007AFF',
  },
});

export default TimeSettingScreen; 