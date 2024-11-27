// 2.그룹 채팅 생성 페이지
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, FlatList, Image, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CreateGroupChatScreen = ({ navigation }) => {
    const [groupName, setGroupName] = useState('');
    const [inviteMessage, setInviteMessage] = useState('');
    const [selectedFriends, setSelectedFriends] = useState([]);
    const [friends] = useState([
        { id: '1', name: '친구1', image: '' },
        { id: '2', name: '친구2', image: '' },
        { id: '3', name: '친구3', image: '' },
        // Thêm bạn bè mẫu ở đây
    ]);

    const toggleSelectFriend = (id) => {
        setSelectedFriends((prev) =>
            prev.includes(id) ? prev.filter(friendId => friendId !== id) : [...prev, id]
        );
    };

    const createGroupChat = () => {
        // Logic để tạo nhóm chat
        alert(`그룹 채팅이 생성되었습니다: ${groupName}`);
        // 이전 화면으로 돌아가기
        navigation.goBack();
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>그룹 채팅 생성 페이지</Text>
                <TouchableOpacity 
                    style={styles.closeButton}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="close" size={24} color="#333" />
                </TouchableOpacity>
            </View>
            
            <Text style={styles.label}>채팅방 이름 설정</Text>
            <TextInput
                style={styles.input}
                placeholder="채팅방 이름을 입력하세요"
                value={groupName}
                onChangeText={setGroupName}
            />
            <Text style={styles.label}>친구 선택 목록 (다중 선택 가능)</Text>
            <FlatList
                data={friends}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[styles.friendItem, selectedFriends.includes(item.id) && styles.selectedFriend]}
                        onPress={() => toggleSelectFriend(item.id)}
                    >
                        <Image source={{ uri: item.image }} style={styles.friendImage} />
                        <Text style={styles.friendName}>{item.name}</Text>
                    </TouchableOpacity>
                )}
            />
            <Text style={styles.label}>초대 메시지 작성</Text>
            <TextInput
                style={styles.input}
                placeholder="초대 메시지를 입력하세요"
                value={inviteMessage}
                onChangeText={setInviteMessage}
            />
            <TouchableOpacity style={styles.createButton} onPress={createGroupChat}>
                <Text style={styles.buttonText}>그룹 채팅 생성</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    closeButton: {
        position: 'absolute',
        right: 20,
        top: 15,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        marginTop: 15,
        marginHorizontal: 20,
    },
    input: {
        height: 40,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginBottom: 20,
        marginHorizontal: 20,
    },
    friendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    selectedFriend: {
        backgroundColor: '#e0f7fa',
    },
    friendImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    friendName: {
        fontSize: 16,
    },
    createButton: {
        backgroundColor: '#4A90E2',
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 20,
        marginBottom: 20,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default CreateGroupChatScreen; 