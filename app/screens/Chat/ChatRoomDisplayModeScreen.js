import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const ChatRoomDisplayModeScreen = () => {
  const navigation = useNavigation();
  const [selectedMode, setSelectedMode] = useState('light'); // 'light' 또는 'dark'

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>화면 모드</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <TouchableOpacity 
          style={[
            styles.option,
            selectedMode === 'light' && styles.selectedOption
          ]}
          onPress={() => setSelectedMode('light')}
        >
          <Text style={styles.optionText}>라이트 모드</Text>
          <View style={[
            styles.radio,
            selectedMode === 'light' && styles.radioSelected
          ]} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.option,
            selectedMode === 'dark' && styles.selectedOption
          ]}
          onPress={() => setSelectedMode('dark')}
        >
          <Text style={styles.optionText}>다크 모드</Text>
          <View style={[
            styles.radio,
            selectedMode === 'dark' && styles.radioSelected
          ]} />
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
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  selectedOption: {
    backgroundColor: '#f8f9fa',
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

export default ChatRoomDisplayModeScreen; 