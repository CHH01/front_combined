import React, { useState } from 'react';
import { View, ScrollView, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const FriendsListContent = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // 더미 친구 데이터
  const [friends] = useState([
    {
      id: 1,
      name: '김철수',
      status: '온라인',
      statusMessage: '알고리즘 공부중...',
      group: '학교',
    },
    {
      id: 2,
      name: '이영희',
      status: '오프라인',
      statusMessage: '리액트 네이티브 너무 재밌다',
      group: '직장',
    },
    {
      id: 3,
      name: '박지민',
      status: '자리비움',
      statusMessage: '점심시간',
      group: '학교',
    },
  ]);

  const [groups] = useState(['전체', '학교', '직장', '가족']);
  const [selectedGroup, setSelectedGroup] = useState('전체');

  const filteredFriends = friends.filter(friend => {
    const matchesSearch = friend.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGroup = selectedGroup === '전체' || friend.group === selectedGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <View style={styles.container}>
      {/* 검색 바 */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="친구 검색..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* 그룹 필터 */}
      <ScrollView 
        horizontal 
        style={styles.groupFilter}
        contentContainerStyle={styles.groupFilterContainer}
        showsHorizontalScrollIndicator={false}
      >
        {groups.map((group, index) => (
          <Pressable 
            key={index}
            style={[
              styles.groupChip,
              selectedGroup === group && styles.selectedGroupChip
            ]}
            onPress={() => setSelectedGroup(group)}
          >
            <Text style={[
              styles.groupText,
              selectedGroup === group && styles.selectedGroupText
            ]}>
              {group}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* 내 프로필 */}
      <View style={styles.myProfile}>
        <View style={styles.profileImage}>
          <Icon name="user" size={24} color="#666" />
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.myName}>내 이름</Text>
          <Text style={styles.statusMessage}>상태메시지를 입력해주세요</Text>
        </View>
      </View>

      {/* 친구 목록 */}
      <ScrollView style={styles.friendsList}>
        <Text style={styles.friendsCount}>친구 {filteredFriends.length}</Text>
        {filteredFriends.map(friend => (
          <Pressable 
            key={friend.id}
            style={styles.friendItem}
            onPress={() => navigation.navigate('FriendProfile', { friend })}
          >
            <View style={styles.friendInfo}>
              <View style={styles.profileImage}>
                <Icon name="user" size={24} color="#666" />
              </View>
              <View style={styles.friendDetails}>
                <Text style={styles.friendName}>{friend.name}</Text>
                <Text style={styles.statusMessage}>{friend.statusMessage}</Text>
              </View>
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
  searchSection: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 6,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  groupFilter: {
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  groupFilterContainer: {
    paddingHorizontal: 8,
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  groupChip: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedGroupChip: {
    backgroundColor: '#4A90E2',
  },
  groupText: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
  selectedGroupText: {
    color: '#fff',
  },
  myProfile: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileInfo: {
    marginLeft: 12,
    justifyContent: 'center',
  },
  myName: {
    fontSize: 16,
    fontWeight: '600',
  },
  friendsList: {
    flex: 1,
  },
  friendsCount: {
    padding: 12,
    color: '#666',
    fontSize: 13,
  },
  friendItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  friendInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  friendDetails: {
    marginLeft: 12,
    flex: 1,
  },
  friendName: {
    fontSize: 15,
    fontWeight: '500',
  },
  statusMessage: {
    color: '#666',
    marginTop: 2,
    fontSize: 13,
  },
});

export default FriendsListContent; 