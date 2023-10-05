import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {useRouter, useGlobalSearchParams} from 'expo-router';
import useFetch from '../../src/hook/useFetch';
import { GiftedChat } from 'react-native-gifted-chat';

const chat_screen = () => {
    // const { doctor } = route.params;
  const Router = useRouter();
  const params = useGlobalSearchParams();
  const {data, isLoading, error, refetch} = useFetch('chat-screen', {
    id: params.id,
  });
  console.log(data[0]);
  return (
    <View style={styles.container}>
      {/* Header with doctor's avatar and name */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/IMGS/cat.jpg')}
          style={styles.avatar}
        />
        <Text style={styles.doctorName}>{data[0].name}</Text>
      </View>

      {/* Chatbox */}
      <GiftedChat
        messages={[]} // Initialize with empty messages or load messages dynamically
        onSend={messages => {}}
        user={{_id: 1}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default chat_screen;
