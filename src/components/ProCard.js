import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../constants/COLOR';
import {checkImageURL} from '../utils';
// import pet_product from '../../assets';

const ProCard = ({product, handleNavigate}) => {
  // console.log(product);
  // console.log(project.project_name);
  return (
    <TouchableOpacity style={styles.productItem} onPress={handleNavigate}>
      <View style={styles.imageContainer}>
        {/* {pet.pet_image && (
            // <Image source={job.employer_logo} style={styles.productImage} />
            <Image source={{ uri: checkImageURL(pet.pet_image)
              ? pet.pet_image : "https://mma.prnewswire.com/media/1158927/Randstad_logo.jpg?p=facebook"
            }} 
            resizeMode="contain"
            style={styles.productImage} />
          )} */}
        {/* {product.image && ( */}
        {/* <Image source={job.employer_logo} style={styles.productImage} /> */}
        <Image
          source={{
            uri: checkImageURL(product.image)
              ? product.image
              : 'https://mma.prnewswire.com/media/1158927/Randstad_logo.jpg?p=facebook',
          }}
          resizeMode="contain"
          style={styles.productImage}
        />
        {/* )} */}
      </View>
      <View style={styles.productInfoContainer}>
        <Text style={styles.productName}>{product.product_name}</Text>
        <Text style={styles.productPrice}>
          Product Type :- {product.product_category.name}
        </Text>
        <Text style={styles.productPrice}>Brand :- {product.brand_name}</Text>
        <Text style={styles.productPrice}>Price :- {product.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  productItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: COLORS.White,
    borderRadius: 10,
    elevation: 3,
    shadowColor: COLORS.Black,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  productInfoContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 16,
    color: COLORS.Gray,
    marginBottom: 4,
  },
  imageContainer: {
    width: 130,
    height: 90,
    marginLeft: 10,
    marginRight: 10,
    overflow: 'hidden',
    borderRadius: 5,
  },
  productImage: {
    flex: 1,
    height: 50,
    width: 150,
  },
});
export default ProCard;
