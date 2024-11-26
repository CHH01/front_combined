import React, { useState } from 'react';
import { View, ScrollView, TextInput, Pressable, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ChatListContent = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
  // 더미 채팅방 데이터
  const [chatRooms] = useState([
    {
      id: 1,
      name: '알고리즘 스터디',
      lastMessage: '다음 주 알고리즘 스터디 일정입니다.',
      timestamp: '오후 2:30',
      unread: 2,
      isPinned: true,
    },
    {
      id: 2,
      name: '프론트엔드 스터디',
      lastMessage: 'React Native 좋네요!',
      timestamp: '오전 11:20',
      unread: 0,
      isPinned: false,
    },
    // ... 더 많은 채팅방 데이터
  ]);

  const filteredChatRooms = chatRooms.filter(room =>
    room.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* 검색 바 */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="채팅방 검색..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* 채팅방 목록 */}
      <ScrollView style={styles.chatList}>
        {/* 고정된 채팅방 */}
        {filteredChatRooms.filter(room => room.isPinned).map(room => (
          <Pressable 
            key={room.id}
            style={[styles.chatRoom, styles.pinnedRoom]}
            onPress={() => navigation.navigate('ChatRoom', { 
              roomId: room.id,
              roomName: room.name 
            })}
          >
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{room.name}</Text>
              <Text style={styles.lastMessage}>{room.lastMessage}</Text>
            </View>
            <View style={styles.chatMeta}>
              <Text style={styles.timestamp}>{room.timestamp}</Text>
              {room.unread > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCount}>{room.unread}</Text>
                </View>
              )}
            </View>
          </Pressable>
        ))}

        {/* 일반 채팅방 */}
        {filteredChatRooms.filter(room => !room.isPinned).map(room => (
          <Pressable 
            key={room.id}
            style={styles.chatRoom}
            onPress={() => navigation.navigate('ChatRoom', { 
              roomId: room.id,
              roomName: room.name 
            })}
          >
            <View style={styles.chatInfo}>
              <Text style={styles.chatName}>{room.name}</Text>
              <Text style={styles.lastMessage}>{room.lastMessage}</Text>
            </View>
            <View style={styles.chatMeta}>
              <Text style={styles.timestamp}>{room.timestamp}</Text>
              {room.unread > 0 && (
                <View style={styles.unreadBadge}>
                  <Text style={styles.unreadCount}>{room.unread}</Text>
                </View>
              )}
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchSection: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  chatList: {
    flex: 1,
  },
  chatRoom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  pinnedRoom: {
    backgroundColor: '#f8f8f8',
  },
  chatInfo: {
    flex: 1,
  },
  chatName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  lastMessage: {
    color: '#666',
    fontSize: 14,
  },
  chatMeta: {
    alignItems: 'flex-end',
  },
  timestamp: {
    color: '#666',
    fontSize: 12,
    marginBottom: 4,
  },
  unreadBadge: {
    backgroundColor: '#4A90E2',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  unreadCount: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default ChatListContent; 