import React, { useState } from 'react';
import { View, StyleSheet, Animated, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import SegmentedControl from '../../components/SegmentedControl';
import ChatListContent from './ChatListContent';
import FriendsListContent from '../Friends/FriendsListContent';

const ChatAndFriendsScreen = ({ navigation }) => {
  const [selectedTab, setSelectedTab] = useState('chats');
  const [slideAnimation] = useState(new Animated.Value(0));

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
    Animated.spring(slideAnimation, {
      toValue: tab === 'chats' ? 0 : 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SegmentedControl 
          selectedTab={selectedTab}
          onTabChange={handleTabChange}
          slideAnimation={slideAnimation}
        />
        {selectedTab === 'chats' ? (
          <Pressable onPress={() => navigation.navigate('CreateGroupChat')}>
            <Icon name="edit" size={24} color="#333" />
          </Pressable>
        ) : (
          <Pressable onPress={() => navigation.navigate('AddFriend')}>
            <Icon name="user-plus" size={24} color="#333" />
          </Pressable>
        )}
      </View>

      {selectedTab === 'chats' ? (
        <ChatListContent navigation={navigation} />
      ) : (
        <FriendsListContent navigation={navigation} />
      )}
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
});

export default ChatAndFriendsScreen; 