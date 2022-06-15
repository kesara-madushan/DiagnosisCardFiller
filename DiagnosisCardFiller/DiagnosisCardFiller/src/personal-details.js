import * as React from 'react';
import {TextInput, RadioButton, Button} from 'react-native-paper';
import {View, StyleSheet, Text, ScrollView} from 'react-native';
import Page2 from './page2';

const PersonalDetails = ({navigation}) => {
  const [text, setText] = React.useState('');
  const [value, setValue] = React.useState('first');

  return (
    <ScrollView>
      <Text style={styles.Heading}>Personal Details</Text>
      <View style={styles.Container}>
        <TextInput
          style={styles.text}
          label="Personal Health No"
          mode="outlined"
          value={text}
          onChangeText={text => setText(text)}
        />
        <Button mode="contained" onPress={() => console.log('Start listening')}>
          Start
        </Button>
      </View>

      <TextInput
        style={styles.text}
        label="Contact No"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.text}
        label="Patient's Name"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />
      <TextInput
        style={styles.text}
        label="NIC"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.text}
        label="Blood Group"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.text}
        label="Allergy (Drug/Food/Other)"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.text}
        label="Hospital"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.text}
        label="BHT No"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.text}
        label="Ward/Unit"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <View style={styles.RadioBuutonBox} mode="">
        <Text style={styles.Label}>Sex</Text>
        <RadioButton.Group
          onValueChange={value => setValue(value)}
          value={value}>
          <RadioButton.Item label="Male" value="male" />
          <RadioButton.Item label="Female" value="female" />
        </RadioButton.Group>
      </View>

      <TextInput
        style={styles.text}
        label="Age"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.text}
        label="Date of Admission"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.text}
        label="Date of Discharge"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <Button
        style={styles.Next}
        mode="contained"
        onPress={() => navigation.navigate('Page2')}>
        Next
      </Button>
    </ScrollView>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  Heading: {
    margin: 10,
    fontSize: 30,
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
  Container: {
    flex: 6,
    flexDirection: 'column',
  },
});
