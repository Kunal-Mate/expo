import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import  COLORS  from "../constants/COLOR";
import { checkImageURL } from "../utils";


const PetCard = ({pet}) => {
  return(
      <TouchableOpacity style={styles.productItem} >
        <View style={styles.imageContainer}>
          {pet.pet_image && (
            // <Image source={job.employer_logo} style={styles.productImage} />
            <Image source={{ uri: checkImageURL(pet.pet_image)
              ? pet.pet_image : "https://mma.prnewswire.com/media/1158927/Randstad_logo.jpg?p=facebook"
            }} 
            resizeMode="contain"
            style={styles.productImage} />
          )}
        </View>
        <View style={styles.productInfoContainer}>
          <Text style={styles.productName}>{pet.pet_name}</Text>
          <Text style={styles.productName}>{pet.pet_name}</Text>
          <Text style={styles.productPrice}>PetType:- {pet.pet_type}</Text>
          <Text style={styles.productPrice}>Breed:- {pet.pet_breed}</Text>
          <Text style={styles.productPrice}>Gender:- {pet.pet_price}</Text>
        </View>
      </TouchableOpacity>
  )       
};
const styles = StyleSheet.create({
  productItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: COLORS.White,
    borderRadius: 10,
    elevation: 3,
    shadowColor: COLORS.Black,
    shadowOffset: { width: 0, height: 2 },
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
    fontWeight: "bold",
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
    overflow: "hidden",
    borderRadius: 5,
  },
  productImage: {
    flex: 1,
    height: 50,
    width: 150,
  },

});
export default PetCard;