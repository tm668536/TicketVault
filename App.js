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

SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const App = () => {

  const [Tickets, setTickets] = useState(null);
  const [TotalTicketsCost, setTotalTicketsCost] = useState(null);
  const [TotalTicketsCostText, setTotalTicketsCostText] = useState("");
  const [TicketCost, setTicketCost] = useState(99.99);

  function onPress() {
    setTotalTicketsCost(Tickets * TicketCost)
    setTotalTicketsCostText("Ticket Cost: " + TotalTicketsCost)
  }

  return (
    <View style={styles.container}>
        <Text>Ticket Vault</Text>
        <TextInput
          placeholder="Number of Tickets"
          onChangeText={newText => setTickets(newText)}
          defaultValue={Tickets} />
        <TouchableOpacity
          style={styles.button}
          onPress={onPress()}>
          <Text>Find The Cost</Text>
        </TouchableOpacity>
        <Text>{TotalTicketsCostText}</Text>
        <Image source={concert} style={{ height: 200, width: 500 }} />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    textAlign: 'center',
    backgroundColor: 'pink',
    padding: 20,
    borderRadius: 5,
  },
});
