import React, { useEffect, useState } from 'react'
import { Alert, Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from '../../Styles'
import Icon from 'react-native-vector-icons/Ionicons';
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [secureTextEntry, setSecureTextEntry] = useState(true);

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const handleLogin = async () => {
    
    try { // dariel@metua.org and 000000
 
        fetch(
            `https://dev.metuaa.com/metua/driver/request/token?db=metuaerp_db&login=${email}&password=${password}`, 
            {
                method: 'POST'
            }
        )
        .then(res => res.json())
        .then((data) => {
            console.log(data)
           AsyncStorage.setItem('email', data.data.email);
           AsyncStorage.setItem('username', data.data.name);
           AsyncStorage.setItem('image', data.data.image_base64)
           AsyncStorage.setItem('uid', data.data.uid)
  
           const storedEmail =  AsyncStorage.getItem('email');
           const storedUsername = AsyncStorage.getItem('username');
           const storedImage = AsyncStorage.getItem('image')
           console.log('Stored Email:', storedEmail);
           console.log('Stored Username:', storedUsername);
           console.log('Stored Image:', storedImage);
           navigation.navigate('checkedIn')
        })
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <View>
        <View style={styles.container}>
        <Image source={require('../../../assets/logo_app.png')} style={{width: 200, height: 100,}} />
        <View style={styles.titleSection}>
          <Text style={styles.welcomeTitle}>Welcome</Text>
          <Text style={styles.descriptionText}>By signing in you are agreeing our  {'\n'} <Text style={{color: '#269745'}}>Term and privacy policy</Text></Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'column'}}>
            <View style={styles.inputContainer}>
                <Icon name="mail-outline" size={20} color="#707070" style={styles.icon} />
                <TextInput
                   style={styles.input}
                    placeholder="Email"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={setEmail}
                />
            </View>
            <View style={styles.inputContainer}>
      <Icon name="lock-closed-outline" size={20} color="#707070" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Mot de passe"
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        value={password}
        onChangeText={setPassword}
      />
      <Icon
        name={secureTextEntry ? 'eye-outline' : 'eye-off-outline'}
        size={20}
        color="#707070"
        style={styles.icon}
        onPress={toggleSecureEntry}
      />
    </View>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.btnLogIn} onPress={handleLogin}>
              <Text style={styles.btnText}>Log in</Text>
          </TouchableOpacity>
          <Text style={styles.descriptionText}>or connect with</Text>
          <View style={styles.socialIconsContainer}>
      <FontAwesome name="google" size={20} color="#4285F4" style={styles.socialIcon} />
      <FontAwesome name="facebook" size={20} color="#4267B2" style={styles.socialIcon} />
      <Icon name="call-outline" size={20} color="#34B7F1" style={styles.socialIcon} />
    </View>
          <TouchableOpacity style={[styles.btnLogIn, {marginVertical: 25}]} onPress={() => navigation.navigate('index')}>
              <Text style={styles.btnText}>Lewootrack</Text>
          </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}
