import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import mockCategories from '../../mock/mockCategories';
import useFetch from '../../hook/useFetch';

const CategoriesTab = () => {
  const {data} = useFetch('search', {
    query: 'Python developer in Texas, USA',
    num_pages: 1,
  });

  return (
    <View>
      <Text style={styles.categories}>Categories</Text>
      <View style={styles.cateListContainer}>
        <View style={styles.listcontainer}>
          <FlatList
            // data={data}
            data={mockCategories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.cateItem}>
                <View style={styles.ItemContainer}>
                  <Text style={styles.itemtext}>{item.employer_name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    </View>
  );
};
export default CategoriesTab;
