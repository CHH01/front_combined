import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
  Switch,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import BackgroundTimer from 'react-native-background-timer';

const StudySessionScreen = ({ navigation }) => {
  // 상태 관리
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25분
  const [isBreakTime, setIsBreakTime] = useState(false);
  const [cycles, setCycles] = useState(0);
  const [focusMode, setFocusMode] = useState({
    notifications: false,
    backgroundMusic: false,
  });
  const [sessionNotes, setSessionNotes] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  // 타이머 관리
  useEffect(() => {
    let interval;
    if (isTimerRunning) {
      interval = BackgroundTimer.setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            handleTimerComplete();
            return isBreakTime ? 25 * 60 : 5 * 60;
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        BackgroundTimer.clearInterval(interval);
      }
    };
  }, [isTimerRunning, isBreakTime]);

  // 타이머 완료 처리
  const handleTimerComplete = () => {
    setIsTimerRunning(false);
    if (!isBreakTime) {
      setCycles(prev => prev + 1);
    }
    setIsBreakTime(!isBreakTime);
  };

  // 시간 포맷팅
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 세션 종료 및 리뷰
  const handleEndSession = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>학습 세션</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 타이머 섹션 */}
      <View style={styles.timerSection}>
        <Text style={styles.timerText}>{formatTime(timeLeft)}</Text>
        <Text style={styles.cycleText}>
          {isBreakTime ? '휴식 시간' : '집중 시간'} • {cycles}/4 사이클
        </Text>
        <Pressable
          style={styles.timerButton}
          onPress={() => setIsTimerRunning(!isTimerRunning)}
        >
          <Icon name={isTimerRunning ? 'pause' : 'play'} size={24} color="#fff" />
        </Pressable>
      </View>

      {/* 집중 모드 설정 */}
      <View style={styles.settingsSection}>
        <Text style={styles.sectionTitle}>집중 모드 설정</Text>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>알림 차단</Text>
          <Switch
            value={focusMode.notifications}
            onValueChange={(value) => 
              setFocusMode(prev => ({...prev, notifications: value}))
            }
          />
        </View>
        <View style={styles.settingItem}>
          <Text style={styles.settingLabel}>배경음</Text>
          <Switch
            value={focusMode.backgroundMusic}
            onValueChange={(value) => 
              setFocusMode(prev => ({...prev, backgroundMusic: value}))
            }
          />
        </View>
      </View>

      {/* 진행 상황 */}
      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>학습 진행 상황</Text>
        <View style={styles.progressBar}>
          <View 
            style={[
              styles.progressFill, 
              { width: `${(cycles / 4) * 100}%` }
            ]} 
          />
        </View>
        <Text style={styles.progressText}>
          오늘의 목표: 4 포모도로 중 {cycles}개 완료
        </Text>
      </View>

      <Pressable
        style={styles.endButton}
        onPress={handleEndSession}
      >
        <Text style={styles.endButtonText}>세션 종료</Text>
      </Pressable>

      {/* 세션 종료 모달 */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>학습 세션 리뷰</Text>
              <Pressable onPress={() => setModalVisible(false)}>
                <Icon name="x" size={24} color="#333" />
              </Pressable>
            </View>

            <Text style={styles.modalLabel}>학습 내용 기록</Text>
            <TextInput
              style={styles.noteInput}
              multiline
              placeholder="오늘의 학습 내용을 기록해주세요"
              value={sessionNotes}
              onChangeText={setSessionNotes}
            />

            <View style={styles.sessionSummary}>
              <Text style={styles.summaryTitle}>세션 요약</Text>
              <Text>완료한 포모도로: {cycles}</Text>
              <Text>총 학습 시간: {cycles * 25}분</Text>
            </View>

            <Pressable
              style={styles.saveButton}
              onPress={() => {
                // 여기에 저장 로직 추가
                setModalVisible(false);
                navigation.goBack();
              }}
            >
              <Text style={styles.saveButtonText}>저장하고 종료</Text>
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
  timerSection: {
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#fff',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  cycleText: {
    fontSize: 16,
    color: '#666',
    marginTop: 10,
  },
  timerButton: {
    backgroundColor: '#4A90E2',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  settingsSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  progressSection: {
    backgroundColor: '#fff',
    padding: 20,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  progressText: {
    marginTop: 10,
    color: '#666',
  },
  endButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#ff6b6b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  endButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
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
  modalLabel: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    height: 120,
    textAlignVertical: 'top',
  },
  sessionSummary: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  summaryTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StudySessionScreen; 