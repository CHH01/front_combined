import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Switch,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ChatRoomSettingsScreen = ({ navigation, route }) => {
  const [notification, setNotification] = useState(true);
  const [encryption, setEncryption] = useState(true);
  const [theme, setTheme] = useState('light');

  const handleLeaveChat = () => {
    Alert.alert(
      '채팅방 나가기',
      '정말로 이 채팅방을 나가시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '나가기',
          style: 'destructive',
          onPress: () => {
            // 채팅방 나가기 로직
            navigation.navigate('ChatList');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>채팅방 설정</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        {/* 채팅방 정보 섹션 */}
        <View style={styles.section}>
          <Pressable style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Icon name="edit-2" size={20} color="#333" />
              <Text style={styles.settingText}>채팅방 이름 변경</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#666" />
          </Pressable>

          <Pressable style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Icon name="users" size={20} color="#333" />
              <Text style={styles.settingText}>참여자 관리</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#666" />
          </Pressable>
        </View>

        {/* 알림 및 테마 섹션 */}
        <View style={styles.section}>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Icon name="bell" size={20} color="#333" />
              <Text style={styles.settingText}>알림 설정</Text>
            </View>
            <Switch
              value={notification}
              onValueChange={setNotification}
              trackColor={{ false: '#767577', true: '#4A90E2' }}
            />
          </View>

          <Pressable style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Icon name="layout" size={20} color="#333" />
              <Text style={styles.settingText}>테마 설정</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#666" />
          </Pressable>
        </View>

        {/* 보안 및 백업 섹션 */}
        <View style={styles.section}>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Icon name="lock" size={20} color="#333" />
              <Text style={styles.settingText}>암호화 설정</Text>
            </View>
            <Switch
              value={encryption}
              onValueChange={setEncryption}
              trackColor={{ false: '#767577', true: '#4A90E2' }}
            />
          </View>

          <Pressable style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <Icon name="save" size={20} color="#333" />
              <Text style={styles.settingText}>채팅 백업 및 복원</Text>
            </View>
            <Icon name="chevron-right" size={20} color="#666" />
          </Pressable>
        </View>

        {/* 채팅방 나가기 */}
        <Pressable 
          style={[styles.settingItem, styles.leaveChat]}
          onPress={handleLeaveChat}
        >
          <View style={styles.settingLeft}>
            <Icon name="log-out" size={20} color="#FF3B30" />
            <Text style={[styles.settingText, styles.leaveText]}>채팅방 나가기</Text>
          </View>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  section: {
    backgroundColor: '#fff',
    marginTop: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingText: {
    fontSize: 16,
    marginLeft: 15,
  },
  leaveChat: {
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  leaveText: {
    color: '#FF3B30',
  },
});

export default ChatRoomSettingsScreen; 