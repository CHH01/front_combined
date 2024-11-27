import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const InviteMembersScreen = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedUsers, setSelectedUsers] = useState([]);
  
  // 더미 데이터 - 실제로는 API에서 검색 결과를 받아와야 함
  const [searchResults, setSearchResults] = useState([
    { id: 1, name: '홍길동', email: 'hong@example.com', department: '개발팀' },
    { id: 2, name: '김민수', email: 'kim@example.com', department: '디자인팀' },
    { id: 3, name: '이지은', email: 'lee@example.com', department: '기획팀' },
    { id: 4, name: '박서준', email: 'park@example.com', department: '개발팀' },
    { id: 5, name: '최유나', email: 'choi@example.com', department: '마케팅팀' },
  ]);

  const handleSearch = (text) => {
    setSearchQuery(text);
    // TODO: 실제 검색 API 호출
  };

  const toggleUserSelection = (user) => {
    if (selectedUsers.find(u => u.id === user.id)) {
      setSelectedUsers(selectedUsers.filter(u => u.id !== user.id));
    } else {
      setSelectedUsers([...selectedUsers, user]);
    }
  };

  const handleInvite = () => {
    if (selectedUsers.length === 0) {
      Alert.alert('알림', '초대할 사용자를 선택해주세요.');
      return;
    }

    // TODO: 실제 초대 API 호출
    Alert.alert(
      '초대 완료',
      `${selectedUsers.length}명의 사용자를 초대했습니다.`,
      [
        {
          text: '확인',
          onPress: () => navigation.goBack(),
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="x" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>멤버 초대</Text>
        <TouchableOpacity 
          onPress={handleInvite}
          style={[
            styles.inviteButton,
            selectedUsers.length === 0 && styles.inviteButtonDisabled
          ]}
        >
          <Text style={[
            styles.inviteButtonText,
            selectedUsers.length === 0 && styles.inviteButtonTextDisabled
          ]}>
            초대하기
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#666" />
        <TextInput
          style={styles.searchInput}
          placeholder="이름, 이메일 또는 부서로 검색"
          value={searchQuery}
          onChangeText={handleSearch}
          autoFocus={true}
        />
      </View>

      {selectedUsers.length > 0 && (
        <View style={styles.selectedContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {selectedUsers.map(user => (
              <View key={user.id} style={styles.selectedUser}>
                <Text style={styles.selectedUserText}>{user.name}</Text>
                <TouchableOpacity
                  onPress={() => toggleUserSelection(user)}
                  style={styles.removeButton}
                >
                  <Icon name="x" size={16} color="#666" />
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
        </View>
      )}

      <ScrollView style={styles.resultContainer}>
        {searchResults.map(user => (
          <Pressable
            key={user.id}
            style={styles.userItem}
            onPress={() => toggleUserSelection(user)}
          >
            <View style={styles.userInfo}>
              <Text style={styles.userName}>{user.name}</Text>
              <Text style={styles.userDetail}>
                {user.department} · {user.email}
              </Text>
            </View>
            <View style={[
              styles.checkbox,
              selectedUsers.find(u => u.id === user.id) && styles.checkboxSelected
            ]}>
              {selectedUsers.find(u => u.id === user.id) && (
                <Icon name="check" size={16} color="#fff" />
              )}
            </View>
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
  inviteButton: {
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: '#4A90E2',
  },
  inviteButtonDisabled: {
    backgroundColor: '#f0f0f0',
  },
  inviteButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  inviteButtonTextDisabled: {
    color: '#999',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  selectedContainer: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  selectedUser: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    paddingLeft: 12,
    paddingRight: 8,
    paddingVertical: 6,
    marginRight: 8,
  },
  selectedUserText: {
    marginRight: 4,
    fontSize: 14,
  },
  removeButton: {
    padding: 2,
  },
  resultContainer: {
    flex: 1,
  },
  userItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  userDetail: {
    fontSize: 14,
    color: '#666',
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#4A90E2',
    borderColor: '#4A90E2',
  },
});

export default InviteMembersScreen; 