import {View, Text, StyleSheet, Button} from 'react-native'
import React from 'react'
import { useRouter, useGlobalSearchParams } from 'expo-router'
const Profile = () =>{
    const router = useRouter();
    const param = useGlobalSearchParams();
    console.log(param);
    return (
        <View style={styles.container}>
          <View style={styles.main}>
            <Text style={styles.title}>Hello World</Text>
            <Text style={styles.subtitle}>Profile</Text>
            <Button  title='Go Index' onPress={() => router.back()}/>
          </View>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
      },
      main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
      },
      title: {
        fontSize: 64,
        fontWeight: "bold",
      },
      subtitle: {
        fontSize: 36,
        color: "#38434D",
      },
    });

export default Profile