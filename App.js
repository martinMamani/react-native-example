import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, Button, Alert, TouchableOpacity } from 'react-native';
import imageCat from './assets/cat.png';
import * as imagePicker from 'expo-image-picker';


const App = () => {

  const [selectedImage, setSelectedImage] = useState(null)

  let openImagePickerAsync = async () => {
    const permisoResult = await imagePicker.requestMediaLibraryPermissionsAsync()

    if (permisoResult.granted === false) {
      alert('Los permisos de la camara son requeridos')
      return;
    }

    const pickerResult = await imagePicker.launchImageLibraryAsync()

    if (pickerResult.cancelled === true) {
      return;
    }
    setSelectedImage({ localUri: pickerResult.uri })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello Word</Text>
      <Image
        source={{ uri: selectedImage !== null ? selectedImage.localUri : 'https://picsum.photos/200/200' }}
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
        onPress={openImagePickerAsync}
      >
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    </View >
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#292929' },
  title: { fontSize: 30, color: '#fff' },
  image: { height: 200, width: 200, borderRadius: 100, resizeMode: 'contain' },
  button: { backgroundColor: 'deepskyblue', padding: 7, marginTop: 10, },
  buttonText: { color: '#fff', fontSize: 20 }
})

export default App;