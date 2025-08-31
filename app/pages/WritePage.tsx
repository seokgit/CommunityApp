import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native';

function WritePage() {

  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.textContainer}>
      <Text style={styles.label}>Title</Text>
      <TextInput style={styles.textInput}/>
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.label}>Subject</Text>
      <TextInput style={styles.textInput}/>
      </View>

      <View style={styles.textContainer}>        
      <TextInput style={{...styles.textInput, height: 300}} multiline={true}/>
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={{color: 'white'}}>Submit</Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

export default WritePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 10,    
    backgroundColor: 'white'
  },
  label: {
    fontSize: 16,
    fontWeight: '500'
  },
  textInput: {
    height: 40,         
    marginTop: 10,
    backgroundColor: '#E6E6E6'
  },
  textContainer: {
    paddingTop: 10
  },
  button: {    
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',    
    height: 50,    
    marginTop: 20,    
  }
})