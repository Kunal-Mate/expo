import { Redirect } from "expo-router"
import AsyncStorage from '@react-native-async-storage/async-storage';

// getUserInfo = async () => {
//   try {
//     const userInfoString = await AsyncStorage.getItem('userInfo');
//     if (userInfoString !== null) {
//       const userInfo = JSON.parse(userInfoString);
//     } else {
//       console.log('userInfo not found');
//     }
//   } catch (error) {
//     console.error('Error retrieving userInfo:', error);
//   }
// }

// // Call the function to retrieve userInfo
// getUserInfo();
// console.log(userInfo)

const StartPage = () => {
  return <Redirect href='/Login' />;
}

export default StartPage;