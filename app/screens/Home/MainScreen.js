import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { CircularProgress } from 'react-native-circular-progress';
import { useNavigation } from '@react-navigation/native';

const MainScreen = () => {
  const navigation = useNavigation();

  const studyData = {
    labels: ['10', '11', '12', '13', '14', '15', '16'],
    datasets: [{
      data: [25, 45, 50, 35, 42, 55]
    }]
  };

  const GridButton = ({ title, icon, onPress }) => (
    <TouchableOpacity style={styles.gridButton} onPress={onPress}>
      <Icon name={icon} size={24} color="#333" />
      <Text style={styles.gridButtonText}>{title}</Text>
    </TouchableOpacity>
  );

  const TechIcon = ({ image, text }) => (
    <TouchableOpacity style={styles.techItem}>
      <View style={styles.techIconBox}>
        <Icon name={image} size={30} color="#333" />
      </View>
      <Text style={styles.techText}>{text}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.profileIcon}
          onPress={() => navigation.navigate('Profile')}
        >
          <Icon name="user" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Studymate</Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
            <Icon name="bell" size={24} color="#333" style={styles.icon} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Icon name="settings" size={24} color="#333" />
          </TouchableOpacity>
        </View>
      </View>

      {/* 프로그레스 섹션 */}
      <View style={styles.progressSection}>
        <Text style={styles.welcomeText}>OO님, 들어온 것을 환영합니다!</Text>
        <Text style={styles.studyTimeText}>오늘 4시간 30분 학습했어요</Text>
        <View style={styles.circularProgressContainer}>
          <CircularProgress
            size={200}
            width={15}
            fill={75}
            tintColor="#4A90E2"
            backgroundColor="#eee"
          >
            {() => (
              <Text style={styles.progressText}>75%</Text>
            )}
          </CircularProgress>
        </View>
        <TouchableOpacity style={styles.streakButton}>
          <Text style={styles.streakButtonText}>7일째 연속 공부중!</Text>
        </TouchableOpacity>
      </View>

      {/* 기능 버튼 그리드 */}
      <View style={styles.buttonGrid}>
        <GridButton title="개인 학습 시작" icon="play" onPress={() => navigation.navigate('학습')} />
        <GridButton title="그룹 학습 참여" icon="users" onPress={() => navigation.navigate('그룹')} />
        <GridButton title="Example" icon="map-pin" />
      </View>

      {/* 추천 콘텐츠 */}
      <View style={styles.techStack}>
        <Text style={styles.techTitle}>추천드리는 콘텐츠</Text>
        <View style={styles.techContainer}>
          <TechIcon 
            image="react" 
            text="React로 하는 UI개발과 프론트엔드" 
          />
          <TechIcon 
            image="database" 
            text="Node.js + MongoDB로 함께하면좋아" 
          />
        </View>
      </View>

      {/* 학습 그래프 */}
      <View style={styles.graphContainer}>
        <Text style={styles.graphTitle}>최근 7일 공부량</Text>
        <Text>그래프 영역</Text>
      </View>

      {/* 하단 메시지 */}
      <Text style={styles.bottomMessage}>
        큰 목표를 이루고 싶으면 하려할 것이지 마라. - 미상
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
  },
  progressSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  welcomeText: {
    fontSize: 16,
    marginBottom: 5,
  },
  studyTimeText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 20,
  },
  circularProgressContainer: {
    marginBottom: 20,
  },
  progressText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  streakButton: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
  },
  streakButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  buttonGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  gridButton: {
    width: '30%',
    height: 100,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gridButtonText: {
    marginTop: 10,
    fontSize: 12,
    textAlign: 'center',
  },
  techStack: {
    marginBottom: 30,
  },
  techTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  techContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  techItem: {
    width: '48%',
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    padding: 15,
  },
  techIconBox: {
    width: 50,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  techText: {
    fontSize: 12,
  },
  graphContainer: {
    marginBottom: 20,
  },
  graphTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  graph: {
    borderRadius: 16,
  },
  bottomMessage: {
    textAlign: 'center',
    color: '#666',
    fontSize: 14,
    fontStyle: 'italic',
  },
});

export default MainScreen; 