import { StyleSheet } from "react-native";
import COLOR from "../../constants/COLOR";

const styles = StyleSheet.create({
container: {
    width: "100%",
  },
  avtarTitle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 20,
    marginRight: 20,
  },
  avatar: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "rgb(170, 207, 202)",
  },
  name: {
    color: "#FFFFFF",
    fontSize: 18,
    alignSelf: "center",
    paddingLeft: 10,
    flex: 1,
  },
  IconBorder: {
    width: 30,
    height: 30,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgb(170, 207, 202)",
    alignSelf: "center",
  },
  Bellicon: {
    alignSelf: "center",
    paddingTop: 3,
  },
  MainTitle: {
    // color: "#fff",
    color: COLOR.White,
    fontSize: 30,
    fontWeight: "700",
    marginTop: 40,
    marginLeft: 20,
    marginRight: 20,
  },
  SearchBar: {
    padding: 10,
  },
});

export default styles;