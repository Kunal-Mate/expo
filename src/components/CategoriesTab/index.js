import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import styles from './styles';
import mockCategories from '../../mock/mockCategories';
import useFetch from '../../hook/useFetch';
import { useRouter } from 'expo-router';

const CategoriesTab = () => {
  router = useRouter();
  const {data} = useFetch('GET','pet-categories');
  // console.log(data);

  const [selectedCategory, setselectedCategory] = useState(null);

  // const handleCategoryClick = doctor => {
  //   selectedCategory(doctor);
  // };

  const handleCategoryClick = (item) => {
    // if(selectedDoctor) {
    //  router.push({`/list`,{item}});
    // const Pet_categories  =  {item} ;
    // router.push("/list", Pet_categories);
    // console.log(Pet_categories);
    
  }

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
              <TouchableOpacity style={styles.cateItem} onPress={() => handleCategoryClick(item)}>
                <View style={styles.ItemContainer}>
                  <Text style={styles.itemtext}>{item.name}</Text>
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
