import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Feather';
import MainScreen from '../screens/Home/MainScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfileScreen';
import NotificationsScreen from '../screens/Notifications/NotificationsScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';
import NotificationScreen from '../screens/Settings/NotificationScreen';
import NotificationDetailScreen from '../screens/Settings/NotificationDetailScreen';
import TimeSettingScreen from '../screens/Settings/TimeSettingScreen';
import EditInfoScreen from '../screens/Settings/EditInfoScreen';
import SocialAccountsScreen from '../screens/Settings/SocialAccountsScreen';
import PrivacySettingScreen from '../screens/Settings/PrivacySettingScreen';
import FontSizeScreen from '../screens/Settings/FontSizeScreen';
import BackupScreen from '../screens/Settings/BackupScreen';
import DataStorageScreen from '../screens/Settings/DataStorageScreen';
import SettingsBackupScreen from '../screens/Settings/SettingsBackupScreen';
import DisplayModeScreen from '../screens/Settings/DisplayModeScreen';
import LanguageScreen from '../screens/Settings/LanguageScreen';
import PersonalStudyDashboardScreen from '../screens/Study/PersonalStudyDashboardScreen';
import StudyGoalsScreen from '../screens/Study/StudyGoalsScreen';
import AddGoalScreen from '../screens/Study/AddGoalScreen';
import EditGoalScreen from '../screens/Study/EditGoalScreen';
import ScheduleScreen from '../screens/Study/ScheduleScreen';
import StudyAnalyticsScreen from '../screens/Study/StudyAnalyticsScreen';
import StudyMaterialsScreen from '../screens/Study/StudyMaterialsScreen';
import StudyCommunityScreen from '../screens/Community/StudyCommunityScreen';
import StudyFeedbackScreen from '../screens/Study/StudyFeedbackScreen';
import StudySessionScreen from '../screens/Study/StudySessionScreen';
import ChatListScreen from '../screens/Chat/ChatListScreen';
import ChatRoomScreen from '../screens/Chat/ChatRoomScreen';
import ChatRoomSettingsScreen from '../screens/Chat/ChatRoomSettingsScreen';
import FriendsListScreen from '../screens/Friends/FriendsListScreen';
import ChatAndFriendsScreen from '../screens/Chat/ChatAndFriendsScreen';
import FriendProfileScreen from '../screens/Friends/FriendProfileScreen';
import GroupScreen from '../screens/Group/GroupScreen';
import GroupDetailScreen from '../screens/Group/GroupDetailScreen';
import GroupSettingsScreen from '../screens/Group/GroupSettingsScreen';
import GroupCreateScreen from '../screens/Group/GroupCreateScreen';
import GroupActivityScreen from '../screens/Group/GroupActivityScreen';
import MyGroupScreen from '../screens/Group/MyGroupScreen';
import MemberRoleScreen from '../screens/Group/MemberRoleScreen';
import MemberRequestScreen from '../screens/Group/MemberRequestScreen';
import AIGroupMatchingScreen from '../screens/Group/AIGroupMatchingScreen';
import MemberManageScreen from '../screens/Group/MemberManageScreen';
import MemberInviteScreen from '../screens/Group/MemberInviteScreen';
import MemberActivityScreen from '../screens/Group/MemberActivityScreen';
import MentoringScreen from '../screens/Group/MentoringScreen';
import CreateQuestionScreen from '../screens/Community/CreateQuestionScreen';
import QuestionDetailScreen from '../screens/Community/QuestionDetailScreen';
import StudyMaterialDetailScreen from '../screens/Study/StudyMaterialDetailScreen';
import FileShareScreen from '../screens/Chat/FileShareScreen';
import CreateGroupChatScreen from '../screens/Chat/CreateGroupChatScreen';
import AddFriendScreen from '../screens/Friends/AddFriendScreen';
import GroupCommunicationScreen from '../screens/Group/GroupCommunicationScreen';
import PerformanceAnalysisScreen from '../screens/Group/PerformanceAnalysisScreen';
import QuizAndTestScreen from '../screens/Group/QuizAndTestScreen';
import StudyMaterialManagementScreen from '../screens/Group/StudyMaterialManagementScreen';
import LearningResourceCenterScreen from '../screens/Group/LearningResourceCenterScreen';
import GroupPerformanceAndRewardsScreen from '../screens/Group/GroupPerformanceAndRewardsScreen';
import GroupScheduleManagementScreen from '../screens/Group/GroupScheduleManagementScreen';
import LevelDetailScreen from '../screens/Study/LevelDetailScreen';
import AchievementScreen from '../screens/Study/AchievementScreen';
import RegisterMentorScreen from '../screens/Community/RegisterMentorScreen';
import ChatRoomMembersScreen from '../screens/Chat/ChatRoomMembersScreen';
import InviteMembersScreen from '../screens/Chat/InviteMembersScreen';
import ChatRoomDisplayModeScreen from '../screens/Chat/ChatRoomDisplayModeScreen';
import ChatBackupRestoreScreen from '../screens/Chat/ChatBackupRestoreScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

