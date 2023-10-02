import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {useGlobalSearchParams, useRouter} from 'expo-router';
import useFetch from '../../src/hook/useFetch';
import COLOR from '../../src/constants/COLOR';
import {Button} from 'react-native-paper';
import {color} from 'react-native-elements/dist/helpers';

const PetDetails = () => {
  const params = useGlobalSearchParams();
  const Router = useRouter();
  const {data, isLoading, error, refetch} = useFetch('pet-details', {
    pet_id: params.id,
  });
  return (
    <View>
      <View style={styles.ActionContainer}>
        <Text>left arrow</Text>
        <Text>share icon</Text>
      </View>
      <View style={styles.SliderContainer}>
        <Text>PetDetails</Text>
      </View>
      <View style={styles.ButtonContainer}>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Adopt Me
        </Button>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Contact
        </Button>
      </View>
      <View style={styles.DetailsContainer}>
        <ScrollView>
          <Text>abc</Text>
          <Text>abc</Text>
        </ScrollView>
      </View>
    </View>
  );
};

export default PetDetails;

const styles = StyleSheet.create({
  ActionContainer: {
    backgroundColor: COLOR.Danger,
    padding: 20,
    marginTop: 10,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  SliderContainer: {
    backgroundColor: COLOR.Dark,
    borderRadius: 10,
    margin: 5,
    marginTop: 10,
    height: 200,
  },
  ButtonContainer: {
    padding: 5,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  DetailsContainer:{
    backgroundColor:COLOR.Info,
    marginTop: 10,
    margin:5,
    height:400,

  },
});
