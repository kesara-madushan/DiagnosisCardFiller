import * as React from 'react';
import {TextInput, RadioButton, Button} from 'react-native-paper';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import {Header} from './header';

const Login = ({navigation}) => {
  return (
    <View>
      <View style={styles.Content}>
        <Text style={styles.Heading}>Login</Text>
        <TextInput style={styles.text} label="User Name" mode="outlined" />

        <TextInput style={styles.text} label="Password" mode="outlined" />

        <Button
          style={styles.Next}
          mode="contained"
          onPress={() => navigation.navigate('Personal Details')}>
          Next
        </Button>
      </View>

      <Text style={styles.Link}>Don't have an account? Click Here!</Text>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  Content: {
    justifyContent: 'center',
  },
  text: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  Heading: {
    margin: 10,
    fontSize: 30,
    color: 'blue',
  },
  RadioBuutonBox: {
    textAlign: 'center',
    justifyContent: 'space-between',
    padding: 15,
  },
  Label: {
    fontSize: 18,
  },
  Next: {
    marginBottom: 10,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
  },
  Link: {
    margin: 10,
    fontSize: 18,
    color: 'blue',
  },
});