// 메인 스택 네비게이터
const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainScreen" component={MainScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="EditProfile" component={EditProfileScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
      <Stack.Screen 
        name="NotificationDetail"
        component={NotificationDetailScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen 
        name="TimeSetting"
        component={TimeSettingScreen}
        options={({ route }) => ({ title: route.params.title })}
      />
      <Stack.Screen name="EditInfo" component={EditInfoScreen} />
      <Stack.Screen name="SocialAccounts" component={SocialAccountsScreen} />
      <Stack.Screen name="PrivacySetting" component={PrivacySettingScreen} />
      <Stack.Screen name="FontSize" component={FontSizeScreen} />
      <Stack.Screen name="Backup" component={BackupScreen} />
      <Stack.Screen name="DataStorage" component={DataStorageScreen} />
      <Stack.Screen name="SettingsBackup" component={SettingsBackupScreen} />
      <Stack.Screen name="DisplayMode" component={DisplayModeScreen} />
      <Stack.Screen name="Language" component={LanguageScreen} />
    </Stack.Navigator>
  );
};

// 스터디 드로어 네비게이터
const StudyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen 
        name="StudyDashboard" 
        component={PersonalStudyDashboardScreen}
        options={{ drawerLabel: '대시보드' }}
      />
      <Drawer.Screen 
        name="StudyMaterials" 
        component={StudyMaterialsScreen}
        options={{ drawerLabel: '학습 자료' }}
      />
      <Drawer.Screen 
        name="StudyCommunity" 
        component={StudyCommunityScreen}
        options={{ drawerLabel: '학습 커뮤니티' }}
      />
      <Drawer.Screen 
        name="StudyFeedback" 
        component={StudyFeedbackScreen}
        options={{ drawerLabel: '학습 피드백' }}
      />
      <Drawer.Screen 
        name="StudySession" 
        component={StudySessionScreen}
        options={{ drawerLabel: '학습 세션' }}
      />
    </Drawer.Navigator>
  );
};

// 스터디 스택 네비게이터 수정
const StudyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StudyDrawer" component={StudyDrawer} />
      <Stack.Screen name="StudyMaterialDetail" component={StudyMaterialDetailScreen} />
      <Stack.Screen name="CreateQuestion" component={CreateQuestionScreen} />
      <Stack.Screen name="QuestionDetail" component={QuestionDetailScreen} />
      <Stack.Screen name="StudyAnalytics" component={StudyAnalyticsScreen} />
      <Stack.Screen name="StudyGoals" component={StudyGoalsScreen} />
      <Stack.Screen name="AddGoal" component={AddGoalScreen} />
      <Stack.Screen name="EditGoal" component={EditGoalScreen} />
      <Stack.Screen name="Schedule" component={ScheduleScreen} />
      <Stack.Screen name="LevelDetail" component={LevelDetailScreen} />
      <Stack.Screen name="Achievement" component={AchievementScreen} />
      <Stack.Screen name="RegisterMentor" component={RegisterMentorScreen} />
    </Stack.Navigator>
  );
};

