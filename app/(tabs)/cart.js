import React, {useState} from 'react';
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
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Pet Comb',
      price: 20.99,
      image:
        'https://m.media-amazon.com/images/I/61rpRN0K6nL._AC_UL480_FMwebp_QL65_.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Pet Food',
      price: 12.49,
      image:
        'https://m.media-amazon.com/images/I/41oT5BNIIhS._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Pet Toys',
      price: 12.49,
      image:
        'https://m.media-amazon.com/images/I/71ymmTRgraL._AC_UL480_FMwebp_QL65_.jpg',
      quantity: 1,
    },
    {
      id: 4,
      name: 'Pet Toys',
      price: 12.49,
      image:
        'https://m.media-amazon.com/images/I/51tBuD0HlqL._AC_UL480_FMwebp_QL65_.jpg',
      quantity: 1,
    },
    {
      id: 5,
      name: 'Pet Belt',
      price: 13.49,
      image:
        'https://m.media-amazon.com/images/I/41UIr7pdRYL._SX300_SY300_QL70_FMwebp_.jpg',
      quantity: 1,
    },
  ]);

  // const total = cartItems.reduce((acc, item) => acc + item.price, 0);
  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleAddItem = itemId => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? {...item, quantity: item.quantity + 1} : item,
      ),
    );
  };
  const handleRemoveItem = itemId => {
    setCartItems(prevItems =>
      prevItems.map(item => {
        if (item.id === itemId) {
          const newQuantity = item.quantity - 1;
          return {...item, quantity: newQuantity >= 1 ? newQuantity : 1};
        }
        return item;
      }),
    );
  };

  const handleDeleteItem = itemId => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  // Render a single cart item
  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Image source={{uri: item.image}} style={styles.itemImage} />
      <View style={styles.itemInfo}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>${item.price.toFixed(2)}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}>
            {/* <Text style={styles.quantityButtonText}>Remove</Text> */}
            <Icon
              style={styles.Icon}
              name="minus-circle"
              size={20}
              color={COLOR.Gray}
              onPress={() => handleRemoveItem(item.id)}
            />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            >
            {/* <Text style={styles.quantityButtonText}>Add</Text> */}
            <Icon
              style={styles.Icon}
              name="plus-circle"
              size={20}
              color={COLOR.Gray}
              onPress={() => handleAddItem(item.id)}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.RemoveIcon}>
      <Icon
              style={styles.Icon}
              name="times-circle"
              size={20}
              color={COLOR.Gray}
              onPress={() => handleDeleteItem(item.id)}
            />
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
        <FlatList
          showsVerticalScrollIndicator={false}
          data={cartItems}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.paymentContainer}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Total:</Text>
          <Text style={styles.totalAmount}>${calculateTotal().toFixed(2)}</Text>
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
    flex: 1,
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
    // alignItems: 'center',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: COLOR.Gray1,

  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent:"space-between"
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
  paymentContainer: {
    flex: 1,
    backgroundColor: COLOR.Orange,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: 'absolute',
    padding: 30,
    bottom: 0,
    width: '100%',
  },
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


  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    // backgroundColor: 'orange',

  },
  quantityButton: {
    // backgroundColor: 'orange',
    padding: 5,
    borderRadius: 5,
  },
  // quantityButtonText: {
  //   fontSize: 16,
  //   color: 'white',
  // },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
    color: 'black',
  },
  RemoveIcon:{
    // backgroundColor:COLOR.Danger,
    
  },



});

export default Cart;
