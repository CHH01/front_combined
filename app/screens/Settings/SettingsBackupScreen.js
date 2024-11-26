import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity,
  Switch
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const SettingsBackupScreen = () => {
  const navigation = useNavigation();
  const [autoBackup, setAutoBackup] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>설정 백업 및 복원</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.settingItem}>
          <Text style={styles.settingTitle}>자동 백업</Text>
          <Switch
            value={autoBackup}
            onValueChange={setAutoBackup}
            trackColor={{ false: "#767577", true: "#4A90E2" }}
            thumbColor={autoBackup ? "#fff" : "#f4f3f4"}
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={[styles.button, styles.backupButton]}
            onPress={() => {
              // 백업 로직 구현
            }}
          >
            <Icon name="upload" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>설정 백업</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.button, styles.restoreButton]}
            onPress={() => {
              // 복원 로직 구현
            }}
          >
            <Icon name="download" size={20} color="#fff" style={styles.buttonIcon} />
            <Text style={styles.buttonText}>설정 복원</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.infoContainer}>
          <Text style={styles.infoTitle}>백업 정보</Text>
          <Text style={styles.infoText}>마지막 백업: 2024.02.28 14:30</Text>
          <Text style={styles.infoText}>백업 위치: 클라우드</Text>
        </View>
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
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
  },
  buttonContainer: {
    marginTop: 30,
    gap: 15,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
  },
  backupButton: {
    backgroundColor: '#4A90E2',
  },
  restoreButton: {
    backgroundColor: '#666',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  infoContainer: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
});

export default SettingsBackupScreen; 