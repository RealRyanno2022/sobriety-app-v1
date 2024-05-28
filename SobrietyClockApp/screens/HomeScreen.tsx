import React from 'react';
import { View, StyleSheet } from 'react-native';
import SobrietyClock from '../components/SobrietyClock/SobrietyClock';
import UploadImage from '../components/SobrietyClock/UploadImage';

const HomeScreen: React.FC = () => {
  const sobrietyStartDate = new Date('2022-01-01'); // Replace with actual start date

  return (
    <View style={styles.container}>
      <SobrietyClock startDate={sobrietyStartDate} />
      <UploadImage />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
