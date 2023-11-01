import {View, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeroCardTab from '../../src/components/HeroCardTab';
import CategoriesTab from '../../src/components/CategoriesTab';
import PetListCardTab from '../../src/components/PetListCardTab';
// import React from 'react';
import COLOR from '../../src/constants/COLOR';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';

const home = () => {
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    const retrieveUserInfo = async () => {
      try {
        const userInfoString = await AsyncStorage.getItem('userInfo');
        if (userInfoString !== null) {
          const retrievedUserInfo = JSON.parse(userInfoString);
          // console.log(retrievedUserInfo);
          setUserInfo(retrievedUserInfo);
        } else {
          console.log('userInfo not found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error retrieving userInfo:', error);
      }
    };
    retrieveUserInfo();
  }, []);

  return (
    // <SafeAreaView style={{ flex: 0 }}>
    //   {/* hero  and search screen */}
    //   <HeroCardTab/>
    //   {/* Categories */}
    // </SafeAreaView>
    <View style={{flex: 1, backgroundColor: COLOR.White}}>
      <HeroCardTab />
      <View style={{flex: 1,backgroundColor: COLOR.Black}}>
        <Text style={{color: COLOR.White}}>{userInfo.token}</Text>
      </View>

      <CategoriesTab />

      <PetListCardTab />
    </View>
  );
};

export default home;
