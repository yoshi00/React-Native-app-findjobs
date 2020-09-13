import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('screen')

const styles = StyleSheet.create({
    input: {
		alignSelf: 'stretch',
		height: 45,
		backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 20,
        marginBottom: 20,
        paddingHorizontal: 15,
        paddingVertical: 5,
        elevation: 2
    },
    container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#24FF7E'
	},
	label: {
		marginLeft: 20,
		fontSize: 20
	},
	buttonSignUpContainer: {
		marginBottom: 40,
		marginTop: 50,
	},
	btnSignUp: {
		  backgroundColor: '#fff',
          width: WIDTH - 270,
          borderRadius: 75,
          paddingHorizontal: 25,
          paddingVertical: 5,
          paddingLeft: 15,
          marginHorizontal: 110,
		  elevation: 4,
		  textAlign: 'center',
	}

});

export default styles;