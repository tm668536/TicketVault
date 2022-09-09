import React, { Component, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View
} from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import concert from './assets/concert.png';

export default function App() {
  const [Tickets, setTickets] = useState(null);
  const [TotalTicketsCostText, setTotalTicketsCostText] = useState('');
  const [TicketCost, setTicketCost] = useState(99.99);

  function onPress() {
    setTotalTicketsCostText('Ticket Cost: ' + Tickets * TicketCost);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ticket Vault</Text>
      <TextInput
        style={styles.textinput}
        placeholder="Number of Tickets"
        onChangeText={(newText) => setTickets(newText)}
        defaultValue={Tickets}
      />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttontext}>Find The Cost</Text>
      </TouchableOpacity>
      <Text style={styles.results}>{TotalTicketsCostText}</Text>
      <Image source={concert} style={styles.img} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 45,
    padding: 20,
  },
  textinput: {
    fontSize: 20,
    marginBottom: 10
  },
  results: {
    fontSize: 20,
    padding: 10,
  },
  button: {
    textAlign: 'center',
    backgroundColor: 'pink',
    padding: 10,
    borderRadius: 5,
  },
  buttontext: {
    textAlign: 'center',
    fontSize: 20,
  },
  img: {
    height: 200,
    width: 500,
  },
});
