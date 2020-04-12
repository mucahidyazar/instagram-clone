/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from '../../../components/Button';
import Text from '../../../components/Text';

const Welcome = props => {

  const [newAccountInfos, setNewAccountInfos] = useState(props.navigation.getParam('newAccountInfos'));

  return (
    //STEP 3 - WELCOME SCREEN
    <View style={styles.welcomePage}>
    <View style={styles.welcomePageBody}>
      <Text center dark style={{textTransform: 'uppercase'}}>Welcome to Instagram,</Text>
      <Text dark center>{newAccountInfos.fullName}</Text>
      <Text light center>Find people to follow and start sharing photos. You can change your username anytime.</Text>
      <View style={styles.welcomePageButtons}>
        <Button name="Next" color />
        <Button name="Change Username" />
      </View>
    </View>
    <View style={styles.welcomePageFooter}>
      <Text light center>By clicking Next, you agree to our <Text dark>Terms, Data, Polict</Text> and <Text dark>Cookies Policy</Text></Text>
    </View>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: '5%',
  },
  welcomePage: {
    paddingHorizontal: '5%',
    justifyContent: 'space-between',
    height: '100%',
  },
  welcomePageBody: {
    height: '90%',
    justifyContent: 'center',
  },
  welcomePageButtons: {
    paddingVertical: '10%',
  },
  welcomePageFooter: {
    height: '10%',
  },
});

export default Welcome;