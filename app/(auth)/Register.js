import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import axios from 'axios';
import * as Device from 'expo-device';
import {useRouter} from 'expo-router';

const BASE_URL = 'https://722c-103-158-139-130.ngrok-free.app/api';

function register() {
  router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const pushToLogin = () => {
    router.push('Login');
  };

  const handleRegistration = async () => {
    try {
      if (!email && !password && !name) {
        alert('Please enter all the required fields');
      } else {
        axios
          .post(`${BASE_URL}/register`, {
            name: name,
            email: email,
            password: password,
            devicename: Device.modelName,
          })
          .then(response => {
            if (response.data.status) {
              console.log(response.data.status);
              router.push('Register');


            } else {
              console.log(response.data.messages);
            }
          })
          .catch(e => console.log(e.messages));
      }
      // const response = await axios.post(`https://722c-103-158-139-130.ngrok-free.app/api/register`, {
      //   devicename : Device.modelName,
      //   email : email,
      //   password : password,
      // });
      // console.log(response);

      // Handle successful registration (e.g., store token, navigate to home screen)
    } catch (error) {
      console.error('Registration error: ', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Registration</Text>
      </View>
      <View style={styles.body}>
      <View>
          <Text style={styles.label}>Name : </Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={text => setName(text)}
          />
        </View>
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
        <Button title="Register" onPress={handleRegistration} />
      </TouchableOpacity>
      <View style={{top: 50}}>
        <Text onPress={pushToLogin()}> Register </Text>
      </View>
    </View>
  );
}

export default register;

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