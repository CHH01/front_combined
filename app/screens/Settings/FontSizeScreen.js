import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

const FontSizeScreen = () => {
  const navigation = useNavigation();
  const [fontSize, setFontSize] = useState(2); // 1: 작게, 2: 중간, 3: 크게

  const getFontSizeText = (value) => {
    if (value <= 1.5) return '작게';
    if (value <= 2.5) return '중간';
    return '크게';
  };

  const getActualFontSize = (value) => {
    if (value <= 1.5) return 14;
    if (value <= 2.5) return 18;
    return 22;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>글자 크기</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <View style={styles.sliderContainer}>
          <Text style={styles.sizeLabel}>가</Text>
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={3}
            step={1}
            value={fontSize}
            onValueChange={setFontSize}
            minimumTrackTintColor="#007AFF"
            maximumTrackTintColor="#DEDEDE"
          />
          <Text style={styles.sizeLabelLarge}>가</Text>
        </View>

        <Text style={[styles.currentSize, { fontSize: getActualFontSize(fontSize) }]}>
          {getFontSizeText(fontSize)}
        </Text>

        <Text style={styles.description}>
          설정한 글자 크기는 앱 전체에 적용됩니다.
        </Text>
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
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 30,
  },
  slider: {
    flex: 1,
    marginHorizontal: 20,
  },
  sizeLabel: {
    fontSize: 16,
  },
  sizeLabelLarge: {
    fontSize: 24,
  },
  currentSize: {
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
});

export default FontSizeScreen; 