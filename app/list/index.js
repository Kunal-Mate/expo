import {StyleSheet, Text, View, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLOR from '../../src/constants/COLOR';

import useFetch from '../../src/hook/useFetch';
import {ActivityIndicator} from 'react-native-paper';
import PetCard from '../../src/components/PetCard';
import ProCard from '../../src/components/ProCard';
import {useGlobalSearchParams, useRouter} from 'expo-router';

import mockProjects from '../../src/mock/mockProject';
import mockPets from '../../src/mock/mockPets';

const index = () => {
  const router = useRouter();
  // const param = useGlobalSearchParams();
  // const {data, isLoading, error} = useFetch("GET",'all-data');
  // console.log(Pet_categories);
  const data = {mockProjects, mockPets};
  const isLoading = false;
  const error = null;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>List</Text>
        <Icon
          style={styles.Icon}
          name="ellipsis-v"
          size={25}
          color={COLOR.Gray}
          onPress={() => console.log('Share button')}
        />
      </View>
      <ScrollView>
        <View style={styles.BodyContainer}>
          <View style={styles.containContainer}>
            {isLoading ? (
              <ActivityIndicator size="large" color={COLOR.Primary} />
            ) : error ? (
              <Text>Something went wrong</Text>
            ) : (
              // data.products?.map(product => (
              data.mockProjects?.map(product => (
                <ProCard
                  product={product}
                  key={`pro-details-${product.id}`}
                  handleNavigate={() =>
                    router.push(`/pro-details/${product.id}`)
                  }
                />
              ))
            )}
            {isLoading ? (
              <ActivityIndicator size="large" color={COLOR.Primary} />
            ) : error ? (
              <Text>Something went wrong</Text>
            ) : (
              // data.petDetails?.map(pet => (
              data.mockPets?.map(pet => (
                <PetCard
                  pet={pet}
                  key={`pet-details-${pet.id}`}
                  handleNavigate={() => router.push(`/pet-details/${pet.id}`)}
                />
              ))
            )}
          </View>
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
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    flex: 1,
  },
  BodyContainer: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 30,
  },
  containContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export default index;
