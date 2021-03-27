import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, FlatList, Image, ScrollView, SectionList, StyleSheet, Text, TextInput, View } from 'react-native';
import { Components } from './component';
import logo from './assets/logo.png'; 
export default function App() {
  const [text, setText] = useState('');
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>First App</Text>
      <Text>Hello Tayyab</Text>
      <Button onPress={()=> alert('Button Clicked')} title="clickME"></Button>
      <Components />
      <Image source={logo} style={{ width: 305, height: 159 }} /> 
      <Image source={logo} style={{ width: 305, height: 159 }} /> 
      <Image source={logo} style={{ width: 305, height: 159 }} /> 
      <StatusBar style="auto" />
        <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={text => setText(text)}
        defaultValue={text}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {text.split(' ').map((word) => word && '🍕').join(' ')}
      </Text>
      <FlatList
        data={[
          {key: 'Devin'},
          {key: 'Dan'},
          {key: 'Dominic'},
          {key: 'Jackson'},
          {key: 'James'},
          {key: 'Joel'},
          {key: 'John'},
          {key: 'Jillian'},
          {key: 'Jimmy'},
          {key: 'Julie'},
        ]}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
      <SectionList
          sections={[
            {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}/>
    </View></ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
