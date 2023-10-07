import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {useRouter, useGlobalSearchParams} from 'expo-router';
import useFetch from '../../src/hook/useFetch';
import {
  GiftedChat,
  InputToolbar,
  Send,
  Composer,
} from 'react-native-gifted-chat';
import mockdoctors from '../../src/mock/mockDoctor';
import COLOR from '../../src/constants/COLOR';
import FONT from '../../src/constants/FONT';
import Icon from 'react-native-vector-icons/FontAwesome';

const chat_screen = () => {
  // const { doctor } = route.params;
  const Router = useRouter();
  const params = useGlobalSearchParams();
  // const {data, isLoading, error, refetch} = useFetch('chat-screen', {
  //   id: params.id,
  // });
  const data = mockdoctors;
  // console.log(data[params.id]);
  // console.log(params);

  const customInputToolbar = props => {
    return (
      <InputToolbar
        {...props}
        containerStyle={{
          backgroundColor: COLOR.White,
          borderTopColor: COLOR.Gray,
          marginLeft: 15,
          marginRight: 15,
          marginBottom: 15,
          borderRadius: 10,
          elevation: 10,
        }}
      />
    );
  };
  const customSend = props => {
    return (
      <Send {...props}>
        <TouchableOpacity>
          <Icon name="send" size={20} color={COLOR.Primary} />
        </TouchableOpacity>
      </Send>
    );
  };
  const customComposer = props => {
    return (
      <View style={{flexDirection: 'row'}}>
        <Composer {...props} />
        {/* <CustomImageButton />
        <CustomAttachButton /> */}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header with doctor's avatar and name */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/IMGS/cat.jpg')}
          style={styles.avatar}
        />
        <View style={styles.Title}>
          <Text style={styles.doctorName}>DR. Mukerash Varma</Text>
          <View style={styles.statuscontainer}>
            <Icon name="circle" color={COLOR.Success} />
            <Text style={styles.status}>Online</Text>
          </View>
        </View>
      </View>

      {/* Chatbox */}
      <GiftedChat
        messages={[]} // Initialize with empty messages or load messages dynamically
        onSend={messages => {}}
        user={{_id: 1}}
        renderInputToolbar={props => customInputToolbar(props)}
        renderSend={props => customSend(props)}
        renderComposer={props => customComposer(props)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chatbox: {
    padding: 15,
    backgroundColor: COLOR.Danger,
  },

  container: {
    flex: 1,
    backgroundColor: COLOR.Gray3,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderWidth: 2,
    borderColor: COLOR.Gray2,
    borderRadius: 5,
    backgroundColor: COLOR.White,
    elevation: 3,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  Title: {},
  status: {
    fontSize: FONT.SubHead,
    paddingLeft: 3,
  },
  statuscontainer: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorName: {
    fontSize: FONT.Headline,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

export default chat_screen;
