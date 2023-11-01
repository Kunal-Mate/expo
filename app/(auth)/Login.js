import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import * as Device from 'expo-device';
import {useRouter} from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';

const BASE_URL = 'https://722c-103-158-139-130.ngrok-free.app/api';

const Login = () => {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pushToRegister = () => {
    // router.push('Register');
  };

  const handleLogin = async () => {
    try {
      if (!email && !password) {
        alert('Please enter all the required fields');
      } else {
        setIsLoading(true);
        const response = await axios.post(`${BASE_URL}/login`, {
            email: email,
            password: password,
            devicename: Device.modelName,
          });
          if(response.data.status){
            // console.log(response.data.user);
            let userInfo = response.data;
            setUserInfo(userInfo);
            AsyncStorage.setItem('userInfo', userInfo);
            console.log(userInfo.status);
            router.push('home');
          }else{
            // console.log(JSON.stringify(response));
            console.log(response.data)
          }
        }
      } catch (e) {
        console.log(e.messages);
      }
    };
    // const getUserInfo = async () => {
    //   try {
    //     const userInfoString = await AsyncStorage.getItem('userInfo');
    //     if (userInfoString !== null) {
    //       // Parse the retrieved string as JSON
    //       const userInfo = JSON.parse(userInfoString);
    //       console.log('Retrieved userInfo:', userInfo);
    //     } else {
    //       // Data does not exist in AsyncStorage
    //       console.log('userInfo not found');
    //     }
    //   } catch (error) {
    //     // Error retrieving data
    //     console.error('Error retrieving userInfo:', error);
    //   }
    // }
    
    // // Call the function to retrieve userInfo
    // console.log(userInfo.status)
    // getUserInfo();
    // axios
    //   .post(`${BASE_URL}/login`, {
    //     email: email,
    //     password: password,
    //     devicename: Device.modelName,
    //   })
    //   .then(response => {
    //     if (response.data.status) {
    //       console.log(response.data.status);
    //       let userInfo = response.data;
    //       setUserInfo(userInfo);
    //       AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
    //       isLoading(false);
    //       console.log(userInfo);
    //     } else {
    //       console.log(response.data.messages);
    //       isLoading(false);
    //     }
    //   })
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Login</Text>
      </View>
      <View style={styles.body}>
        <View>
          <Text style={styles.label}>Email : </Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View>
          <Text style={styles.label}>Password : </Text>

          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <Button title="Login" onPress={handleLogin} />
      </TouchableOpacity>
      <View style={{top: 50}}>
          <Text onPress={pushToRegister()}> Register </Text>
      </View>
    </View>
  );
};
export default Login;
const styles = StyleSheet.create({
  container: {
    top: 200,
    justifyContent: 'center',
    padding: 10,
    alignContent: 'center',
    margin: 10,
  },
  title: {
    margin: 15,
    justifyContent: 'center',
  },
  titleText: {
    textAlign: 'center',
    fontSize: 22,
  },
  body: {
    padding: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 16,
    paddingHorizontal: 12,
  },
  button: {},
});
