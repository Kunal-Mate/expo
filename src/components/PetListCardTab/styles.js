import { StyleSheet } from "react-native";
import  COLORS  from "../../constants/COLOR";

const styles = StyleSheet.create({
    petcontainer: {
      paddingHorizontal: 20,
      paddingTop: 10,
      paddingBottom:10,
    },
    more: {
      flexDirection: "row",
      marginRight: 30,
    },
    arrow: {
      alignSelf: "center",
    },
  
    Heading: {
      flexDirection: "row",
      marginBottom: 10,
    },
    ListTitle: {
      flex: 1,
      fontSize: 20,
      fontWeight: "700",
      marginLeft: 20,
    },
    Explore: {
      fontSize: 15,
      fontWeight: "700",
      alignSelf: "center",
      color: COLORS.Gray
    },


   
  });
  
  export default styles;