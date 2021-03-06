import React from 'react';
import {StyleSheet, Text, View} from "react-native"

function Header(props) {
    return (
        <View style={styles.header}>
             <Text style={styles.title}>
                 Martins Todos
             </Text>
        </View>
    );
}

export default Header;


const styles = StyleSheet.create({
    header: {
      height: 80,
      paddingTop: 38,
      backgroundColor: 'coral'
    },
    title:{
      textAlign:"center",
      fontSize:20,
      fontWeight: 'bold',
      color:"white"
    }
 })