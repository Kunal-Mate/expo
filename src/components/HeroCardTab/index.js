import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./styles";
import Icon from "react-native-vector-icons/FontAwesome";
import avter from "../../../assets/IMGS/background.png";
import { SearchBar } from "react-native-elements";
import COLORS from '../../constants/COLOR';


state = {
    search: "",
  };
  
  updateSearch = (search) => {
    this.setState({ search });
  };
  const clear = () => {
    setValue('');        
    setShowCancel(false);
  }

const HeroCardTab = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          // height: 290,
          backgroundColor: "#F28C28",
          // backgroundColor: "#FFA500",
          // backgroundColor: COLORS.Orange,
          borderRadius: 20,
          margin: 5,
          elevation: 10,
        }}
      >
        <View style={styles.avtarTitle}>
          <Image style={styles.avatar} source={avter} />
          <Text style={styles.name}>Hi, Brother</Text>
          <View style={styles.IconBorder}>
            <Icon style={styles.Bellicon} name="bell" size={20} color={COLORS.White} />
          </View>
        </View>
        <Text style={styles.MainTitle}>Where do you want to go ?</Text>
        <View style={styles.SearchBar}>
          <SearchBar
            containerStyle={{
              backgroundColor: "transparent",
              borderColor: "transparent",
              borderRadius: 20,
            }}
            inputContainerStyle={{ backgroundColor: "white" }}
            placeholder="Type Here..."
            round
            cancelButtonTitle="Cancel"
            onCancel={clear}
            onChangeText={this.updateSearch}
          />
        </View>
      </View>
    </View>
  );
};

export default HeroCardTab;
