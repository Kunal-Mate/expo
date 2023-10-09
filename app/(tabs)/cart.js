import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import COLOR from '../../src/constants/COLOR';
import Icon from 'react-native-vector-icons/FontAwesome';
// import {petProImg} from '../../assets/IMGS/pet_product'

const Cart = () => {
  // Replace this with actual cart items
  const cartItems = [
    {
      id: 1,
      name: 'Pet Comb',
      price: 20.99,
      image: 'https://m.media-amazon.com/images/I/61rpRN0K6nL._AC_UL480_FMwebp_QL65_.jpg', // Replace with item image URL
    },
    {
      id: 2,
      name: 'Pet Food',
      price: 12.49,
      image: 'https://m.media-amazon.com/images/I/41oT5BNIIhS._SX300_SY300_QL70_FMwebp_.jpg', // Replace with item image URL
    },
    {
      id: 3,
      name: 'Pet Toys',
      price: 12.49,
      image: 'https://m.media-amazon.com/images/I/71ymmTRgraL._AC_UL480_FMwebp_QL65_.jpg', // Replace with item image URL
    },
    {
      id: 4,
      name: 'Pet Toys',
      price: 12.49,
      image: 'https://m.media-amazon.com/images/I/51tBuD0HlqL._AC_UL480_FMwebp_QL65_.jpg', // Replace with item image URL
    },
    {
      id: 5,
      name: 'Pet Belt',
      price: 13.49,
      image: 'https://m.media-amazon.com/images/I/41UIr7pdRYL._SX300_SY300_QL70_FMwebp_.jpg', // Replace with item image URL
    },
    // Add more items as needed
  ];

  // Calculate the total price of items in the cart
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  // Render a single cart item
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Cart</Text>
        <Icon
          style={styles.Icon}
          name="ellipsis-v"
          size={25}
          color={COLOR.Gray}
          onPress={() => console.log('Share button')}
        />
      </View>
      <View style={styles.cartContainer}>
        <FlatList showsVerticalScrollIndicator={false}
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.paymentContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>${total.toFixed(2)}</Text>
        </View>
        <TouchableOpacity style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
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
    flex:1
  },
  cartContainer: {
    flex: 1,
    backgroundColor: COLOR.White,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 30,
    marginBottom: 160,
  },

  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth:3,
    borderColor:COLOR.Gray1,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  itemName: {
    fontSize: 16,
    color: 'black',
  },
  itemPrice: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: 'white',
    backgroundColor: COLOR.Gray3,
    padding: 10,
    borderRadius: 10,
  },
  totalText: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  paymentContainer:{
    flex: 1,
    backgroundColor: COLOR.Orange,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position:"absolute",
    padding: 30,
    bottom:0,
    width:'100%'
  }
  ,
  paymentButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  paymentButtonText: {
    fontSize: 18,
    color: 'orange',
    fontWeight: 'bold',
  },
});

export default Cart;
