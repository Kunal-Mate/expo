import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import {useCallback, useState} from 'react';
import {Stack, useGlobalSearchParams, useRouter} from 'expo-router';
import useIdFetch from '../../src/hook/useIdFetch';

import SliderContainer from '../../src/components/SliderTab';
import DetailsTab from '../../src/components/DetailsTab';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import COLOR from '../../src/constants/COLOR';
import styles from './styles';
import mockPets from '../../src/mock/mockPets';

const PetDetails = () => {
  const params = useGlobalSearchParams();
  const Id = Number(params.id); 
  const Router = useRouter();

  // const {data, isLoading, error} = useIdFetch('GET','pets', Id);
  // console.log(data.petDetails)
  // const pet = data.petDetails;

  const data = mockPets.find(p => p.id === Id);
  // console.log(data)
  const isLoading = false;
  const error = null;

  const [refreshing, SetRefreshing] = useState(false);
  const onRefresh = () => {};
  // console.log(pet)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}  onPress={() => Router.back()}>
        <Icon
          style={styles.backIcon}
          name="arrow-left"
          size={20}
          color={COLOR.Black}
          onPress={() => Router.back()}
        />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Pets</Text>
        <Icon
          style={styles.Icon}
          name="share-alt"
          size={20}
          color={COLOR.Black}
          onPress={() => console.log('Share button')}
        />
      </View>
      <View style={styles.detailsContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          RefreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {isLoading ? (
            <ActivityIndicator size={'large'} color={COLOR.Orange} />
          ) : error ? (
            <Text>SomeTing went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data</Text>
          ) : (
            <View>
              <View style={{alignSelf:"center"}}>
                {/* <Text>id: {pet.id}</Text>
                <Text>name: {pet.pet_name}</Text> */}
              </View>
              <SliderContainer />
              <DetailsTab data={data} type="pet" />
            </View>
          )}
          <View style={styles.ButtonContainer}>
            <Button
              mode="contained"
              color={COLOR.LightOrange}
              onPress={() => console.log('Adopt Me')}>
              <Text style={{color: COLOR.Black}}>Adopt Me</Text>
            </Button>
            <Button
              mode="contained"
              color={COLOR.LightOrange}
              onPress={() => console.log('Contact')}>
              Contact
            </Button>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default PetDetails;
