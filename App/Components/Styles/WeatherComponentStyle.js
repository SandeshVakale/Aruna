import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    padding: 5,
    margin: 5,
    borderColor: 'black',
    borderRadius: 10,
    borderWidth: 1,
    shadowOffset: { width: 10, height: 5 },
    shadowColor: 'black',
    shadowOpacity: 0.5,
    backgroundColor: 'gray'
  },
  text: {
    color: 'white'
  }
})
