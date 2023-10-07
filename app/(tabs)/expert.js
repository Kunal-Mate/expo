import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DoctorList from '../../src/components/DoctorList';
import {useRouter} from 'expo-router';
import doctors from '../../src/mock/mockDoctor';

import COLORS from '../../src/constants/COLOR';
import FONT from '../../src/constants/FONT';
import {ScrollView} from 'react-native-gesture-handler';

const expert = () => {
  const Router = useRouter();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = doctor => {
    setSelectedDoctor(doctor);
    // console.log(doctor);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Expert</Text>
      </View>
      <View style={styles.BodyContainer}>
        <DoctorList doctors={doctors} onDoctorClick={handleDoctorClick} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  BodyContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },
  // titleContainer:{
  //   margin:15,
  //   paddingTop:5,

  // },
  // title:{
  //   fontFamily: "sans-serif",
  //   fontWeight: "bold",
  //   fontSize: FONT.Title_3,
  // },
});

export default expert;
