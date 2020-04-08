/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { View, StyleSheet, TextInput, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';
import Icon from 'react-native-vector-icons/AntDesign';
import IconF from 'react-native-vector-icons/FontAwesome5';
import Modal from '../../components/Modal';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Text from '../../components/Text';
import phoneCodes from '../../data/CountryCodes.json';

const CreateNewAccount = props => {

  let activeContent;
  const [activeTab, setActiveTab] = useState('phone');
  const activeTabHandler = (value) => {
    if (activeTab === value) {
      return 1;
    } else {
      return 0;
    }
  }


  if (activeTab === 'phone') {
    activeContent = (
      <View style={styles.phoneContentTop}>
        <View style={styles.phoneContent}>
          <View style={styles.countryBody}>
            <Text style={styles.lightText} onPress={() => setModal(!modal)}>US +1</Text>
          </View>
          <View style={styles.phoneBody}>
            <TextInput style={styles.phoneInput} placeholder="Phone" keyboardType={'numeric'} maxLength={10} />
            <Text style={styles.inputCleaner}>X</Text>
          </View>
        </View>
        <View style={styles.phoneNote}><Text style={styles.lightText}>You may receive SMS updates from instagram and can opt out at any time</Text></View>
      </View>
    )
  } else if (activeTab === 'email') {
    activeContent = (
      <View style={styles.emailContent}>
        <TextInput style={styles.emailInput} placeholder="Email" />
      </View>
    )
  }

  //If the database has the email or phone this Modal will shown
  const hasUser = (
    <Modal>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.modalTitle}>
            <Text style={styles.modalTitleText}>This email is on another account</Text>
          </View>
          <View style={styles.modalDescription}>
            <Text style={styles.modalDescriptionText}>You can log into the account assosiated with that email or you can use that email to make a new account</Text>
          </View>
          <View style={{ paddingVertical: 10 }}>
            <Text style={{ textAlign: 'center', padding: 10, fontWeight: 'bold', color: 'royalblue' }}>Log in to Existing Account</Text>
            <Text style={{ textAlign: 'center', padding: 10, }}>Create New Account</Text>
          </View>
        </View>
      </View>
    </Modal>
  )


  const [modal, setModal] = useState(false);
  const senModalHandler = () => {
    setModal(false);
  }
  const [code, setCode] = useState('+1');

  const countryPhoneCodeModal = (
    <Modal onClick={senModalHandler}>
      <View style={styles.languageContainer}>
        <View style={styles.languageContent}>
          <View style={styles.languageTitle}><Text style={styles.languageTitleText}>Select your dial-code</Text></View>
          <View style={styles.searchBox}>
            <Icon style={styles.searchIcon} name="search1" size={18} />
            <TextInput style={styles.searchInput} placeholder="Search" />
          </View>
          <ScrollView style={styles.langueageContainer}>
            {
              phoneCodes.map((phoneCode, index) => (
                phoneCode.code === code
                  ? <TouchableOpacity onPress={() => setCode(phoneCode.code)} key={index} activeOpacity={0.6}>
                    <View style={{ paddingVertical: 10, }}>
                      <Text style={{ fontSize: 20, textTransform: 'capitalize' }}>
                        {phoneCode.name} ({phoneCode.dial_code}) <Icon name="check" color="royalblue" size={20} /></Text></View></TouchableOpacity>
                  : <TouchableOpacity onPress={() => setCode(phoneCode.code)} key={index} activeOpacity={0.6}>
                    <View style={{ paddingVertical: 10, }}>
                      <Text style={{ fontSize: 20, textTransform: 'capitalize' }}>
                        {phoneCode.name} ({phoneCode.dial_code})</Text></View></TouchableOpacity>
              ))
            }
          </ScrollView>
        </View>
      </View>
    </Modal>
  )

  const [date, setDate] = useState("1991-01-01");

  return (
    // <View style={styles.createNewAccount}>
    //   <View style={styles.container}>
    //     <View style={styles.iconContainer}>
    //       <Icon name="user" size={75} style={styles.userIcon} />
    //     </View>
    //     <View style={styles.createBody}>
    //       <View style={styles.createWay}>
    //         <Text
    //           style={{ ...styles.createWith, borderBottomWidth: activeTabHandler('phone'), }}
    //           onPress={() => setActiveTab('phone')}>Phone</Text>
    //         <Text
    //           style={{ ...styles.createWith, borderBottomWidth: activeTabHandler('email'), }}
    //           onPress={() => setActiveTab('email')}>Email</Text>
    //       </View>
    //       {activeContent}
    //       <TouchableOpacity activeOpacity={0.8} onPress={() => props.navigation.navigate('CreateNewAccount')}>
    //         <Text style={styles.button}>
    //           Next
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View style={styles.footer}>
    //       <Text style={styles.lightText}>Already have an account? <Text style={styles.boldText} onPress={() => props.navigation.navigate('Login')}>Log in.</Text></Text>
    //     </View>
    //   </View>
    //   {modal ? countryPhoneCodeModal : null}
    // </View>

    //STEP - 1 - NAME and PASSWORD
    // <View style={styles.container}>
    //   <View style={styles.formNameAndPassword}>
    //     <Text style={styles.formNameAndPasswordTitle}>Name and Password</Text>
    //     <Input placeholder="Full name" />
    //     <Input placeholder="Password" />
    //     <View style={styles.savePasswordContainer}>
    //       <Icon name="checksquare" color="royalblue" style={{ padding: 10 }} size={20} />
    //       <Text name="Save Password" />
    //     </View>
    //     <Button style={{ marginVertical: '2%' }} name='Continue and Sync Contacts' color />
    //     <Button style={{ marginVertical: '2%' }} name='Continue without Syncing Contacts' />
    //   </View>
    //   <View style={styles.nameAndPasswordFooter}>
    //     <Text type="light" name="Your contaacts will be periodically synced and stored on instagram servers to help you and other find friends and to help us provide a better service. To remove contacts, go to settings and disconnect.">
    //     <Text name="Learn More." type="dark" />
    //     </Text>
    //   </View>
    // </View>

    
    //STEP - 2 - ADD YOUR BIRTHDAY
    <View style={styles.addYourBirthday}>
      <View style={styles.addYourBirthdayHeader}>
        <IconF name="cloud-meatball" size={30} />
        <IconF name="birthday-cake" size={100} style={{transform: [{rotateZ: '-15deg'}]}} />
        <IconF name="cloud-meatball" size={30} />
      </View>
      <Text style={{textAlign: 'center'}} size={30}>Add Your Birthday</Text>
      <Text style={{textAlign: 'center'}}>This won't be part of provide my birthday?</Text>
      <Text color="royalblue" style={{textAlign: 'center'}}>Why do I need to provide my birthday?</Text>
      <View style={styles.dateContainer}>
      <Text>{moment(date).format('MMMM Do YYYY')}</Text>
      <Text>{moment().diff(date, 'years', false)} Years Old</Text>
      </View>
      <Text type='light' style={{textAlign: 'center'}}>Use your own birthday, aeven if this account is for a business, a pet or something else.</Text>
      <Button color name="Next" />
        <View style={{position: 'relative', width: '100%', alignItems: 'center'}}>
          <DatePicker
            style={{width: Dimensions.get('window').width / 3 * 2}}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            minDate="2016-05-01"
            maxDate="2016-06-01"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                borderWidth: 1,
                borderColor: 'black',
              },
              dateInput: {
                borderWidth: 1,
                borderColor: 'black',
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(myDate) => setDate(myDate)}
          />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  addYourBirthday: {
    paddingHorizontal: '5%',
    justifyContent: 'space-evenly',
    height: '100%',
  },
  addYourBirthdayHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dateContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: '10%',
    paddingHorizontal: '3%',
  },
  createNewAccount: {
    position: 'relative',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '100%',
    paddingHorizontal: '5%',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '35%',
  },
  userIcon: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 75,
    textAlignVertical: 'center',
    textAlign: 'center',
  },

  //PHONE
  createBody: {
    height: '60%',
  },
  createWay: {
    flexDirection: 'row',
  },
  createWith: {
    width: '50%',
    textAlign: 'center',
    height: 50,
    textAlignVertical: 'center',
    textTransform: 'uppercase',
  },

  phoneContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  countryBody: {
    width: '20%',
  },
  phoneBody: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    paddingVertical: 10,
  },
  phoneInput: {
    width: '95%',
  },
  inputCleaner: {
    fontSize: 20,
    color: 'rgba(0,0,0,0.5)',
    width: '5%',
  },
  phoneNote: {
    paddingVertical: 20,
  },

  //EMAIL
  emailContent: {
    padding: 10,
  },
  emailInput: {
    paddingVertical: 15,
  },
  button: {
    textAlign: 'center',
    color: 'white',
    height: 50,
    textAlignVertical: 'center',
    borderRadius: 5,
    backgroundColor: 'royalblue',
  },
  lightText: {
    textAlign: 'center',
    color: 'rgba(0,0,0,0.5)',
  },
  boldText: {
    color: 'darkblue',
    fontWeight: 'bold',
  },
  footer: {
    height: '5%',
  },



  //MODAL
  languageContainer: {
    alignItems: 'center',
  },
  languageContent: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  languageTitle: {
    paddingVertical: '5%',
  },
  languageTitleText: {
    textTransform: 'uppercase',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    padding: 10,
    flexGrow: 1,
  },


  //MODAL
  modalContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  modalContent: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    paddingHorizontal: '5%',
  },
  modalTitle: {
    paddingVertical: 10,
  },
  modalDescription: {
    paddingVertical: 10,
  },
  modalTitleText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalDescriptionText: {
    textAlign: 'center',
  },


  //NAME AND PASSWORD  
  formNameAndPassword: {
    width: '100%',
    height: '60%',
  },
  formNameAndPasswordTitle: {
    textAlign: 'center',
    paddingVertical: 20,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  savePasswordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: '2%',
  },
  nameAndPasswordFooter: {
    paddingVertical: '10%',
  },
});

export default CreateNewAccount;