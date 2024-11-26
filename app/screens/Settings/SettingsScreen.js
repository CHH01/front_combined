import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  Switch,
  Button 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const SettingsScreen = () => {
  const navigation = useNavigation();
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const SettingItem = ({ title, hasArrow = true, rightElement, isLast = false, onPress }) => {
    const isSpecialTitle = title === "계정" || title === "개인정보 및 데이터" || title === "접근성" || title === "알림";

    return (
      <TouchableOpacity 
        style={
          styles.settingItem
        }
        onPress={onPress}
        disabled={!onPress}
      >
        <Text style={[styles.settingTitle, isSpecialTitle && styles.specialTitle]}>{title}</Text>
        {rightElement ? (
          rightElement
        ) : (
          hasArrow && <Icon name="chevron-right" size={20} color="#666" />
        )}
      </TouchableOpacity>
    );
  };

  const SettingSection = ({ title, children }) => (
    <View style={styles.settingSection}>
      {title && <Text style={styles.sectionTitle}>{title}</Text>}
      <View style={styles.sectionContent}>
        {children}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>설정</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView>
        <SettingSection>
          <SettingItem title="알림" onPress={() => navigation.navigate('Notification')} />
        </SettingSection>
        <SettingSection>
          <SettingItem title="계정" hasArrow={false} />
          <SettingItem 
            title="정보 수정" 
            onPress={() => navigation.navigate('EditInfo')} 
          />
          <SettingItem 
            title="연동된 소셜 계정" 
            onPress={() => navigation.navigate('SocialAccounts')} 
          />
        </SettingSection>

        <SettingSection>
        <SettingItem title="개인정보 및 데이터" hasArrow={false} isLast={true} />
          <SettingItem title="프로필 공개 범위" rightElement={<Text style={styles.rightText}>공개</Text>} onPress={() => navigation.navigate('PrivacySetting')} />
          <SettingItem 
            title="데이터 백업 및 복원" 
            onPress={() => navigation.navigate('Backup')} 
          />
          <SettingItem title="데이터 저장 위치 선택" onPress={() => navigation.navigate('DataStorage')} />
          <SettingItem 
            title="설정 백업 및 복원" 
            onPress={() => navigation.navigate('SettingsBackup')} 
            isLast={true} 
          />
        </SettingSection>

        <SettingSection>
          <SettingItem title="접근성" hasArrow={false} />
          <SettingItem title="화면 모드" rightElement={<Text style={styles.rightText}>라이트</Text>} onPress={() => navigation.navigate('DisplayMode')} />
          <SettingItem 
            title="언어" 
            rightElement={<Text style={styles.rightText}>한국어</Text>} 
            onPress={() => navigation.navigate('Language')}
          />
          <SettingItem 
            title="고대비 모드" 
            rightElement={
              <Switch 
                value={isDarkMode}
                onValueChange={setIsDarkMode}
                trackColor={{ false: "#767577", true: "#4A90E2" }}
              />
            }
            hasArrow={false}
          />
          <SettingItem 
            title="글자 크기" 
            rightElement={<Text style={styles.rightText}>중간</Text>} 
            onPress={() => navigation.navigate('FontSize')} 
            isLast={true} 
          />
        </SettingSection>

        <View style={styles.bottomButtons}>
          <TouchableOpacity style={styles.logoutButton}>
            <Text style={[styles.logoutText, { color: '#000' }]}>로그아웃</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteAccountButton}>
            <Text style={styles.deleteAccountText}>계정 삭제</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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
  settingSection: {
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  sectionTitle: {
    fontSize: 14,
    color: '#666',
    marginLeft: 20,
    marginBottom: 5,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  settingTitle: {
    fontSize: 16,
    color: '#333',
  },
  rightText: {
    fontSize: 16,
    color: '#666',
  },
  logoutButton: {
    padding: 10,
    alignItems: 'center',
  },
  logoutText: {
    color: '#ff3b30',
    fontSize: 16,
  },
  bottomButtons: {
    margin: 20,
    gap: 10,
  },
  deleteAccountButton: {
    padding: 10,
    alignItems: 'center',
  },
  deleteAccountText: {
    color: '#ff3b30',
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default SettingsScreen; 