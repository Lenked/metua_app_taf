import React from 'react'
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../Styles'

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <Image source={require('../../assets/logo_app.png')} style={styles.imageLogo} />
        <View style={styles.titleSection}>
          <Text style={styles.titleApp}>METUA DRIVER</Text>
          <Text>Register your taxi and start working</Text>
        </View>
        <View style={styles.buttonSection}>
          <TouchableOpacity style={styles.btnLogIn} onPress={() => navigation.navigate('login')}>
              <Text style={styles.btnText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSignUp} onPress={() => {Alert.alert('Aucune fonctionnalité')}}>
              <Text style={[styles.btnText, {color: '#000000'}]}>Sign up</Text>
          </TouchableOpacity>
        </View>
    </View>
  )
}
