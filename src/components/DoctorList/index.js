import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import COLORS from '../../constants/COLOR';
import FONT from '../../constants/FONT';
import { useRouter } from 'expo-router';

const Router = useRouter();

const DoctorList = ({doctors}) => {
  const navigation = useNavigation();
  const [selectedDoctor, setSelectedDoctor] = useState(null);

  const handleDoctorClick = doctor => {
    setSelectedDoctor(doctor);
  };

  const handleContactClick = () => {
    // Navigate to the chat screen and pass the selected doctor's information
    if (selectedDoctor) {
      // navigation.navigate('Chat', {doctor: selectedDoctor});
      Router.push(`/chat-screen/${selectedDoctor}`); 
      // Router.push(`/pet-details/${selectedDoctor}`)
    }
  };

  const handleLocationClick = () => {
    // Navigate to a screen that displays the doctor's location on a map
    if (selectedDoctor) {
      navigation.navigate('DoctorLocation', {doctor: selectedDoctor});
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={doctors}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => handleDoctorClick(item)}>
            <View style={styles.doctorCard}>
              <View style={{flexDirection:"row", alignContent: 'center'}}>
                <View>
                  <Image
                    style={styles.avatar}
                    source={require('../../../assets/IMGS/cat2.jpg')}
                  />
                </View>
                <View style={{justifyContent: 'center', paddingLeft: 10}}>
                  <Text style={styles.doctorName}>{item.name}</Text>
                  <Text style={styles.doctorsub}>Pet Expert</Text>
                </View>
              </View>
              {selectedDoctor === item && (
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleContactClick}>
                    <Text style={styles.buttonText}>Contact</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={handleLocationClick}>
                    <Text style={styles.buttonText}>Location</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  doctorCard: {
    borderColor: COLORS.Gray2,
    marginBottom: 2,
    borderWidth: 2,
    padding: 5,
    marginRight: 10,
    borderRadius:15,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgb(170, 207, 202)',
  },
  doctorName: {
    color: COLORS.Black_Shade,
    fontSize: FONT.Body,
    fontWeight:"500",
    fontFamily:"sans-serif"
  },
  doctorsub: {},
  buttonContainer: {
    marginTop: 10,
    paddingLeft:15,
    paddingRight:15,
    flexDirection: 'row',
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: 'orange',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default DoctorList;
