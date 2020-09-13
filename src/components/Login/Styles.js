import { StyleSheet, Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('screen')

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#24FF7E',
        justifyContent: 'center',
        alignItems: 'center',
      },

      input: {
          width: '98%',
          backgroundColor: '#fff',
          padding: 15,
          marginBottom: 10,
          borderRadius: 45,
      },
      btnContainer: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignSelf: 'stretch',
          marginTop: 10,
      },
      userBtn: {
          backgroundColor: '#13FF55',
          width: WIDTH - 270,
          borderRadius: 75,
          paddingHorizontal: 15,
          paddingVertical: 5,
          paddingLeft: 15,
          marginHorizontal: 15,
          elevation: 2,
      },
      btnTxt: {
          fontSize: 16,
          textAlign: 'center',
      },
      name: {
          fontSize: 35,
          marginBottom: 15,
      },
      
})

export default styles;