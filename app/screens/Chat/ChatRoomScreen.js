import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Pressable,
  Modal,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const ChatRoomScreen = ({ navigation }) => {
  const [message, setMessage] = useState('');
  const [showAttachments, setShowAttachments] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [showMessageOptions, setShowMessageOptions] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  
  // 더미 메시지 데이터
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: '김철수',
      content: '다음 주 알고리즘 스터디 일정입니다.',
      time: '14:30',
      isImportant: false,
      isTranslated: false,
    },
    {
      id: 2,
      sender: '이영희',
      content: '링크: https://github.com/algorithm-study',
      time: '14:31',
      isImportant: true,
      isTranslated: false,
      preview: {
        title: 'Algorithm Study Repository',
        description: 'A collection of algorithm problems and solutions',
        image: null,
      },
    },
  ]);

  const attachmentSlide = useRef(new Animated.Value(-200)).current;

  const showAttachmentMenu = () => {
    setShowAttachments(true);
    Animated.timing(attachmentSlide, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const hideAttachmentMenu = () => {
    Animated.timing(attachmentSlide, {
      toValue: -200,
      duration: 300,
      useNativeDriver: true,
    }).start(() => setShowAttachments(false));
  };

  const handleMessageLongPress = (message) => {
    setSelectedMessage(message);
    setShowMessageOptions(true);
  };

  const handleMessageAction = (action) => {
    switch (action) {
      case 'reply':
        // 답장 로직
        break;
      case 'forward':
        // 전달 로직
        break;
      case 'delete':
        // 삭제 로직
        setMessages(messages.filter(m => m.id !== selectedMessage.id));
        break;
      case 'translate':
        // 번역 로직
        break;
      case 'important':
        // 중요 표시 로직
        setMessages(messages.map(m => 
          m.id === selectedMessage.id ? {...m, isImportant: !m.isImportant} : m
        ));
        break;
    }
    setShowMessageOptions(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>알고리즘 스터디</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity 
            style={styles.headerIcon} 
            onPress={() => setSearchVisible(true)}
          >
            <Icon name="search" size={24} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('ChatRoomSettings')}>
            <Icon name="settings" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 검색 바 */}
      {searchVisible && (
        <View style={styles.searchBar}>
          <Icon name="search" size={20} color="#666" />
          <TextInput
            style={styles.searchInput}
            placeholder="메시지 검색..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          <Pressable onPress={() => setSearchVisible(false)}>
            <Icon name="x" size={20} color="#666" />
          </Pressable>
        </View>
      )}

      {/* 메시지 영역 */}
      <ScrollView style={styles.messageArea}>
        {messages.map(msg => (
          <Pressable 
            key={msg.id}
            style={[styles.messageContainer, msg.isImportant && styles.importantMessage]}
            onLongPress={() => handleMessageLongPress(msg)}
          >
            <Text style={styles.sender}>{msg.sender}</Text>
            <Text style={styles.message}>{msg.content}</Text>
            {msg.preview && (
              <View style={styles.linkPreview}>
                <Text style={styles.previewTitle}>{msg.preview.title}</Text>
                <Text style={styles.previewDescription}>{msg.preview.description}</Text>
              </View>
            )}
            <Text style={styles.timestamp}>{msg.time}</Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* 메시지 입력 영역 */}
      <View style={styles.inputContainer}>
        <Pressable onPress={showAttachmentMenu}>
          <Icon name="plus" size={24} color="#333" />
        </Pressable>
        <TextInput
          style={styles.input}
          placeholder="메시지를 입력하세요..."
          value={message}
          onChangeText={setMessage}
          multiline
        />
        <Pressable onPress={() => {/* 메시지 전송 로직 */}}>
          <Icon name="send" size={24} color="#4A90E2" />
        </Pressable>
      </View>

      {/* 첨부 메뉴 */}
      {showAttachments && (
        <Animated.View 
          style={[
            styles.attachmentMenu,
            {
              transform: [{ translateY: attachmentSlide }]
            }
          ]}
        >
          <TouchableOpacity style={styles.attachmentOption}>
            <Icon name="file" size={24} color="#333" />
            <Text>파일</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.attachmentOption}>
            <Icon name="image" size={24} color="#333" />
            <Text>이미지</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.attachmentOption}>
            <Icon name="bar-chart-2" size={24} color="#333" />
            <Text>투표</Text>
          </TouchableOpacity>
        </Animated.View>
      )}

      {/* 메시지 옵션 모달 */}
      <Modal
        visible={showMessageOptions}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowMessageOptions(false)}
      >
        <TouchableWithoutFeedback onPress={() => setShowMessageOptions(false)}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContent}>
              <TouchableOpacity 
                style={styles.modalOption}
                onPress={() => handleMessageAction('reply')}
              >
                <Icon name="corner-up-left" size={20} color="#333" />
                <Text style={styles.modalOptionText}>답장</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalOption}
                onPress={() => handleMessageAction('forward')}
              >
                <Icon name="share" size={20} color="#333" />
                <Text style={styles.modalOptionText}>전달</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalOption}
                onPress={() => handleMessageAction('translate')}
              >
                <Icon name="globe" size={20} color="#333" />
                <Text style={styles.modalOptionText}>번역</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={styles.modalOption}
                onPress={() => handleMessageAction('important')}
              >
                <Icon name="star" size={20} color="#333" />
                <Text style={styles.modalOptionText}>중요 표시</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.modalOption, styles.deleteOption]}
                onPress={() => handleMessageAction('delete')}
              >
                <Icon name="trash-2" size={20} color="#FF3B30" />
                <Text style={[styles.modalOptionText, styles.deleteText]}>삭제</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  backButton: {
    width: 80,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 80,
  },
  headerIcon: {
    marginRight: 15,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10,
  },
  messageArea: {
    flex: 1,
    padding: 15,
  },
  messageContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  importantMessage: {
    borderLeftWidth: 3,
    borderLeftColor: '#FFD700',
  },
  sender: {
    fontWeight: '600',
    marginBottom: 5,
  },
  message: {
    fontSize: 16,
    lineHeight: 20,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
    alignSelf: 'flex-end',
  },
  linkPreview: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
  },
  previewTitle: {
    fontWeight: '600',
    marginBottom: 5,
  },
  previewDescription: {
    color: '#666',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
    maxHeight: 100,
  },
  attachmentMenu: {
    position: 'absolute',
    bottom: 70,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  attachmentOption: {
    alignItems: 'center',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalOptionText: {
    fontSize: 16,
    marginLeft: 15,
  },
  deleteOption: {
    borderBottomWidth: 0,
  },
  deleteText: {
    color: '#FF3B30',
  },
});

export default ChatRoomScreen; 