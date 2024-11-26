import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  FlatList,
  Image 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const NotificationsScreen = ({ navigation }) => {
  // 임시 알림 데이터
  const notifications = [
    {
      id: '1',
      type: 'study',
      title: '스터디 초대',
      message: 'React 스터디에 초대되었습니다.',
      time: '방금 전',
      read: false,
    },
    {
      id: '2',
      type: 'achievement',
      title: '목표 달성',
      message: '오늘의 학습 목표를 달성했습니다!',
      time: '2시간 전',
      read: true,
    },
    {
      id: '3',
      type: 'reminder',
      title: '학습 알림',
      message: '오늘의 학습을 시작할 시간입니다.',
      time: '5시간 전',
      read: true,
    },
  ];

  const renderNotificationItem = ({ item }) => {
    const getIcon = (type) => {
      switch(type) {
        case 'study':
          return 'users';
        case 'achievement':
          return 'award';
        case 'reminder':
          return 'clock';
        default:
          return 'bell';
      }
    };

    return (
      <TouchableOpacity 
        style={[
          styles.notificationItem,
          !item.read && styles.unreadItem
        ]}
      >
        <View style={styles.iconContainer}>
          <Icon name={getIcon(item.type)} size={24} color="#4A90E2" />
        </View>
        <View style={styles.notificationContent}>
          <Text style={styles.notificationTitle}>{item.title}</Text>
          <Text style={styles.notificationMessage}>{item.message}</Text>
          <Text style={styles.notificationTime}>{item.time}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>알림</Text>
        <TouchableOpacity>
          <Icon name="check-square" size={24} color="#333" />
        </TouchableOpacity>
      </View>

      {/* 알림 목록 */}
      {notifications.length > 0 ? (
        <FlatList
          data={notifications}
          renderItem={renderNotificationItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.notificationsList}
        />
      ) : (
        <View style={styles.emptyContainer}>
          <Icon name="bell-off" size={50} color="#ccc" />
          <Text style={styles.emptyText}>새로운 알림이 없습니다</Text>
        </View>
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationsList: {
    padding: 15,
  },
  notificationItem: {
    flexDirection: 'row',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    backgroundColor: '#fff',
  },
  unreadItem: {
    backgroundColor: '#f8f9fa',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  notificationMessage: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  notificationTime: {
    fontSize: 12,
    color: '#999',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    marginTop: 10,
    fontSize: 16,
    color: '#666',
  },
});

export default NotificationsScreen; 