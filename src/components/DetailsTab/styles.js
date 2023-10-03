import {StyleSheet} from 'react-native';
import FONT from '../../constants/FONT';

const styles = StyleSheet.create({
 Detail_Title:{
    margin:15,
    paddingTop: 7,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: "row",
  },
  Details_name: {
    marginLeft:5,
    padding: 15,
    flexDirection: "row",
  },
  Details_info:{
    marginLeft: 15,
    marginRight: 15,
    marginTop:5,
    marginBottom:5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  Details: {
    flexDirection: "row",
    paddingTop:5,
    paddingBottom:5
  },
  labal:{
    fontFamily: "sans-serif",
    fontSize: FONT.Body,
  },
  data:{
    marginRight:5,
    fontFamily: "sans-serif",
    fontSize: FONT.Body,
    fontWeight: "bold",
  },
  Description:{
    margin:15,
    flex:1,
  },
  DesData:{
    textAlign: "justify",
    fontFamily: "sans-serif",
    fontSize: FONT.Body,
    fontWeight: "bold",
  },
});
export default styles;