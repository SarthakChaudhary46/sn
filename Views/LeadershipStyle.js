import { StyleSheet } from 'react-native';

import logo from "../assets/SN.png"


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#a68350',
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },
    imgContainer:{
        marginTop:90,
        marginBottom:10,
    },
    imgPlace: {
        position: 'absolute',
        top: 20,
        left:60,
        alignItems: 'flex-end', 
        width:100
    },
    logo: {
        width: 350,
        height: 100,
    },
    dropdownContainer: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: 'transparent',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 10,
        paddingVertical: 8,
        paddingHorizontal: 9,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 16,
        borderWidth: 2,
        padding: 16,
        margin: 16,
        width: '80%',
        alignItems: 'center',
    },
    nameContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 16,
    },
    typeText: {
        fontSize: 22,
        fontWeight: 'bold',
    },
  });
  
  export default styles;
  