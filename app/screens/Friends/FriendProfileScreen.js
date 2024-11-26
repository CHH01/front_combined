import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const FriendProfileScreen = ({ route, navigation }) => {
  const { friend } = route.params;
  const [isBlocked, setIsBlocked] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  // 공통 그룹 더미 데이터
  const commonGroups = ['학교', '알고리즘 스터디'];

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Pressable onPress={() => {/* 설정 메뉴 */}}>
          <Icon name="more-vertical" size={24} color="#333" />
        </Pressable>
      </View>

      {/* 프로필 정보 */}
      <View style={styles.profileSection}>
        <View style={styles.profileImage}>
          <Icon name="user" size={40} color="#666" />
        </View>
        <Text style={styles.name}>{friend.name}</Text>
        <Text style={styles.statusMessage}>{friend.statusMessage}</Text>
      </View>

      {/* 공통 그룹 */}
      <View style={styles.commonGroupsSection}>
        <Text style={styles.sectionTitle}>공통 그룹</Text>
        <View style={styles.groupsList}>
          {commonGroups.map((group, index) => (
            <View key={index} style={styles.groupChip}>
              <Text style={styles.groupText}>{group}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 액션 버튼 */}
      <View style={styles.actionButtons}>
        <Pressable style={styles.chatButton}>
          <Icon name="message-circle" size={24} color="#fff" />
          <Text style={styles.chatButtonText}>채팅하기</Text>
        </Pressable>
      </View>

      {/* 설정 옵션 */}
      <View style={styles.settingsSection}>
        <Pressable style={styles.settingItem}>
          <MaterialIcon name={isBlocked ? "block" : "block"} size={24} color={isBlocked ? "#FF5252" : "#666"} />
          <Text style={[styles.settingText, isBlocked && styles.activeSettingText]}>
            {isBlocked ? '차단 해제' : '차단하기'}
          </Text>
        </Pressable>
        <Pressable style={styles.settingItem}>
          <MaterialIcon name={isHidden ? "visibility-off" : "visibility-off"} size={24} color={isHidden ? "#FF5252" : "#666"} />
          <Text style={[styles.settingText, isHidden && styles.activeSettingText]}>
            {isHidden ? '숨김 해제' : '숨기기'}
          </Text>
        </Pressable>
        <Pressable style={styles.settingItem}>
          <MaterialIcon name="person-remove" size={24} color="#666" />
          <Text style={styles.settingText}>친구 삭제</Text>
        </Pressable>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileSection: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  statusMessage: {
    fontSize: 16,
    color: '#666',
  },
  commonGroupsSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  groupsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  groupChip: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  groupText: {
    fontSize: 14,
    color: '#666',
  },
  actionButtons: {
    padding: 16,
  },
  chatButton: {
    backgroundColor: '#4A90E2',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    borderRadius: 8,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  settingsSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  settingText: {
    fontSize: 16,
    color: '#666',
    marginLeft: 12,
  },
  activeSettingText: {
    color: '#FF5252',
  },
});

export default FriendProfileScreen; 