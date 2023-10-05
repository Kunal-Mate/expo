import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DoctorList from '../../src/components/DoctorList';
import { useRouter } from 'expo-router';
import doctors from '../../src/mock/mockDoctor';

import COLORS from '../../src/constants/COLOR';
import FONT from '../../src/constants/FONT';
import { ScrollView } from 'react-native-gesture-handler';

const expert = () => {
  const Router = useRouter();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = doctor => {
    setSelectedDoctor(doctor);
    console.log(doctor);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Expert</Text>
      </View>
      <DoctorList doctors={doctors} onDoctorClick={handleDoctorClick} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  titleContainer:{
    margin:15,
    paddingTop:5,

  },
  title:{
    fontFamily: "sans-serif",
    fontWeight: "bold",
    fontSize: FONT.Title_3,
  },
});

export default expert;
