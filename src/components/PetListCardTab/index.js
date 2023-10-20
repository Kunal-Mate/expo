import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import COLORS from '../../constants/COLOR';
import useFetch from '../../hook/useFetch';
import {ActivityIndicator} from 'react-native-paper';
import PetCard from '../PetCard';
import ProCard from '../ProCard';
import {useRouter} from 'expo-router';

const PetListCardTab = () => {
  const router = useRouter();
  const {data, isLoading, error} = useFetch("GET",'all-data');
  // console.log(data)

  return (
    <View style={{flex: 1, marginTop: 10}}>
      <View style={styles.Heading}>
        <Text style={styles.ListTitle}>List</Text>
        <TouchableOpacity style={styles.more} onPress={() => router.push(`/list`)}>
          <Text style={styles.Explore}>Explore </Text>
          <Icon
            style={styles.arrow}
            name="arrow-right"
            size={15}
            color={COLORS.Gray}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={styles.petcontainer}>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.Primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data.products?.map(product => (
              <ProCard
                product={product}
                key={`pet-details-${product.id}`}
                handleNavigate={() =>
                  router.push(`/pro-details/${product.id}`)
                }
              />
            ))
            )}
            {isLoading ? (
              <></>
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            data.petDetails?.map(pet => (
              <PetCard
                pet={pet}
                key={`pet-details-${pet.id}`}
                handleNavigate={() =>
                  router.push(`/pet-details/${pet.id}`)
                }
              />
            ))
          )}
        </View>
      </ScrollView>
    </View>
  );
};
export default PetListCardTab;
           