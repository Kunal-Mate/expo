import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import {useCallback, useState} from 'react';
import {Stack, useGlobalSearchParams, useRouter} from 'expo-router';
import useFetch from '../../src/hook/useFetch';

import SliderContainer from '../../src/components/SliderTab';
import DetailsTab from '../../src/components/DetailsTab';

import Icon from 'react-native-vector-icons/FontAwesome';
import {Button} from 'react-native-paper';
import COLOR from '../../src/constants/COLOR';
import styles from './styles';

const PetDetails = () => {
  const params = useGlobalSearchParams();
  const Router = useRouter();

  const {data, isLoading, error, refetch} = useFetch('pet-details', {
    pet_id: params.id,
  });
  console.log(data[0]);
  const [refreshing, SetRefreshing] = useState(false);
  const onRefresh = () => {};

  return (
    <View>
      <View style={styles.ActionContainer}>
        <Icon
          style={styles.backIcon}
          name="arrow-left"
          size={20}
          color={COLOR.Black}
          onPress={() => Router.back()}
        />
        <Icon
          style={styles.Icon}
          name="share-alt"
          size={20}
          color={COLOR.Black}
          onPress={() => console.log('Share button')}
        />
      </View>
      <View style={styles.Container}>
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
              <SliderContainer />
              <DetailsTab />
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
