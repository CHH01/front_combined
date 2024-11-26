import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const PrivacySettingScreen = () => {
  const navigation = useNavigation();
  const [isPublic, setIsPublic] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="x" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>계정 공개 범위</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.saveButton}>완료</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>
          계정을 공개 또는 비공개로 설정할 수 있습니다. 공개 설정한 경우 모든 사람의 정보를 볼 수 있습니다.{'\n\n'}
          비공개 상태인 경우 외부인이 승인한 사람만 정보를 볼 수 있습니다.
        </Text>

        <TouchableOpacity 
          style={styles.optionItem}
          onPress={() => setIsPublic(true)}
        >
          <Text style={styles.optionText}>공개</Text>
          <View style={[styles.radio, isPublic && styles.radioSelected]} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.optionItem}
          onPress={() => setIsPublic(false)}
        >
          <Text style={styles.optionText}>비공개</Text>
          <View style={[styles.radio, !isPublic && styles.radioSelected]} />
        </TouchableOpacity>
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
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {
    color: '#007AFF',
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 30,
  },
  optionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  optionText: {
    fontSize: 16,
  },
  radio: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  radioSelected: {
    borderColor: '#007AFF',
    backgroundColor: '#007AFF',
  },
});

export default PrivacySettingScreen; 