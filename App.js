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

  const Title = () => {
    return (
      <View>
        <Text>Ticket Vault</Text>
      </View>
    );
  }

  const TicketInput = () => {
    const [text, setText] = useState('');

    return (
      <View>
        <TextInput
          placeholder="Number of Tickets"
          onChangeText={newText => setText(newText)}
          defaultValue={text} />
      </View>
    );
  }
  
  function CalcButton() {

    return (
      <View>
        <TouchableOpacity
          style={styles.button}
          onPress={setTotalTicketsCost(Tickets * TicketCost)}>
          <Text>Find The Cost</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const ResultText = () => {

    setTotalTicketsCostText("Ticket Cost: " + TotalTicketsCost)

    if (TotalTicketsCost != null) {
      return (
        <View>
          <Text>{TotalTicketsCostText}</Text>
        </View>
      );
    }
  }

  const ConcertImage = () => {
    return (
      <View>
        <Image source={concert} style={{ height: 200, width: 500 }} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title />
      <TicketInput />
      <CalcButton />
      <ResultText />
      <ConcertImage />
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
