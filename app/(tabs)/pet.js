import {useRouter} from 'expo-router';
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view';
import COLOR from '../../src/constants/COLOR';
import Icon from 'react-native-vector-icons/FontAwesome';
import mockPetProfile from '../../src/mock/mockPetProfile';

const Pet = () => {
  const {width} = Dimensions.get('window');
  const photoSize = (width - 40) / 3; // 40 is the total horizontal margin and padding

  const Router = useRouter();
  const pet = mockPetProfile.find(p => p.id === 1);
  // const pet = {
  //   name: 'Buddy',
  //   namesub: 'Boogyman',
  //   type: 'Dog',
  //   breed: 'Golden Retriever',
  //   imageUrl:
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*', // Replace with the pet's image URL
  //   followers: 1200,
  //   photos: [
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //     'https://hips.hearstapps.com/hmg-prod/images/chow-chow-portrait-royalty-free-image-1652926953.jpg?crop=0.44455xw:1xh;center,top&resize=980:*',
  //   ],
  // };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pet Profile</Text>
        <Icon
          style={styles.Icon}
          name="ellipsis-v"
          size={25}
          color={COLOR.Gray}
          // onPress={() => console.log('Share button')}
        />
      </View>
      <View style={styles.profileContainer}></View>
      <ScrollView contentContainerStyle={{backgroundColor: COLOR.White}}>
        <View
          style={{
            flexDirection: 'row',
            marginLeft: 15,
            marginRight: 15,
            alignItems: 'center',
          }}>
          <Image source={{uri: pet.profile_pic}} style={styles.petImage} />
          <View style={{flex: 1, padding: 5}}>
            <View style={{alignItems: 'center'}}>
              <Text style={styles.petName}>{pet.name}</Text>
              <Text style={styles.petOwnerName}>{pet.owner_details.name}</Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                padding: 5,
              }}>
              <Text style={styles.petBreed}>{pet.breed} ◆ </Text>
              <Text style={styles.petType}>{pet.type}</Text>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{pet.photos.length}</Text>
                <Text style={styles.statLabel}>Photos</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{pet.total_followers}</Text>
                <Text style={styles.statLabel}>Followers</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{padding: 5}}>
          <Text style={styles.sectionTitle}>Bio</Text>
          <Text style={styles.bio}>
            {pet.bio}
          </Text>
        </View>
        <View style={{padding: 5}}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <FlatList
            data={pet.photos}
            numColumns={3}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <View>
                <Image
                  source={{uri: item}}
                  style={[styles.photo, {width: photoSize, height: photoSize}]}
                />
              </View>
            )}
          />
        </View>
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
    flex: 1,
  },
  profileContainer: {
    flexGrow: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 20,
  },
  petImage: {
    width: '40%',
    height: '80%',
    borderRadius: 75,
  },
  petName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 5,
    // marginLeft: 20,
  },
  petOwnerName:{
    fontSize: 16,
    fontWeight: 'bold',
    color: 'gray',
    marginBottom: 5,
    // marginLeft: 20,
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
    justifyContent: 'space-evenly',
    padding: 10,
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
    margin: 10,
    marginLeft: 15,
  },
  photo: {
    borderRadius: 10,
    margin: 5,
  },
  bio: {
    fontSize: 14,
    color: 'grey',
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'justify',
  },
});

export default Pet;
