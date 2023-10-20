import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import {useRouter, useGlobalSearchParams} from 'expo-router';
import useIdFetch from '../../src/hook/useIdFetch';
import {
  GiftedChat,
  InputToolbar,
  Send,
  Composer,
} from 'react-native-gifted-chat';
import COLOR from '../../src/constants/COLOR';
import FONT from '../../src/constants/FONT';
import Icon from 'react-native-vector-icons/FontAwesome';

const chat_screen = () => {
  const params = useGlobalSearchParams();
  const Id = Number(params.id);
  const Router = useRouter();

  const {data, isLoading, error, refetch} = useIdFetch('GET', 'expert', Id);
  // console.log(data.id);

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
      {/* Below example for id check */}
        {/* {data.id == '2' ?(<Text>hello</Text>):(<Text>Bye</Text>)} */}
      
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => Router.back()}>
          <Icon
            style={styles.backIcon}
            name="arrow-left"
            size={20}
            color={COLOR.Black}
            onPress={() => Router.back()}
          />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Image
            source={require('../../assets/IMGS/cat.jpg')}
            style={styles.avatar}
          />
          <View style={styles.Title}>
            <Text style={styles.doctorName}>{data.name}</Text>
            {data.status ? (
              <View style={styles.statuscontainer}>
                <Icon name="circle" color={COLOR.Success} />
                <Text style={styles.status}>Online</Text>
              </View>
            ) : (
              <View style={styles.statuscontainer}>
                <Icon name="circle" color={COLOR.Danger} />
                <Text style={styles.status}>Offline</Text>
              </View>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => Router.back()}>
          <Icon
            style={styles.backIcon}
            name="ellipsis-v"
            size={25}
            color={COLOR.Black}
            onPress={() => Router.back()}
          />
        </TouchableOpacity>
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
    backgroundColor: COLOR.LightOrange,
    elevation: 3,
    gap: 15,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
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
    color: COLOR.Gray,
  },
  statuscontainer: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  doctorName: {
    fontSize: FONT.Headline,
    color: COLOR.White,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  menuButton: {
    padding: 5,
    marginRight: 10,
  },
});

export default chat_screen;
