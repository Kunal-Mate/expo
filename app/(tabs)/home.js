import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeroCardTab from '../../src/components/HeroCardTab';
import CategoriesTab from '../../src/components/CategoriesTab';
import PetListCardTab from '../../src/components/PetListCardTab';
import React from 'react';
import COLOR from '../../src/constants/COLOR';

const home = () => {
  return (
      <View style={{ flex: 1, backgroundColor:COLOR.White }}>
        <HeroCardTab/>

        <CategoriesTab/>

        <PetListCardTab/>
      </View>
    );
}

export default home