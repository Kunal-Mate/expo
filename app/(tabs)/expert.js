import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import DoctorList from '../../src/components/DoctorList';
import {useRouter} from 'expo-router';
import doctors from '../../src/mock/mockDoctor';
import Icon from 'react-native-vector-icons/FontAwesome';
import useFetch from '../../src/hook/useFetch';
import COLOR from '../../src/constants/COLOR';
import FONT from '../../src/constants/FONT';

const expert = () => {

  // const {data} = useFetch('GET','expert');
  // console.log(data);
  const data = doctors;

  const Router = useRouter();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = doctor => {
    setSelectedDoctor(doctor);
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Expert</Text>
        <Icon
          style={styles.Icon}
          name="ellipsis-v"
          size={25}
          color={COLOR.Gray}
          onPress={() => console.log('Share button')}
        />
      </View>
      <View style={styles.BodyContainer}>
        <DoctorList doctors={data} onDoctorClick={handleDoctorClick} />
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
    flex:1
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
