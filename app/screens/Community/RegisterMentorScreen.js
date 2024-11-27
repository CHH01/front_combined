import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const RegisterMentorScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    name: '',
    field: '',
    career: '',
    introduction: '',
    education: '',
    skills: '',
    availableTime: '',
  });

  const handleSubmit = () => {
    // 필수 입력 필드 검증
    if (!formData.name || !formData.field || !formData.career || !formData.introduction) {
      Alert.alert('알림', '필수 항목을 모두 입력해주세요.');
      return;
    }

    // TODO: API 연동
    Alert.alert(
      '멘토 등록',
      '멘토 등록이 완료되었습니다. 관리자 승인 후 활동이 가능합니다.',
      [
        {
          text: '확인',
          onPress: () => navigation.goBack()
        }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>멘토 등록</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>기본 정보</Text>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>이름 *</Text>
            <TextInput
              style={styles.input}
              placeholder="실명을 입력해주세요"
              value={formData.name}
              onChangeText={(text) => setFormData({...formData, name: text})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>전문 분야 *</Text>
            <TextInput
              style={styles.input}
              placeholder="예: 웹 개발, 모바일 앱 개발"
              value={formData.field}
              onChangeText={(text) => setFormData({...formData, field: text})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>경력 사항 *</Text>
            <TextInput
              style={styles.input}
              placeholder="관련 경력을 입력해주세요"
              value={formData.career}
              onChangeText={(text) => setFormData({...formData, career: text})}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>상세 정보</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>자기 소개 *</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              placeholder="멘티들에게 보여질 자기소개를 작성해주세요"
              multiline
              numberOfLines={4}
              value={formData.introduction}
              onChangeText={(text) => setFormData({...formData, introduction: text})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>학력</Text>
            <TextInput
              style={styles.input}
              placeholder="최종 학력을 입력해주세요"
              value={formData.education}
              onChangeText={(text) => setFormData({...formData, education: text})}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>보유 기술</Text>
            <TextInput
              style={styles.input}
              placeholder="보유하신 기술을 입력해주세요"
              value={formData.skills}
              onChangeText={(text) => setFormData({...formData, skills: text})}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>멘토링 정보</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>가능 시간</Text>
            <TextInput
              style={styles.input}
              placeholder="멘토링 가능 시간을 입력해주세요"
              value={formData.availableTime}
              onChangeText={(text) => setFormData({...formData, availableTime: text})}
            />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitButtonText}>멘토 등록 신청</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 20,
  },
  inputGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 14,
    backgroundColor: '#fff',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  buttonContainer: {
    padding: 15,
    marginBottom: 30,
  },
  submitButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default RegisterMentorScreen; 