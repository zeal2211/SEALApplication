import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import BackgroundWrapper from '../../Components/BackgroundWrapper';
import styles from './defaultCSS';

const Index = ({ navigation }) => {
  return (
    <BackgroundWrapper>
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.title}>Time for a Break!</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()} // Close the break screen
          >
            <Text style={styles.buttonText}>Continue Working</Text>
          </TouchableOpacity>
        </View>
      </View>
    </BackgroundWrapper>
  );
};

export default Index;
