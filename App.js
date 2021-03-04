import React from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import imageCat from './assets/cat.png';


const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Word</Text>
      <Image
        source={{ uri: 'https://picsum.photos/200/200' }}
        //source={imageCat}
        style={styles.image}>
      </Image>
      {/* <Button
        title='hola'
        color='red'
        //onPress={() => console.log("hello")}
        onPress={() => Alert.alert('Boom! ')}
      >
      </Button> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => Alert.alert("Boom")}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#292929' },
  title: { fontSize: 30, color: '#fff' },
  image: { height: 200, width: 200, borderRadius: 100 },
  button: { backgroundColor: 'deepskyblue', padding: 7, marginTop: 10, },
  buttonText: { color: '#fff', fontSize: 20 }
})

export default App;