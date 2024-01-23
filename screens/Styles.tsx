import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignContent: 'center',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
    },
    imageLogo: {
        width: 300, // Remplacez par la largeur souhaitée
        height: 200,
    },
    titleSection:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        alignContent: 'center',
    },
    titleApp: {
        color: '#757575',
        fontSize: 27,
        fontWeight: 'bold',
        marginBottom: 10
    },
    buttonSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '13%',
        marginVertical: 40
    },
    btnLogIn: {
        backgroundColor: '#269745',
        paddingHorizontal: 150,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 20
    },
    btnSignUp: {
        backgroundColor: '#D6D6D6',
        paddingHorizontal: 150,
        height: 40,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        alignContent: 'center',
        borderRadius: 20
    },
    btnText:{
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
    welcomeTitle: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    descriptionText: {
        textAlign: 'center',
        paddingVertical: 20
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderWidth: 1, // Bordure autour de l'ensemble du TextInput
        borderColor: '#707070',
        borderRadius: 5, // Si vous voulez des coins arrondis
        marginVertical: 10,
        padding: 10, // Espace intérieur pour l'icône et le texte
        width: 380
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        height: 40,
        color: '#000',
      },
      socialIconsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
      },
      socialIcon: {
        borderRadius: 100,
        width: 60,
        height: 60,
        padding: 20,
        borderWidth: 1,
        borderColor: '#707070',
        textAlign: 'center'
      },
      checkedBtn:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 130,
        marginHorizontal: 20,
        marginBottom: 20,
      },
      checkedBtnText:{
        color: '#269745',
      },
      containerCheckedText:{
        color: '#269745',
      },
});