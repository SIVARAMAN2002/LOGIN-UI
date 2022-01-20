
import React from 'react';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import { ScrollView } from 'react-native-web';


export default function App() {
  return (
    
    <View style={styles.container}>
      <Text style={styles.login}>LOGIN{"\n"}{"\n"}</Text>
     
       <Text>USERID:</Text>
       <Text>{"\n"}</Text>
      <TextInput placeholder='ENTER THE VALID USER ID' style={styles.input} />
      <Text>{"\n"}</Text>
 
       <Text>PASSWORD:</Text>
       <Text>{"\n"}</Text>
       <TextInput
style={styles.pass}

placeholder=" Enter Your Password"          

underlineColorAndroid="transparent"

secureTextEntry={true}
/>

<Text>{"\n"}</Text>
<Button
        title="LOGIN"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
      <Text>{"\n"}</Text>
      <Text>Forgot Password?</Text>


    </View>
   
   
    
  );
}

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
    height: 45,width: "95%",borderColor: "gray",borderWidth: 2,alignContent:'flex-end'
  },

  pass:
  {height: 45,width: "95%",borderColor: "gray",borderWidth: 2},
  login:
  {
    fontSize:30,
    
  }
 

 
  
});