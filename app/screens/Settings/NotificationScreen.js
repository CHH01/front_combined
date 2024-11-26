import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

const NotificationScreen = () => {
  const navigation = useNavigation();

  const handleEditPress = (type, title) => {
    if (type === 'time') {
      navigation.navigate('TimeSetting', { title });
    } else {
      navigation.navigate('NotificationDetail', { title });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>알림</Text>
        <View style={{ width: 24 }} />
      </View>
      
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>학습</Text>
        </View>
        
        <View style={styles.item}>
          <View>
            <Text style={styles.itemTitle}>목표 달성</Text>
            <Text style={styles.itemSubtitle}>푸시 및 이메일</Text>
          </View>
          <TouchableOpacity onPress={() => handleEditPress('notification', '목표 달성')}>
            <Text style={styles.editText}>수정</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.item}>
          <View>
            <Text style={styles.itemTitle}>퀴즈</Text>
            <Text style={styles.itemSubtitle}>푸시 및 이메일</Text>
          </View>
          <TouchableOpacity onPress={() => handleEditPress('notification', '퀴즈')}>
            <Text style={styles.editText}>수정</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>계정</Text>
        </View>
        
        <View style={styles.item}>
          <View>
            <Text style={styles.itemTitle}>보안</Text>
            <Text style={styles.itemSubtitle}>푸시 및 이메일</Text>
          </View>
          <TouchableOpacity onPress={() => handleEditPress('notification', '보안')}>
            <Text style={styles.editText}>수정</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>시간</Text>
        </View>
        
        <View style={styles.item}>
          <View>
            <Text style={styles.itemTitle}>평일</Text>
            <Text style={styles.itemSubtitle}>9:00 AM ~ 7:00 PM</Text>
          </View>
          <TouchableOpacity onPress={() => handleEditPress('time', '평일')}>
            <Text style={styles.editText}>수정</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.item}>
          <View>
            <Text style={styles.itemTitle}>주말</Text>
            <Text style={styles.itemSubtitle}>10:00 AM ~ 4:00 PM</Text>
          </View>
          <TouchableOpacity onPress={() => handleEditPress('time', '주말')}>
            <Text style={styles.editText}>수정</Text>
          </TouchableOpacity>
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
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  section: {
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  itemSubtitle: {
    fontSize: 14,
    color: '#666',
  },
  editText: {
    fontSize: 14,
    color: '#007AFF',
  }
});

export default NotificationScreen; 