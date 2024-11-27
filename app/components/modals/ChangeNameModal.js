import React from 'react';
import {
  Modal,
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';

const ChangeNameModal = ({ 
  visible, 
  onClose, 
  onSubmit, 
  value, 
  onChange, 
  title = '이름 변경',
  placeholder = '새로운 이름을 입력하세요'
}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.modalOverlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>{title}</Text>
              <TextInput
                style={styles.modalInput}
                value={value}
                onChangeText={onChange}
                placeholder={placeholder}
                autoFocus={true}
                maxLength={30}
              />
              <View style={styles.modalButtons}>
                <Pressable 
                  style={[styles.modalButton, styles.cancelButton]}
                  onPress={onClose}
                >
                  <Text style={styles.cancelButtonText}>취소</Text>
                </Pressable>
                <Pressable 
                  style={[styles.modalButton, styles.confirmButton]}
                  onPress={onSubmit}
                >
                  <Text style={styles.confirmButtonText}>변경</Text>
                </Pressable>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
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
  modalTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalInput: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#f1f1f1',
  },
  confirmButton: {
    backgroundColor: '#4A90E2',
  },
  cancelButtonText: {
    color: '#333',
    textAlign: 'center',
    fontSize: 16,
  },
  confirmButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ChangeNameModal; 