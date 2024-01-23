import React, { useEffect, useState } from 'react';
import { Text, View, Image } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../Styles';
import { Base64 } from 'js-base64'

export default function Home() {
  const [email, setEmail] = useState('');
  const [image, setImage] = useState('');
  

  useEffect(() => {
    // Récupérer l'email depuis AsyncStorage lors du chargement du composant
    const fetchEmail = async () => {
      try {
        const storedEmail = await AsyncStorage.getItem('username');
        const storedImage = await AsyncStorage.getItem('image');
        if (storedEmail && storedImage) {
          setEmail(storedEmail);
          setImage(storedImage);
        }
        console.log(image);
      } catch (error) {
        console.error('Error fetching email:', error);
      }
    };

    fetchEmail();
  }, []);

  return (
    <View style={styles.container}>
      <Text>Bonjour {email}</Text>
      <Image source={{uri: `data:image/png;base64,${image.toString()}`}}style={{width: 200, height: 200}} />
    </View> 
  );
}
