import {useRouter} from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import COLOR from '../../src/constants/COLOR';
import Icon from 'react-native-vector-icons/FontAwesome';

const PetProfileScreen = () => {
  // Replace these with actual pet details
  const Router = useRouter();
  const pet = {
    name: 'Buddy',
    namesub: 'Boogyman',
    type: 'Dog',
    breed: 'Golden Retriever',
    imageUrl:
      'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*', // Replace with the pet's image URL
    followers: 1200,
    photos: [
      'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
      'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
      'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <TouchableOpacity style={styles.backButton}  onPress={() => Router.back()}>
          <Text style={styles.backButtonText}>Back</Text>
        </TouchableOpacity> */}
        <Text style={styles.headerTitle}>Pet Profile</Text>
      </View>
      <ScrollView contentContainerStyle={styles.profileContainer}>
        <View
          style={{
            flexDirection: 'row',
            paddingLeft: 15,
          }}>
          <Image source={{uri: pet.imageUrl}} style={styles.petImage} />
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              padding: 5,
            }}>
            <Text style={styles.petName}>{pet.name}</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                padding: 5,
              }}>
              <Text style={styles.petType}>{pet.type}</Text>
              <FontAwesomeIcon icon={solid("diamond")} />
              <Text style={styles.petBreed}>{pet.breed}</Text>
            </View>
          </View>
        </View>
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{pet.followers}</Text>
            <Text style={styles.statLabel}>Followers</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{pet.photos.length}</Text>
            <Text style={styles.statLabel}>Photos</Text>
          </View>
        </View>
        <Text style={styles.sectionTitle}>Photos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {pet.photos.map((photo, index) => (
            <Image key={index} source={{uri: photo}} style={styles.photo} />
          ))}
        </ScrollView>
      </ScrollView>
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
  backButton: {
    marginRight: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  profileContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },
  petImage: {
    width: 140,
    height: 120,
    borderRadius: 75,
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    marginLeft: 20,
  },
  petType: {
    fontSize: 16,
    color: 'grey',
  },
  petBreed: {
    fontSize: 16,
    color: 'grey',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  statLabel: {
    fontSize: 14,
    color: 'grey',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  photo: {
    width: 120,
    height: 120,
    borderRadius: 10,
    marginRight: 10,
  },
});

export default PetProfileScreen;
