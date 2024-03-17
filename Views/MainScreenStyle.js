// MainScreenStyle.js
import { StyleSheet } from 'react-native';

import logo from "../assets/SN.png"

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a68350',
    flex: 1,
    width: '100%', // Adjust width to fill the screen
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative', // Ensure proper positioning of elements
  },
  imgPlace: {
    position: 'absolute',
    top: 20,
    left:360,
    alignItems: 'flex-end', 
    width:1
    
  },
  imgPlaceModal: {
    position: 'absolute',
    top: 20,
    alignItems: 'center',
    left: 15,
  },
  innerText: {
    fontSize: 50,
    color: 'white',
    marginBottom: 20,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#b3a900',
    padding: 60,
  },
  modalText: {
    color: 'black',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  modalText1: {
    color: 'white',
    marginBottom: 20,
    fontSize: 20,
  },
  modalText2: {
    color: 'white',
    marginBottom: 20,
    fontSize: 20,
  },
  modalText3: {
    color: 'white',
    marginBottom: 20,
    fontSize: 20,
  },
  contactButtonContainer: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  dropdownContainer: {
    position: 'absolute',
    top: 40,
    right: 20,
    backgroundColor: 'transparent', // Set background color to transparent
    borderWidth: 1,
    borderColor: 'white', // Set border color to white
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 9,

  },
  dropdownText: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
  },
  dropdownTextStyle: {
    fontSize: 26,
    color: 'white',
    fontWeight: 'bold', // Set dropdown text color to black
  },
  dropdownMenu: {
    backgroundColor: '#b3a900', // Set dropdown menu color
  },
});

export default styles;
