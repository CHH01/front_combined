import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Image,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const StudyCommunityScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('groups'); // groups, qna, materials, mentoring, chat

  // 더미 데이터
  const studyGroups = [
    {
      id: 1,
      name: '알고리즘 스터디',
      members: 8,
      category: '프로그래밍',
      description: '매주 알고리즘 문제를 함께 풀어봅니다',
    },
    {
      id: 2,
      name: '웹개발 스터디',
      members: 5,
      category: '웹개발',
      description: 'React와 Node.js 스터디',
    },
  ];

  const qnaList = [
    {
      id: 1,
      title: 'React Native 네비게이션 질문',
      author: '김개발',
      time: '10분 전',
      replies: 3,
    },
    {
      id: 2,
      title: '알고리즘 효율성 관련 질문',
      author: '이코딩',
      time: '1시간 전',
      replies: 5,
    },
  ];

  const mentors = [
    {
      id: 1,
      name: '박멘토',
      field: '웹 개발',
      experience: '5년',
      rating: 4.8,
    },
    {
      id: 2,
      name: '김멘토',
      field: '모바일 개발',
      experience: '3년',
      rating: 4.5,
    },
  ];

  // 탭 컨텐츠 렌더링
  const renderTabContent = () => {
    switch (activeTab) {
      case 'groups':
        return (
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>스터디 그룹</Text>
              <Pressable style={styles.createButton}>
                <Text style={styles.createButtonText}>그룹 만들기</Text>
              </Pressable>
            </View>
            {studyGroups.map(group => (
              <Pressable key={group.id} style={styles.groupCard}>
                <View style={styles.groupInfo}>
                  <Text style={styles.groupName}>{group.name}</Text>
                  <Text style={styles.groupCategory}>{group.category}</Text>
                  <Text style={styles.groupDescription}>{group.description}</Text>
                  <Text style={styles.groupMembers}>{group.members}명 참여중</Text>
                </View>
                <Icon name="chevron-right" size={20} color="#666" />
              </Pressable>
            ))}
          </View>
        );

      case 'qna':
        return (
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>Q&A</Text>
              <Pressable 
                style={styles.createButton}
                onPress={() => navigation.navigate('CreateQuestion')}
              >
                <Text style={styles.createButtonText}>질문하기</Text>
              </Pressable>
            </View>
            {qnaList.map(question => (
              <Pressable 
                key={question.id} 
                style={styles.qnaCard}
                onPress={() => navigation.navigate('QuestionDetail')}
              >
                <Text style={styles.qnaTitle}>{question.title}</Text>
                <View style={styles.qnaInfo}>
                  <Text style={styles.qnaAuthor}>{question.author}</Text>
                  <Text style={styles.qnaTime}>{question.time}</Text>
                  <Text style={styles.qnaReplies}>답변 {question.replies}</Text>
                </View>
              </Pressable>
            ))}
          </View>
        );

      case 'mentoring':
        return (
          <View>
            <View style={styles.sectionHeader}>
              <Text style={styles.sectionTitle}>멘토링</Text>
              <Pressable style={styles.createButton}>
                <Text style={styles.createButtonText}>멘토 등록</Text>
              </Pressable>
            </View>
            {mentors.map(mentor => (
              <Pressable key={mentor.id} style={styles.mentorCard}>
                <View style={styles.mentorInfo}>
                  <Text style={styles.mentorName}>{mentor.name}</Text>
                  <Text style={styles.mentorField}>{mentor.field}</Text>
                  <Text style={styles.mentorExperience}>경력 {mentor.experience}</Text>
                  <View style={styles.ratingContainer}>
                    <Icon name="star" size={16} color="#FFD700" />
                    <Text style={styles.rating}>{mentor.rating}</Text>
                  </View>
                </View>
                <Pressable style={styles.contactButton}>
                  <Text style={styles.contactButtonText}>연락하기</Text>
                </Pressable>
              </Pressable>
            ))}
          </View>
        );

      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>학습 커뮤니티</Text>
        <Pressable onPress={() => {}}>
          <Icon name="bell" size={24} color="#333" />
        </Pressable>
      </View>

      {/* 탭 메뉴 */}
      <View style={styles.tabContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <Pressable
            style={[styles.tab, activeTab === 'groups' && styles.activeTab]}
            onPress={() => setActiveTab('groups')}
          >
            <Text style={[styles.tabText, activeTab === 'groups' && styles.activeTabText]}>
              스터디 그룹
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'qna' && styles.activeTab]}
            onPress={() => setActiveTab('qna')}
          >
            <Text style={[styles.tabText, activeTab === 'qna' && styles.activeTabText]}>
              Q&A
            </Text>
          </Pressable>
          <Pressable
            style={[styles.tab, activeTab === 'mentoring' && styles.activeTab]}
            onPress={() => setActiveTab('mentoring')}
          >
            <Text style={[styles.tabText, activeTab === 'mentoring' && styles.activeTabText]}>
              멘토링
            </Text>
          </Pressable>
        </ScrollView>
      </View>

      <ScrollView style={styles.content}>
        {renderTabContent()}
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
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  tabContainer: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4A90E2',
  },
  tabText: {
    color: '#666',
  },
  activeTabText: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  createButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  createButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  groupCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  groupCategory: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  groupDescription: {
    color: '#666',
    fontSize: 14,
    marginBottom: 4,
  },
  groupMembers: {
    color: '#4A90E2',
    fontSize: 14,
  },
  qnaCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
  },
  qnaTitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 8,
  },
  qnaInfo: {
    flexDirection: 'row',
    gap: 10,
  },
  qnaAuthor: {
    color: '#666',
  },
  qnaTime: {
    color: '#999',
  },
  qnaReplies: {
    color: '#4A90E2',
  },
  mentorCard: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mentorInfo: {
    flex: 1,
  },
  mentorName: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  mentorField: {
    color: '#666',
    marginBottom: 2,
  },
  mentorExperience: {
    color: '#666',
    marginBottom: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rating: {
    color: '#666',
  },
  contactButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 20,
  },
  contactButtonText: {
    color: '#fff',
  },
});

export default StudyCommunityScreen; 