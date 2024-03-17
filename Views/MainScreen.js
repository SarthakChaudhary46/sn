import React, { useState } from 'react';
import { View, Text, ScrollView, Pressable, Modal, Button, Image } from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';
import styles from './MainScreenStyle';
import logo from "../assets/SN.png";
import LeadershipPage from './LeadershipPage';
import WhatWeDo from './WhatWeDo';

const MainScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();

  const handleDropdownSelect = (index, value) => {
    if (value === 'Leadership Page') {
      navigation.navigate('LeadershipPage');
    }

    if (value === 'What we do') {
      navigation.navigate('WhatWeDo');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgPlace}>
        <Image source={logo} />
      </View>
      <Text style={styles.innerText}>Hello Sarthak</Text>

      <Modal
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="slide"
        presentationStyle="pageSheet">
        <View style={styles.modalContent}>
          <View style={styles.imgPlaceModal}>
            <Image source={logo}/>
          </View>
          <Text style={styles.modalText}> Contact Details </Text>
          <Text style={styles.modalText1}>Address : Plot 84, Institutional Area, Sector 32, Gurugram 122001, India</Text>
          <Text style={styles.modalText2}>Phone : +1 (214) 919-5557</Text>
          <Text style={styles.modalText3}>E-Mail : reach@statusneo.com</Text>
          <View style={styles.contactButtonContainer}>
            <Button title="Close" onPress={() => setIsModalVisible(false)} color='black' />
          </View>
        </View>
      </Modal>

      <View style={styles.dropdownContainer}>
        <ModalDropdown
          options={['Leadership Page', 'What we do', 'Social media','Industries']}
          defaultValue="MENU" // Set the default value to "MENU"
          PERMANENTValue= "Menu"
          textStyle={{ fontSize: 16 }}
          dropdownTextStyle={{ fontSize: 20, backgroundColor:'#b3a900', color:'black',fontWeight: 'bold' }}
          onSelect={handleDropdownSelect}
        />
      </View>

      <View style={styles.contactButtonContainer}>
        <Button title="Contact Us" onPress={() => setIsModalVisible(true)} color="black" />
      </View>
    </View>
  );
};

export default MainScreen;