// 채팅 스택 네비게이터 수정
const ChatStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ChatAndFriends" component={ChatAndFriendsScreen} />
      <Stack.Screen name="ChatRoom" component={ChatRoomScreen} />
      <Stack.Screen name="ChatRoomSettings" component={ChatRoomSettingsScreen} />
      <Stack.Screen name="ChatList" component={ChatListScreen} />
      <Stack.Screen name="FriendsList" component={FriendsListScreen} />
      <Stack.Screen name="FriendProfile" component={FriendProfileScreen}/>
      <Stack.Screen name="FileShare" component={FileShareScreen} />
      <Stack.Screen name="CreateGroupChat" component={CreateGroupChatScreen} />
      <Stack.Screen name="AddFriend" component={AddFriendScreen} />
      <Stack.Screen name="ChatRoomMembers" component={ChatRoomMembersScreen} /> 
      <Stack.Screen name="InviteMembers" component={InviteMembersScreen} />
      <Stack.Screen name="ChatRoomDisplayMode" component={ChatRoomDisplayModeScreen} />
      <Stack.Screen name="ChatBackupRestore" component={ChatBackupRestoreScreen} />
    </Stack.Navigator>
  );
};

const GroupStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="GroupScreen" component={GroupScreen} />
      <Stack.Screen name="GroupDetail" component={GroupDetailScreen} />
      <Stack.Screen name="GroupSettings" component={GroupSettingsScreen} />
      <Stack.Screen name="GroupCreate" component={GroupCreateScreen} />
      <Stack.Screen name="GroupActivity" component={GroupActivityScreen} />
      <Stack.Screen name="MyGroup" component={MyGroupScreen} />
      <Stack.Screen name="MemberRole" component={MemberRoleScreen} />
      <Stack.Screen name="MemberRequest" component={MemberRequestScreen} />
      <Stack.Screen name="AIGroupMatching" component={AIGroupMatchingScreen} />
      <Stack.Screen name="MemberManage" component={MemberManageScreen} />
      <Stack.Screen name="MemberInvite" component={MemberInviteScreen} />
      <Stack.Screen name="MemberActivity" component={MemberActivityScreen} />
      <Stack.Screen name="Mentoring" component={MentoringScreen} />
      <Stack.Screen name="GroupCommunication" component={GroupCommunicationScreen} />
      <Stack.Screen name="PerformanceAnalysis" component={PerformanceAnalysisScreen} />
      <Stack.Screen name="QuizAndTest" component={QuizAndTestScreen} />
      <Stack.Screen name="StudyMaterialManagement" component={StudyMaterialManagementScreen} />
      <Stack.Screen name="LearningResourceCenter" component={LearningResourceCenterScreen} />
      <Stack.Screen name="GroupPerformanceAndRewards" component={GroupPerformanceAndRewardsScreen} />
      <Stack.Screen name="GroupScheduleManagement" component={GroupScheduleManagementScreen} />
    </Stack.Navigator>
  );
};
// 탭 네비게이터 수정
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === '홈') {
            iconName = 'home';
          } else if (route.name === '학습') {
            iconName = 'book';
          } else if (route.name === '채팅') {
            iconName = 'message-circle';
          } else if (route.name === '그룹') {
            iconName = 'users';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen name="홈" component={MainStack} />
      <Tab.Screen name="학습" component={StudyStack} />
      <Tab.Screen name="채팅" component={ChatStack} />
      <Tab.Screen name="그룹" component={GroupStack} />
    </Tab.Navigator>
  );
};

// 최상위 네비게이터 수정
const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
};

export default AppNavigator; 