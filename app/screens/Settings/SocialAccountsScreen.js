import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const SocialAccountsScreen = () => {
  const navigation = useNavigation();

  const socialAccounts = [
    {
      id: 1,
      platform: 'Google',
      email: 'abc123@gmail.com',
      icon: require('../../../assets/images/google-icon.png'),
    },
    {
      id: 2,
      platform: '네이버',
      email: 'abc123@naver.com',
      icon: require('../../../assets/images/naver-icon.png'),
    },
    {
      id: 3,
      platform: '카카오',
      email: 'abc123@kakao.com',
      icon: require('../../../assets/images/kakao-icon.png'),
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>연동된 소셜 계정</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>소셜 계정</Text>
        {socialAccounts.map((account) => (
          <View key={account.id} style={styles.accountItem}>
            <View style={styles.accountInfo}>
              <Image source={account.icon} style={styles.platformIcon} />
              <View>
                <Text style={styles.email}>{account.email}</Text>
                <Text style={styles.platform}>{account.platform}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.disconnectButton}>
              <Text style={styles.disconnectText}>해제</Text>
            </TouchableOpacity>
          </View>
        ))}
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
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  platformIcon: {
    width: 24,
    height: 24,
    marginRight: 12,
  },
  email: {
    fontSize: 16,
    marginBottom: 4,
  },
  platform: {
    fontSize: 14,
    color: '#666',
  },
  disconnectButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 4,
    backgroundColor: '#f0f0f0',
  },
  disconnectText: {
    fontSize: 14,
    color: '#666',
  },
});

export default SocialAccountsScreen; 