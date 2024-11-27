import React, { useState, useCallback } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Alert,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ChatRoomMembersScreen = ({ navigation }) => {
  const [members, setMembers] = useState([
    { id: 1, name: '김철수', role: 'admin'},
    { id: 2, name: '이영희', role: 'member'},
    { id: 3, name: '박지민', role: 'member'},
    { id: 4, name: '최수진', role: 'member'},
  ]);

  const handleInvitePress = useCallback(() => {
    navigation.navigate('InviteMembers');
  }, [navigation]);

  const handleMemberOptions = useCallback((member) => {
    if (member.role === 'admin') return;

    console.log('Would show alert with options for:', member.name);
    Alert.alert(
      '참여자 관리',
      `${member.name}님에 대한 작업을 선택하세요`,
      [
        {
          text: '관리자 지정',
          onPress: () => handleSetAdmin(member.id),
        },
        {
          text: '내보내기',
          style: 'destructive',
          onPress: () => handleKickMember(member.id),
        },
        {
          text: '취소',
          style: 'cancel',
        },
      ]
    );
  }, []);

  const handleSetAdmin = useCallback((memberId) => {
    setMembers(prevMembers => 
      prevMembers.map(m => m.id === memberId ? { ...m, role: 'admin' } : m)
    );
  }, []);

  const handleKickMember = useCallback((memberId) => {
    Alert.alert(
      '참여자 내보내기',
      '정말로 이 참여자를 내보내시겠습니까?',
      [
        {
          text: '취소',
          style: 'cancel',
        },
        {
          text: '내보내기',
          style: 'destructive',
          onPress: () => {
            setMembers(prevMembers => prevMembers.filter(m => m.id !== memberId));
          },
        },
      ]
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>참여자 관리</Text>
        <TouchableOpacity onPress={handleInvitePress}>
          <Icon name="user-plus" size={24} color="#4A90E2" />
        </TouchableOpacity>
      </View>

      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>전체 {members.length}명</Text>
      </View>

      <ScrollView>
        {members.map(member => (
          <Pressable
            key={member.id}
            style={styles.memberItem}
            onPress={() => handleMemberOptions(member)}
          >
            <View style={styles.memberInfo}>
              <View style={styles.memberNameContainer}>
                <Text style={styles.memberName}>{member.name}</Text>
                    {member.role === 'admin' && (
                    <View style={styles.adminBadge}>
                        <Text style={styles.adminText}>관리자</Text>
                    </View>
                    )}
              </View>
            </View>
            {member.role !== 'admin' && (
              <Icon name="more-vertical" size={20} color="#666" />
            )}
          </Pressable>
        ))}
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
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#f8f8f8',
  },
  statsText: {
    color: '#666',
    fontSize: 14,
  },
  memberItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    cursor: 'pointer',
    activeOpacity: 0.7,
  },
  memberInfo: {
    flex: 1,
  },
  memberNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  memberName: {
    fontSize: 16,
    fontWeight: '500',
    marginRight: 8,
  },
  adminBadge: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  adminText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default ChatRoomMembersScreen; 