import {Tabs} from 'expo-router';
import {View, Text, Image} from 'react-native';
import COLOR from '../../src/constants/COLOR';


export default () => {
  return (
    <Tabs screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/ICONS/home.png')}
                // name="home"
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLOR.RED : COLOR.Danger,
                }}
              />
              <Text style={{color: focused ? COLOR.RED : COLOR.Black, fontSize: 12}}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="expert"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/ICONS/veterinarian.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLOR.RED : COLOR.Black,
                }}
              />
              <Text style={{color: focused ? COLOR.RED : COLOR.Black, fontSize: 12}}>
                Expert
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="pet"
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/ICONS/pawprint.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLOR.RED : COLOR.Black,
                }}
              />
              <Text style={{color: focused ? COLOR.RED : COLOR.Black, fontSize: 12}}>
                Pet
              </Text>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          tabBarBadge: 3,
          tabBarIcon: ({focused}) => (
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={require('../../assets/ICONS/shopping-cart.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? COLOR.RED : COLOR.Black,
                }}
              />
              <Text style={{color: focused ? COLOR.RED : COLOR.Black, fontSize: 12}}>
                Cart
              </Text>
            </View>
          ),
        }}
      />
    </Tabs>
  );
};
