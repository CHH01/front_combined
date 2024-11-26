// 1.친구 추가 페이지 ok
//VB
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Feather';

const AddFriendScreen = ({ navigation }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [friends, setFriends] = useState([
        { id: '1', name: '친구1', phone: '010-1234-5678' },
        { id: '2', name: '친구2', phone: '010-8765-4321' },
        // Thêm bạn bè mẫu ở đây
    ]);

    const filteredFriends = friends.filter(friend =>
        friend.name.includes(searchQuery) || friend.phone.includes(searchQuery)
    );

    const sendFriendRequest = (friend) => {
        // Logic gửi yêu cầu kết bạn
        alert(`친구 요청이 ${friend.name}에게 전송되었습니다.`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.backButton} 
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Text style={styles.title}>친구 추가 페이지</Text>
            </View>
            <TextInput
                style={styles.searchInput}
                placeholder="ID/전화번호로 친구 검색"
                value={searchQuery}
                onChangeText={setSearchQuery}
            />
            <FlatList
                data={filteredFriends}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.friendItem}>
                        <Text style={styles.friendName}>{item.name} ({item.phone})</Text>
                        <TouchableOpacity style={styles.requestButton} onPress={() => sendFriendRequest(item)}>
                            <Text style={styles.buttonText}>친구 요청 보내기</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        padding: 10,
        position: 'absolute',
        left: 0,
        zIndex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        flex: 1,
        textAlign: 'center',
    },
    searchInput: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    friendItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    friendName: {
        fontSize: 16,
    },
    requestButton: {
        backgroundColor: '#4A90E2',
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default AddFriendScreen; 