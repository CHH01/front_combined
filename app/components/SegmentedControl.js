import React from 'react';
import { View, Text, Pressable, Animated, StyleSheet } from 'react-native';

const SegmentedControl = ({ selectedTab, onTabChange, slideAnimation }) => {
  return (
    <View style={styles.segmentControl}>
      <Pressable 
        style={[styles.segment]}
        onPress={() => onTabChange('chats')}
      >
        <Text style={[
          styles.segmentText,
          selectedTab === 'chats' && styles.activeText
        ]}>
          채팅
        </Text>
      </Pressable>
      <Pressable 
        style={[styles.segment]}
        onPress={() => onTabChange('friends')}
      >
        <Text style={[
          styles.segmentText,
          selectedTab === 'friends' && styles.activeText
        ]}>
          친구
        </Text>
      </Pressable>
      <Animated.View 
        style={[
          styles.slider,
          {
            transform: [{
              translateX: slideAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 150]
              })
            }]
          }
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  segmentControl: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    padding: 2,
    position: 'relative',
    width: 300,
  },
  segment: {
    flex: 1,
    paddingVertical: 8,
    alignItems: 'center',
    zIndex: 1,
  },
  segmentText: {
    fontSize: 16,
    color: '#666',
  },
  activeText: {
    color: '#fff',
    fontWeight: '600',
  },
  slider: {
    position: 'absolute',
    top: 2,
    left: 2,
    right: 2,
    height: 36,
    width: '49%',
    backgroundColor: '#4A90E2',
    borderRadius: 6,
  },
});

export default SegmentedControl; 