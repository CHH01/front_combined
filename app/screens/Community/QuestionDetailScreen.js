import React from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const QuestionDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>질문 상세</Text>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.questionContainer}>
          <Text style={styles.title}>React Native 네비게이션 질문</Text>
          <Text style={styles.authorInfo}>김개발 • 10분 전</Text>
          <Text style={styles.questionContent}>
            React Navigation v6에서 스택 네비게이터와 탭 네비게이터를 함께 사용할 때 
            네비게이션 구조를 어떻게 설계하는 것이 좋을까요? 특히 탭 간 이동시 
            스택을 유지하는 방법에 대해 궁금합니다.
          </Text>
        </View>

        <View style={styles.answersSection}>
          <Text style={styles.answersTitle}>답변 3개</Text>
          
          <View style={styles.answerItem}>
            <Text style={styles.answerAuthor}>이코딩</Text>
            <Text style={styles.answerTime}>5분 전</Text>
            <Text style={styles.answerContent}>
              보통 최상위에 스택 네비게이터를 두고, 그 안에 탭 네비게이터를 배치하는 
              구조를 많이 사용합니다. 각 탭 내부에서도 개별적인 스택 네비게이터를 
              사용할 수 있습니다.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="답변을 입력하세요"
        />
        <TouchableOpacity style={styles.sendButton}>
          <Ionicons name="send" size={24} color="#4A90E2" />
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
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
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
  questionContainer: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  authorInfo: {
    color: '#666',
    marginBottom: 12,
  },
  questionContent: {
    fontSize: 16,
    lineHeight: 24,
  },
  answersSection: {
    padding: 16,
  },
  answersTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  answerItem: {
    marginBottom: 20,
  },
  answerAuthor: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  answerTime: {
    color: '#666',
    marginBottom: 8,
  },
  answerContent: {
    fontSize: 15,
    lineHeight: 22,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
  },
  sendButton: {
    padding: 8,
  },
});

export default QuestionDetailScreen; 