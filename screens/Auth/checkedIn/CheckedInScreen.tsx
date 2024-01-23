import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../Styles";
import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function CheckedInScreen({ navigation }) {
  const [Username, setUsername] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    // Récupérer l'Username depuis AsyncStorage lors du chargement du composant
    const fetchUserInfos = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem('username');
        const storedToken = await AsyncStorage.getItem('uid')
        if (storedUsername && storedToken) {
          setUsername(storedUsername);
          setToken(storedToken.toString());
        }
      } catch (error) {
        console.error('Error fetching Username:', error);
      }
    };

    fetchUserInfos();
  }, []);
  return (
    <View style={[styles.container, {justifyContent: 'space-between'}]}>
        <View style={{marginTop: 100}}>
          <Text style={[styles.containerCheckedText, {fontSize: 30, textAlign: 'center'}]}>{Username}</Text>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <Text style={[styles.containerCheckedText, {fontSize: 15, marginVertical: 15}]}><Text style={{fontWeight: 'bold'}}>Amount ID:</Text>{token}</Text>
          </TouchableOpacity>
          <Image source={require('../../../assets/check_in_img.png')} />
          <Text style={{fontSize: 20, textAlign: 'center', color: '#269745', fontWeight: 'bold'}}>Checked In</Text>
        </View>
        <View style={{flexDirection: 'row', display: 'flex', justifyContent: 'flex-end', width: '100%'}}>
          <TouchableOpacity style={styles.checkedBtn} onPress={() => navigation.navigate('home')}>
            <Text style={styles.checkedBtnText}>Attendee Home</Text>
            <FontAwesome name="arrow-right" size={20} color="#269745" />
          </TouchableOpacity>
        </View>
    </View>
  )
}