import {StyleSheet} from 'react-native';
import COLORS from '../../src/constants/COLOR';
import FONT from '../../src/constants/FONT';

const styles = StyleSheet.create({
  ActionContainer: {
    padding: 15,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  SliderContainer: {
    borderColor: COLORS.LigntGray,
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    height: 200,
  },
  ButtonContainer: {
    margin: 15,
    padding: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  Container: {
    height:700,
  },
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
