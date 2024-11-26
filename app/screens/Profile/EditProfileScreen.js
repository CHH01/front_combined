import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Image,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { launchImageLibrary } from 'react-native-image-picker';

const EditProfileScreen = ({ navigation }) => {
  const [backgroundImage, setBackgroundImage] = useState(null);
  const [profileImage, setProfileImage] = useState(null);

  const pickImage = async (type) => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 1,
    };

    try {
      const result = await launchImageLibrary(options);
      
      if (!result.didCancel && result.assets) {
        if (type === 'background') {
          setBackgroundImage(result.assets[0].uri);
        } else {
          setProfileImage(result.assets[0].uri);
        }
      }
    } catch (error) {
      console.log('이미지 선택 오류:', error);
    }
  };

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="x" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>프로필 편집</Text>
        <TouchableOpacity onPress={() => {
          Alert.alert('저장되었습니다');
          navigation.goBack();
        }}>
          <Text style={styles.saveButton}>저장</Text>
        </TouchableOpacity>
      </View>

      {/* 이미지 편집 섹션 */}
      <View style={styles.editSection}>
        {/* 배경 이미지 */}
        <TouchableOpacity 
          style={styles.backgroundContainer}
          onPress={() => pickImage('background')}
        >
          <Image
            source={backgroundImage ? { uri: backgroundImage } : require('../../../assets/images/default-background.jpg')}
            style={styles.backgroundImage}
          />
          <View style={styles.editIcon}>
            <Icon name="edit-2" size={20} color="#fff" />
          </View>
        </TouchableOpacity>

        {/* 프로필 이미지 */}
        <TouchableOpacity 
          style={styles.profileImageContainer}
          onPress={() => pickImage('profile')}
        >
          <Image
            source={profileImage ? { uri: profileImage } : require('../../../assets/images/default-profile.jpg')}
            style={styles.profileImage}
          />
          <View style={styles.editIcon}>
            <Icon name="edit-2" size={20} color="#fff" />
          </View>
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
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  saveButton: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: 'bold',
  },
  editSection: {
    alignItems: 'center',
  },
  backgroundContainer: {
    width: '100%',
    height: 200,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
  },
  profileImageContainer: {
    marginTop: -50,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 75,
    overflow: 'hidden',
    position: 'relative',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  editIcon: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditProfileScreen; 