import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { LineChart, PieChart, BarChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const StudyAnalyticsScreen = ({ navigation }) => {
  const [timeRange, setTimeRange] = useState('week'); // 'week', 'month', 'year'
  const [selectedSubject, setSelectedSubject] = useState('all');

  // 더미 데이터
  const studyData = {
    subjects: {
      '프로그래밍': 25,
      '알고리즘': 15,
      '데이터베이스': 10,
      '웹개발': 20,
      '모바일개발': 30,
    },
    weeklyHours: {
      labels: ['월', '화', '수', '목', '금', '토', '일'],
      datasets: [{
        data: [4, 3, 5, 2, 6, 4, 3],
      }]
    },
    goals: {
      total: 10,
      achieved: 7,
    },
    monthlyProgress: {
      labels: ['1주', '2주', '3주', '4주'],
      datasets: [{
        data: [65, 78, 82, 90],
      }]
    }
  };

  // 목표 달성률 계산
  const achievementRate = (studyData.goals.achieved / studyData.goals.total) * 100;

  // 파이 차트 데이터 변환
  const pieChartData = Object.entries(studyData.subjects).map(([name, hours], index) => ({
    name,
    hours,
    color: [`#FF6384`, `#36A2EB`, `#FFCE56`, `#4BC0C0`, `#9966FF`][index],
    legendFontColor: '#7F7F7F',
    legendFontSize: 12,
  }));

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="#333" />
        </Pressable>
        <Text style={styles.headerTitle}>학습 분석</Text>
        <View style={{ width: 24 }} />
      </View>

      {/* 기간 선택 */}
      <View style={styles.timeRangeSelector}>
        <Pressable
          style={[styles.timeRangeButton, timeRange === 'week' && styles.activeTimeRange]}
          onPress={() => setTimeRange('week')}
        >
          <Text style={[styles.timeRangeText, timeRange === 'week' && styles.activeTimeRangeText]}>
            주간
          </Text>
        </Pressable>
        <Pressable
          style={[styles.timeRangeButton, timeRange === 'month' && styles.activeTimeRange]}
          onPress={() => setTimeRange('month')}
        >
          <Text style={[styles.timeRangeText, timeRange === 'month' && styles.activeTimeRangeText]}>
            월간
          </Text>
        </Pressable>
        <Pressable
          style={[styles.timeRangeButton, timeRange === 'year' && styles.activeTimeRange]}
          onPress={() => setTimeRange('year')}
        >
          <Text style={[styles.timeRangeText, timeRange === 'year' && styles.activeTimeRangeText]}>
            연간
          </Text>
        </Pressable>
      </View>

      {/* 총 학습 시간 카드 */}
      <View style={styles.summaryCard}>
        <Text style={styles.cardTitle}>총 학습 시간</Text>
        <Text style={styles.timeValue}>127시간</Text>
        <Text style={styles.timeSubtext}>지난 주 대비 +23%</Text>
      </View>

      {/* 과목별 학습 시간 분포 */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>과목별 학습 시간</Text>
        <PieChart
          data={pieChartData}
          width={width - 40}
          height={220}
          chartConfig={{
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
          }}
          accessor="hours"
          backgroundColor="transparent"
          paddingLeft="15"
        />
      </View>

      {/* 주간 학습 시간 추이 */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>학습 시간 추이</Text>
        <LineChart
          data={studyData.weeklyHours}
          width={width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
          style={styles.chart}
        />
      </View>

      {/* 목표 달성률 */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>목표 달성률</Text>
        <View style={styles.goalProgress}>
          <View style={[styles.progressBar, { width: `${achievementRate}%` }]} />
          <Text style={styles.progressText}>{Math.round(achievementRate)}%</Text>
        </View>
        <Text style={styles.goalText}>
          {studyData.goals.achieved}/{studyData.goals.total} 목표 달성
        </Text>
      </View>

      {/* 월간 성장률 */}
      <View style={styles.chartCard}>
        <Text style={styles.chartTitle}>월간 성장률</Text>
        <BarChart
          data={studyData.monthlyProgress}
          width={width - 40}
          height={220}
          chartConfig={{
            backgroundColor: '#ffffff',
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          style={styles.chart}
        />
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
  timeRangeSelector: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#fff',
    justifyContent: 'center',
    gap: 10,
  },
  timeRangeButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  activeTimeRange: {
    backgroundColor: '#4A90E2',
  },
  timeRangeText: {
    color: '#666',
  },
  activeTimeRangeText: {
    color: '#fff',
  },
  summaryCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
  },
  cardTitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
  },
  timeValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#4A90E2',
  },
  timeSubtext: {
    fontSize: 14,
    color: '#4CAF50',
    marginTop: 5,
  },
  chartCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 12,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  goalProgress: {
    height: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    marginVertical: 10,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#4CAF50',
  },
  progressText: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    lineHeight: 20,
    color: '#fff',
    fontWeight: '600',
  },
  goalText: {
    textAlign: 'center',
    color: '#666',
    marginTop: 5,
  },
});

export default StudyAnalyticsScreen; 