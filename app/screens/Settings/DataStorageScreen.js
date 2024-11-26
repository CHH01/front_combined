import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const DataStorageScreen = () => {
  const navigation = useNavigation();
  const [selectedStorage, setSelectedStorage] = useState('device'); // 'device' 또는 'cloud'

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>데이터 저장</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.question}>어디에 데이터를 저장할까요?</Text>
        
        <TouchableOpacity 
          style={[
            styles.option,
            selectedStorage === 'device' && styles.selectedOption
          ]}
          onPress={() => setSelectedStorage('device')}
        >
          <Text style={styles.optionText}>기기에 저장</Text>
          <View style={[
            styles.radio,
            selectedStorage === 'device' && styles.radioSelected
          ]} />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.option,
            selectedStorage === 'cloud' && styles.selectedOption
          ]}
          onPress={() => setSelectedStorage('cloud')}
        >
          <Text style={styles.optionText}>클라우드에 저장</Text>
          <View style={[
            styles.radio,
            selectedStorage === 'cloud' && styles.radioSelected
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
  question: {
    fontSize: 16,
    marginBottom: 20,
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

export default DataStorageScreen; 