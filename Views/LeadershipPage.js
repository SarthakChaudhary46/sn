import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, ScrollView,Pressable } from 'react-native'; // Add SafeAreaView and ScrollView imports
import logo from "../assets/SN.png";
import ModalDropdown from 'react-native-modal-dropdown';
import { useNavigation } from '@react-navigation/native';
import styles from './LeadershipStyle';


const LeadershipPage = () => {
    const karanImage = require("../assets/Karan.png");
    const vereshImage = require("../assets/Veresh.png");
    const rohitImage = require("../assets/Rohit.png");
    const anandImage = require("../assets/Anand.png");

    const navigation = useNavigation();

    const handleLogoPress = () => {
        navigation.navigate('MainScreen');
        
      };

      const handleDropdownSelect = (index, value) => {
        if (value === 'Leadership Page') {
          navigation.navigate('LeadershipPage');
        }
    
        if (value === 'What we do') {
          navigation.navigate('WhatWeDo');
        }
      };

    const menuItems = ['Leadership Page', 'What we do', 'Social media', 'Industries'];

    return (
        <View style={styles.container}>
            <Pressable onPress={handleLogoPress}>
                <View style={styles.imgPlace}>
                     <Image source={logo} style={styles.logo} />
                </View>
            </Pressable>
            <View style={styles.dropdownContainer}>
        <ModalDropdown
          options={['Leadership Page', 'What we do', 'Social media','Industries']}
          defaultValue="Menu"
          textStyle={{ fontSize: 16 }}
          dropdownTextStyle={{ fontSize: 20, backgroundColor:'#b3a900', color:'black',fontWeight: 'bold' }}
          onSelect={handleDropdownSelect}
        />
             </View>
            <ScrollView style={styles.imgContainer}>
                <View style={styles.card}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Karan Nangru</Text>
                    </View>
                    <Image source={karanImage} style={styles.image} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.typeText}>Founder & CEO</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Veresh Sita</Text>
                    </View>
                    <Image source={vereshImage} style={styles.image} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.typeText}>President & CCO</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Rohit Dokania</Text>
                    </View>
                    <Image source={rohitImage} style={styles.image} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.typeText}>Head of Finance</Text>
                    </View>
                </View>
                <View style={styles.card}>
                    <View style={styles.nameContainer}>
                        <Text style={styles.name}>Anand Subramanian</Text>
                    </View>
                    <Image source={anandImage} style={styles.image} />
                    <View style={styles.nameContainer}>
                        <Text style={styles.typeText}>Head of Americas</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default LeadershipPage;
