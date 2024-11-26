import React from 'react';
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const StudyMaterialDetailScreen = ({ navigation, route }) => {
  const material = {
    id: 1,
    title: '리액트 기초 강의노트',
    description: '리액트 핵심 개념 정리',
    content: `# 리액트 기초 개념

1. 컴포넌트
- 재사용 가능한 UI 조각
- 함수형 컴포넌트와 클래스형 컴포넌트

2. Props
- 컴포넌트에 전달되는 속성
- 읽기 전용 데이터

3. State
- 컴포넌트 내부에서 관리되는 데이터
- useState 훅 사용법

4. 생명주기
- useEffect 훅
- 의존성 배열 활용

5. 이벤트 처리
- onClick, onChange 등
- 이벤트 핸들러 작성 방법`,
    tags: ['프로그래밍', '웹개발'],
    version: '1.0',
    lastModified: '2024-03-15',
    author: '김개발',
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>학습 자료 상세</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{material.title}</Text>
          <Text style={styles.description}>{material.description}</Text>
          <View style={styles.metaInfo}>
            <Text style={styles.metaText}>버전 {material.version}</Text>
            <Text style={styles.metaText}>•</Text>
            <Text style={styles.metaText}>최종 수정: {material.lastModified}</Text>
          </View>
          <View style={styles.tagContainer}>
            {material.tags.map(tag => (
              <View key={tag} style={styles.tag}>
                <Text style={styles.tagText}>{tag}</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.contentSection}>
          <Text style={styles.contentText}>{material.content}</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomBar}>
        <Pressable style={styles.actionButton} onPress={() => {}}>
          <Icon name="edit-2" size={20} color="#4A90E2" />
          <Text style={styles.actionButtonText}>수정</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={() => {}}>
          <Icon name="share-2" size={20} color="#4A90E2" />
          <Text style={styles.actionButtonText}>공유</Text>
        </Pressable>
        <Pressable style={styles.actionButton} onPress={() => {}}>
          <Icon name="download" size={20} color="#4A90E2" />
          <Text style={styles.actionButtonText}>다운로드</Text>
        </Pressable>
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
    flex: 1,
    textAlign: 'center',
  },
  backButton: {
    padding: 8,
  },
  placeholder: {
    width: 40,  // 뒤로가기 버튼과 동일한 너비
  },
  content: {
    flex: 1,
  },
  titleSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 12,
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  metaText: {
    color: '#666',
    fontSize: 14,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 16,
  },
  tagText: {
    color: '#666',
    fontSize: 14,
  },
  contentSection: {
    padding: 16,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  actionButtonText: {
    color: '#4A90E2',
    fontSize: 16,
  },
});

export default StudyMaterialDetailScreen; 