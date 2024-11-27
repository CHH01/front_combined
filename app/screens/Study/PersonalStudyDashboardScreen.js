import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Pressable 
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LineChart } from 'react-native-chart-kit';
import { useNavigation } from '@react-navigation/native';

const PersonalStudyDashboardScreen = () => {
  const navigation = useNavigation();

  // 차트 데이터
  const chartData = {
    labels: ['월', '화', '수', '목', '금', '토', '일'],
    datasets: [{
      data: [3, 4, 2, 5, 3, 4, 2],
    }]
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.openDrawer()}>
          <Icon name="menu" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>학습 대시보드</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 오늘의 학습 요약 */}
      <View style={styles.summaryCard}>
        <Text style={styles.cardTitle}>오늘의 학습 요약</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>완료한 강의</Text>
            <Text style={styles.statValue}>3개</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>학습 시간</Text>
            <Text style={styles.statValue}>239분</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>퀴즈 점수</Text>
            <Text style={styles.statValue}>85점</Text>
          </View>
        </View>
      </View>

      {/* 레벨 & 연속학습 카드 */}
      <View style={styles.progressCard}>
        <Pressable 
          style={styles.levelSection} 
          onPress={() => navigation.navigate('LevelDetail')}
        >
          <Text style={styles.levelTitle}>현재 레벨</Text>
          <View style={styles.levelValueContainer}>
            <Text style={styles.levelValue}>5</Text>
            <Text style={styles.levelUnit}>레벨</Text>
          </View>
          <View style={styles.progressBar}>
            {/* 프로그레스 바 구현 */}
          </View>
          <Text style={styles.levelSubtext}>다음 레벨까지 230XP</Text>
        </Pressable>
        <View style={styles.streakSection}>
          <Text style={styles.streakTitle}>연속 학습</Text>
          <View style={styles.streakValueContainer}>
            <Text style={styles.streakValue}>20</Text>
            <Text style={styles.streakUnit}>일</Text>
          </View>
          <Text style={styles.streakSubtext}>최고 기록 32일</Text>
        </View>
      </View>

      {/* 일정 및 목표 섹션 */}
      <Pressable 
        style={styles.scheduleCard}
        onPress={() => navigation.navigate('Schedule')}
      >
        <View style={styles.scheduleHeader}>
          <Text style={[styles.sectionTitle, { marginBottom: 0 }]}>학습 일정</Text>
          <Icon name="chevron-right" size={20} color="#666" />
        </View>
        <View style={styles.timeSection}>
          <View style={styles.timeItem}>
            <View>
              <Text style={styles.timeLabel}>수학</Text>
              <Text style={styles.timeValue}>9:00 AM ~ 10:00 AM</Text>
            </View>
          </View>

          <View style={styles.timeItem}>
            <View>
              <Text style={styles.timeLabel}>영어</Text>
              <Text style={styles.timeValue}>12:00 PM ~ 1:00 PM</Text>
            </View>
          </View>
        </View>
        <View style={styles.goalsContainer}>
          <View style={styles.goalHeader}>
            <Text style={styles.goalTitle}>주간 목표</Text>
          </View>
          <View style={styles.goalsList}>
            <View style={styles.goalItem}>
              <View style={styles.goalCheckbox}>
                <Icon name="check" size={16} color="#4CAF50" />
              </View>
              <Text style={styles.goalText}>알고리즘 문제 5개 풀기</Text>
            </View>
            <View style={styles.goalItem}>
              <View style={[styles.goalCheckbox, styles.goalIncomplete]} />
              <Text style={styles.goalText}>React 강의 3개 완료하기</Text>
            </View>
            <View style={styles.goalItem}>
              <View style={[styles.goalCheckbox, styles.goalIncomplete]} />
              <Text style={styles.goalText}>프로젝트 1단계 완성하기</Text>
            </View>
          </View>
        </View>
      </Pressable>

      {/* 주간 학습 통계 */}
      <Pressable 
        style={styles.chartContainer}
        onPress={() => navigation.navigate('StudyAnalytics')}
      >
        <View style={styles.chartSection}>
          <Text style={styles.sectionTitle}>주간 학습 통계</Text>
          <LineChart
            data={chartData}
            width={350}
            height={180}
            chartConfig={{
              backgroundColor: '#fff',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
              style: {
                borderRadius: 16
              }
            }}
            bezier
            style={styles.chart}
          />
        </View>
        <View style={[styles.growthSection, { height: 180 }]}>
          <Text style={styles.growthText}>학습 성장률</Text>
          <Text style={styles.growthValue}>+12%</Text>
          <Text style={styles.growthSubtext}>지난 30일 대비 +20%</Text>
        </View>
      </Pressable>

      {/* 추가 메뉴 항목들 */}
      <View style={styles.menuSection}>
        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('StudyGoals')}>
          <Text style={styles.menuTitle}>학습 목표</Text>
          <Text style={styles.menuSubtitle}>이번 주 목표 달성도 33%</Text>
          <Icon name="chevron-right" size={20} color="#666" />
        </Pressable>

        <Pressable style={styles.menuItem} onPress={() => navigation.navigate('Achievement')}>
          <Text style={styles.menuTitle}>성취 뱃지</Text>
          <Text style={styles.menuSubtitle}>20개의 뱃지를 획득했어요</Text>
          <Icon name="chevron-right" size={20} color="#666" />
        </Pressable>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  summaryCard: {
    backgroundColor: '#fff',
    padding: 20,
    margin: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  growthRate: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 15,
  },
  growthText: {
    fontSize: 14,
    color: '#666',
  },
  growthValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginVertical: 5,
  },
  growthSubtext: {
    fontSize: 12,
    color: '#999',
  },
  timeSection: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  timeItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  timeLabel: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
  },
  timeValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  chartSection: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  menuSection: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 12,
    marginBottom: 30,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '500',
    flex: 1,
  },
  menuSubtitle: {
    fontSize: 14,
    color: '#666',
    marginRight: 10,
  },
  progressCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  levelSection: {
    flex: 1,
    padding: 20,
    borderRightWidth: 1,
    borderRightColor: '#eee',
  },
  streakSection: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  chartContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  scheduleCard: {
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
    overflow: 'hidden',
  },
  levelValueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  levelValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#2196F3',
  },
  levelUnit: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 4,
    marginBottom: 8,
  },
  streakValueContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  streakValue: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FF9800',
  },
  streakUnit: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 4,
    marginBottom: 8,
  },
  goalsContainer: {
    padding: 15,
  },
  goalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  goalTitle: {
    fontSize: 16,
    fontWeight: '600',
  },
  goalsList: {
    gap: 12,
  },
  goalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  goalCheckbox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  goalIncomplete: {
    borderColor: '#9E9E9E',
    backgroundColor: '#F5F5F5',
  },
  goalText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
  },
  growthSection: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    borderLeftWidth: 1,
    borderLeftColor: '#eee',
    marginTop: 30,  
  },
  scheduleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 0,
  },
});

export default PersonalStudyDashboardScreen; 