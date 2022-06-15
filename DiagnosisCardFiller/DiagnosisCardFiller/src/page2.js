import * as React from 'react';
import {TextInput, RadioButton, Button, Divider} from 'react-native-paper';
import {View, StyleSheet, Text, ScrollView} from 'react-native';

const Page2 = ({navigation}) => {
  const [text, setText] = React.useState('');
  const [admission, setAdmission] = React.useState('');
  const [discharge, setDischarge] = React.useState('');
  const [diseaseNotification, setDiseaseNotification] = React.useState('');
  const [medicalCertificate, setMedicalCertificate] = React.useState('');
  const [insuranceForm, setInsuranceForm] = React.useState('');

  return (
    <ScrollView>
      <Text style={styles.Heading}>Page 2</Text>

      <TextInput
        style={styles.text}
        label="Co-morbidities/Suguries/Procedures"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
        multiline={true}
        numberOfLines={5}
      />

      <View style={styles.RadioBuutonBox} mode="">
        <Text style={styles.Label}>Mode of Admission</Text>
        <RadioButton.Group
          onValueChange={value => setAdmission(value)}
          value={admission}>
          <RadioButton.Item label="Self" value="Self" />
          <RadioButton.Item
            label="Requested/Reffered"
            value="Requested/Reffered"
          />
          <RadioButton.Item label="Transfered in" value="Transfered in" />
        </RadioButton.Group>
      </View>

      <Divider />

      <View style={styles.RadioBuutonBox} mode="">
        <Text style={styles.Label}>Mode of Discharge</Text>
        <RadioButton.Group
          onValueChange={value => setDischarge(value)}
          value={discharge}>
          <RadioButton.Item label="Routine" value="Routine" />
          <RadioButton.Item label="Transfered out" value="Transfered out" />
          <RadioButton.Item label="Self discharge" value="Self discharge" />
        </RadioButton.Group>
      </View>

      <Divider />

      <View style={styles.RadioBuutonBox} mode="">
        <Text style={styles.Label}>Disease Notification</Text>
        <RadioButton.Group
          onValueChange={value => setDiseaseNotification(value)}
          value={diseaseNotification}>
          <RadioButton.Item label="Yes" value="Yes" />
          <RadioButton.Item label="No" value="No" />
        </RadioButton.Group>
      </View>

      <Divider />

      <View style={styles.RadioBuutonBox} mode="">
        <Text style={styles.Label}>Medical Certification</Text>
        <RadioButton.Group
          onValueChange={value => setMedicalCertificate(value)}
          value={medicalCertificate}>
          <RadioButton.Item label="Yes" value="Yes" />
          <RadioButton.Item label="No" value="No" />
        </RadioButton.Group>
      </View>

      <Divider />

      <View style={styles.RadioBuutonBox} mode="">
        <Text style={styles.Label}>Insurance Form Filled</Text>
        <RadioButton.Group
          onValueChange={value => setInsuranceForm(value)}
          value={insuranceForm}>
          <RadioButton.Item label="Yes" value="Yes" />
          <RadioButton.Item label="No" value="No" />
        </RadioButton.Group>
      </View>

      <TextInput
        style={styles.text}
        label="Consultants Name"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.text}
        label="HO/MO Name"
        mode="outlined"
        value={text}
        onChangeText={text => setText(text)}
      />

      <View style={styles.Row}>
        <Button
          style={styles.Next}
          mode="contained"
          onPress={() => navigation.navigate('Personal Details')}>
          Previous
        </Button>
        <Button
          style={styles.Next}
          mode="contained"
          onPress={() => console.log('Next')}>
          Next
        </Button>
      </View>
    </ScrollView>
  );
};

export default Page2;

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
  Row: {
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
