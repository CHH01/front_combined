import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity,
  Dimensions 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>프로필</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 프로필 섹션 */}
      <View style={styles.profileSection}>
        {/* 배경 이미지 */}
        <Image
          source={require('../../../assets/images/default-background.jpg')}
          style={styles.backgroundImage}
        />
        
        {/* 프로필 이미지 */}
        <View style={styles.profileImageContainer}>
          <Image
            source={require('../../../assets/images/default-profile.jpg')}
            style={styles.profileImage}
          />
        </View>

        {/* 이름 */}
        <Text style={styles.userName}>사용자 이름</Text>

        {/* 편집 버튼 */}
        <TouchableOpacity 
          style={styles.editButton}
          onPress={() => navigation.navigate('EditProfile')}
        >
          <Text style={styles.editButtonText}>프로필 편집</Text>
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
  profileSection: {
    alignItems: 'center',
  },
  backgroundImage: {
    width: Dimensions.get('window').width,
    height: 200,
  },
  profileImageContainer: {
    marginTop: -50,
    borderWidth: 3,
    borderColor: '#fff',
    borderRadius: 75,
    overflow: 'hidden',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 15,
  },
  editButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    marginTop: 15,
  },
  editButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileScreen; 