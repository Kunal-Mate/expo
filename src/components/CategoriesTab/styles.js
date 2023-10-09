import { StyleSheet } from "react-native";
import  COLORS  from "../../constants/COLOR";

const styles = StyleSheet.create({
  categories: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 20,
    marginLeft: 20,
    
  },
  cateListContainer: {
    margin: 15,
  },
  ItemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 1,
    
    
  },
  cateItem: {
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "#5e5e5e",
    backgroundColor: COLORS.Gray1,
    borderRadius: 25,
    elevation: 2,
    shadowColor: COLORS.Black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginLeft: 5,
  },
  itemtext: {
    fontSize: 15,
    color: COLORS.White,
  },
});
export default styles;
