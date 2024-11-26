import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  TextInput,
  Modal,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const StudyFeedbackScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('self'); // self, peer, journal, plan
  const [isSelfEvalModalVisible, setSelfEvalModalVisible] = useState(false);
  const [isPeerEvalModalVisible, setPeerEvalModalVisible] = useState(false);
  const [isJournalModalVisible, setJournalModalVisible] = useState(false);

  // 자기 평가 상태
  const [selfEvaluation, setSelfEvaluation] = useState({
    understanding: 3,
    effort: 3,
    efficiency: 3,
    notes: '',
  });

  // 동료 평가 상태
  const [peerEvaluation, setPeerEvaluation] = useState({
    peerName: '',
    collaboration: 3,
    contribution: 3,
    communication: 3,
    feedback: '',
  });

  // 학습 일지 상태
  const [studyJournal, setStudyJournal] = useState({
    date: new Date().toISOString().split('T')[0],
    content: '',
    achievements: '',
    difficulties: '',
  });

  // 평가 점수 렌더링 컴포넌트
  const RatingStars = ({ rating, setRating, label }) => (
    <View style={styles.ratingContainer}>
      <Text style={styles.ratingLabel}>{label}</Text>
      <View style={styles.starsContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Pressable
            key={star}
            onPress={() => setRating(star)}
          >
            <Icon
              name={star <= rating ? 'star' : 'star'}
              size={24}
              color={star <= rating ? '#FFD700' : '#ddd'}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );

  // 자기 평가 모달
  const SelfEvaluationModal = () => (
    <Modal
      visible={isSelfEvalModalVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>자기 평가</Text>
            <Pressable onPress={() => setSelfEvalModalVisible(false)}>
              <Icon name="x" size={24} color="#333" />
            </Pressable>
          </View>
          
          <RatingStars
            rating={selfEvaluation.understanding}
            setRating={(value) => setSelfEvaluation({...selfEvaluation, understanding: value})}
            label="이해도"
          />
          <RatingStars
            rating={selfEvaluation.effort}
            setRating={(value) => setSelfEvaluation({...selfEvaluation, effort: value})}
            label="노력도"
          />
          <RatingStars
            rating={selfEvaluation.efficiency}
            setRating={(value) => setSelfEvaluation({...selfEvaluation, efficiency: value})}
            label="학습 효율성"
          />
          
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="추가 의견을 작성해주세요"
            multiline
            value={selfEvaluation.notes}
            onChangeText={(text) => setSelfEvaluation({...selfEvaluation, notes: text})}
          />
          
          <Pressable 
            style={styles.submitButton}
            onPress={() => setSelfEvalModalVisible(false)}
          >
            <Text style={styles.submitButtonText}>평가 저장</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );

  // 학습 일지 모달
  const StudyJournalModal = () => (
    <Modal
      visible={isJournalModalVisible}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>학습 일지</Text>
            <Pressable onPress={() => setJournalModalVisible(false)}>
              <Icon name="x" size={24} color="#333" />
            </Pressable>
          </View>
          
          <TextInput
            style={styles.input}
            placeholder="오늘의 학습 내용"
            value={studyJournal.content}
            onChangeText={(text) => setStudyJournal({...studyJournal, content: text})}
          />
          
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="주요 성과"
            multiline
            value={studyJournal.achievements}
            onChangeText={(text) => setStudyJournal({...studyJournal, achievements: text})}
          />
          
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="어려웠던 점"
            multiline
            value={studyJournal.difficulties}
            onChangeText={(text) => setStudyJournal({...studyJournal, difficulties: text})}
          />
          
          <Pressable 
            style={styles.submitButton}
            onPress={() => setJournalModalVisible(false)}
          >
            <Text style={styles.submitButtonText}>일지 저장</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>학습 피드백</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView style={styles.content}>
        {/* 자기 평가 섹션 */}
        <Pressable 
          style={styles.feedbackCard}
          onPress={() => setSelfEvalModalVisible(true)}
        >
          <View style={styles.cardHeader}>
            <Icon name="user" size={24} color="#4A90E2" />
            <Text style={styles.cardTitle}>자기 평가</Text>
          </View>
          <Text style={styles.cardDescription}>
            오늘의 학습을 스스로 평가해보세요
          </Text>
        </Pressable>

        {/* 학습 일지 섹션 */}
        <Pressable 
          style={styles.feedbackCard}
          onPress={() => setJournalModalVisible(true)}
        >
          <View style={styles.cardHeader}>
            <Icon name="book" size={24} color="#4A90E2" />
            <Text style={styles.cardTitle}>학습 일지</Text>
          </View>
          <Text style={styles.cardDescription}>
            오늘의 학습 내용을 기록해보세요
          </Text>
        </Pressable>

        {/* 개선 계획 섹션 */}
        <View style={styles.planSection}>
          <Text style={styles.sectionTitle}>개선 계획</Text>
          <View style={styles.planCard}>
            <Text style={styles.planTitle}>이번 주 목표</Text>
            <Text style={styles.planDescription}>
              • 알고리즘 문제 5개 풀기{'\n'}
              • React Native 기초 완성{'\n'}
              • 프로젝트 기획안 작성
            </Text>
          </View>
        </View>
      </ScrollView>

      <SelfEvaluationModal />
      <StudyJournalModal />
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  feedbackCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    gap: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardDescription: {
    color: '#666',
    fontSize: 14,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  ratingContainer: {
    marginBottom: 20,
  },
  ratingLabel: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },
  starsContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
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
  planSection: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 15,
  },
  planCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  planTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  planDescription: {
    color: '#666',
    lineHeight: 24,
  },
});

export default StudyFeedbackScreen; 