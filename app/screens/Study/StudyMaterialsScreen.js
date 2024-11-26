import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  TextInput,
  Modal,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const StudyMaterialsScreen = ({ navigation }) => {
  // 상태 관리
  const [materials, setMaterials] = useState([
    {
      id: 1,
      title: '리액트 기초 강의노트',
      description: '리액트 핵심 개념 정리',
      tags: ['프로그래밍', '웹개발'],
      version: '1.0',
      shared: false,
      uploadDate: new Date(),
    },
    {
      id: 2,
      title: '알고리즘 문제풀이',
      description: '코딩테스트 준비',
      tags: ['알고리즘', '코딩테스트'],
      version: '1.0',
      shared: true,
      uploadDate: new Date(),
    },
  ]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState([]);
  const [isUploadModalVisible, setUploadModalVisible] = useState(false);
  const [newMaterial, setNewMaterial] = useState({
    title: '',
    description: '',
    tags: [],
    version: '1.0',
    shared: false,
  });

  // 사전 정의된 태그들
  const availableTags = [
    '프로그래밍', '디자인', '마케팅', '비즈니스',
    '개인 프로젝트', '팀 프로젝트', '참고 자료', '과제'
  ];

  // 자료 추가
  const handleAddMaterial = () => {
    const newItem = {
      id: Date.now(),
      ...newMaterial,
      uploadDate: new Date(),
    };
    setMaterials([newItem, ...materials]);
    setUploadModalVisible(false);
    setNewMaterial({
      title: '',
      description: '',
      tags: [],
      version: '1.0',
      shared: false,
    });
  };

  // 자료 검색 및 필터링
  const filteredMaterials = materials.filter(material => {
    const matchesSearch = material.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         material.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.every(tag => material.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

  // 자료 삭제
  const handleDelete = (id) => {
    setMaterials(materials.filter(item => item.id !== id));
  };

  // 자료 공유
  const handleShare = (item) => {
    // 공유 기능 구현
    console.log('공유:', item.title);
  };

  // 버전 업데이트
  const handleVersionUpdate = (item) => {
    // 버전 업데이트 기능 구현
    console.log('버전 업데이트:', item.title);
  };

  // 자료 항목 렌더링
  const renderMaterialItem = ({ item }) => (
    <Pressable 
      style={styles.materialItem}
      onPress={() => navigation.navigate('StudyMaterialDetail', { materialId: item.id })}
    >
      <View style={styles.materialInfo}>
        <Text style={styles.materialTitle}>{item.title}</Text>
        <Text style={styles.materialDescription}>{item.description}</Text>
        <View style={styles.tagContainer}>
          {item.tags.map(tag => (
            <View key={tag} style={styles.tag}>
              <Text style={styles.tagText}>{tag}</Text>
            </View>
          ))}
        </View>
      </View>
      <View style={styles.materialActions}>
        <Pressable onPress={() => handleShare(item)}>
          <Icon name="share-2" size={20} color="#666" />
        </Pressable>
        <Pressable onPress={() => handleVersionUpdate(item)}>
          <Icon name="git-branch" size={20} color="#666" />
        </Pressable>
        <Pressable onPress={() => handleDelete(item.id)}>
          <Icon name="trash-2" size={20} color="#666" />
        </Pressable>
      </View>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>학습 자료</Text>
        <Pressable onPress={() => setUploadModalVisible(true)}>
          <Icon name="plus" size={24} color="#333" />
        </Pressable>
      </View>

      {/* 검색 섹션 */}
      <View style={styles.searchSection}>
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="자료 검색..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      {/* 선택된 태그 표시 */}
      {selectedTags.length > 0 && (
        <ScrollView 
          horizontal 
          style={styles.selectedTagsContainer}
          showsHorizontalScrollIndicator={false}
        >
          {selectedTags.map(tag => (
            <Pressable 
              key={tag}
              style={styles.selectedTag}
              onPress={() => setSelectedTags(prev => prev.filter(t => t !== tag))}
            >
              <Text style={styles.selectedTagText}>{tag}</Text>
              <Icon name="x" size={16} color="#fff" />
            </Pressable>
          ))}
        </ScrollView>
      )}

      {/* 자료 목록 */}
      <FlatList
        data={filteredMaterials}
        renderItem={renderMaterialItem}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.materialsList}
      />

      {/* 업로드 모달 */}
      <Modal
        visible={isUploadModalVisible}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>새 자료 추가</Text>
              <Pressable onPress={() => setUploadModalVisible(false)}>
                <Icon name="x" size={24} color="#333" />
              </Pressable>
            </View>

            <Text style={styles.label}>제목</Text>
            <TextInput
              style={styles.input}
              value={newMaterial.title}
              onChangeText={(text) => setNewMaterial({...newMaterial, title: text})}
              placeholder="자료 제목을 입력하세요"
            />

            <Text style={styles.label}>설명</Text>
            <TextInput
              style={[styles.input, styles.textArea]}
              value={newMaterial.description}
              onChangeText={(text) => setNewMaterial({...newMaterial, description: text})}
              placeholder="자료에 대한 설명을 입력하세요"
              multiline
            />

            <Text style={styles.label}>태그</Text>
            <ScrollView 
              horizontal 
              style={styles.tagsScrollView}
              showsHorizontalScrollIndicator={false}
            >
              {availableTags.map(tag => (
                <Pressable
                  key={tag}
                  style={[
                    styles.tagChoice,
                    newMaterial.tags.includes(tag) && styles.tagChoiceSelected
                  ]}
                  onPress={() => {
                    setNewMaterial(prev => ({
                      ...prev,
                      tags: prev.tags.includes(tag)
                        ? prev.tags.filter(t => t !== tag)
                        : [...prev.tags, tag]
                    }));
                  }}
                >
                  <Text
                    style={[
                      styles.tagChoiceText,
                      newMaterial.tags.includes(tag) && styles.tagChoiceTextSelected
                    ]}
                  >
                    {tag}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>

            <Pressable
              style={styles.uploadButton}
              onPress={handleAddMaterial}
            >
              <Text style={styles.uploadButtonText}>추가하기</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  searchSection: {
    padding: 15,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 8,
  },
  selectedTagsContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  selectedTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#4A90E2',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginRight: 8,
  },
  selectedTagText: {
    color: '#fff',
    marginRight: 6,
  },
  materialsList: {
    padding: 15,
  },
  materialItem: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  materialInfo: {
    flex: 1,
  },
  materialTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  materialDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 8,
  },
  tag: {
    backgroundColor: '#e9ecef',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 8,
    marginBottom: 4,
  },
  tagText: {
    fontSize: 12,
    color: '#495057',
  },
  materialActions: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 15,
    marginTop: 10,
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
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 5,
  },
  tagsScrollView: {
    marginBottom: 15,
  },
  tagChoice: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
  },
  tagChoiceSelected: {
    backgroundColor: '#4A90E2',
  },
  tagChoiceText: {
    color: '#666',
  },
  tagChoiceTextSelected: {
    color: '#fff',
  },
  uploadButton: {
    backgroundColor: '#4A90E2',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default StudyMaterialsScreen; 