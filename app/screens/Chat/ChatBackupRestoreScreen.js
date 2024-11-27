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

const ChatBackupRestoreScreen = () => {
  const navigation = useNavigation();
  const [lastBackupDate, setLastBackupDate] = useState('2023-06-15 14:30');

  const handleBackup = () => {
    // 여기에 실제 백업 로직을 구현합니다.
    Alert.alert('백업', '채팅 내용이 성공적으로 백업되었습니다.');
    setLastBackupDate(new Date().toLocaleString());
  };

  const handleRestore = () => {
    // 여기에 실제 복원 로직을 구현합니다.
    Alert.alert(
      '복원',
      '정말로 채팅 내용을 복원하시겠습니까? 현재의 채팅 내용이 백업 시점의 내용으로 대체됩니다.',
      [
        {
          text: '취소',
          style: 'cancel'
        },
        {
          text: '복원',
          onPress: () => Alert.alert('복원 완료', '채팅 내용이 성공적으로 복원되었습니다.')
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>채팅 백업 및 복원</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.infoBox}>
          <Text style={styles.infoText}>마지막 백업: {lastBackupDate}</Text>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleBackup}>
          <Icon name="upload-cloud" size={24} color="#fff" />
          <Text style={styles.buttonText}>지금 백업하기</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleRestore}>
          <Icon name="download-cloud" size={24} color="#fff" />
          <Text style={styles.buttonText}>백업파일에서 복원하기</Text>
        </TouchableOpacity>

        <View style={styles.noteBox}>
          <Text style={styles.noteText}>
            주의: 복원 시 현재의 채팅 내용이 백업 시점의 내용으로 대체됩니다.
            중요한 정보가 있다면 먼저 백업을 진행해주세요.
          </Text>
        </View>
      </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  infoBox: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  noteBox: {
    backgroundColor: '#FFF9C4',
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
  },
  noteText: {
    fontSize: 14,
    color: '#333',
  },
});

export default ChatBackupRestoreScreen; 