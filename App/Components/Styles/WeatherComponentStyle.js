import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 20,
    borderColor: 'black',
    borderRadius: 10,
    shadowOffset: { width: 10, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: 'orange'
  },
  text: {
    color: 'black',
    fontFamily: 'Geeza Pro',
    fontWeight: 'bold',
    backgroundColor: 'transparent'
  }
})
