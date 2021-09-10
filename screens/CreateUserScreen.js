import React, { useState } from "react";
import {
  Button,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Text
} from "react-native";

import firebase from "../database/firebase";
//[age	sex	cp	trestbps	chol	fbs	restecg	thalach	exang	oldpeak	slope	ca	thal	target]=>[a,b,c,d,e,f,g,h,l,m,o,x,y]


const CreateUserScreen = (props) => {
  const initalState = {
    a: "",
    b :"",
    c : "",
    d : "",
    e : "",
    f : "",
    g : "",
    h : "",
    l : "",
    m : "",
    n : "",
    o  : "",
    x : "",
  };

  const [state, setState] = useState(initalState);

  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const saveNewUser = async () => {
    if (state.name === "") {
      alert("please provide a name");
    } else {
        await firebase.db.collection("users").doc("usr").set({
          a: state.a,
          b : state.b,
          c : state.c,
          d : state.d,
          e : state.e,
          f : state.f,
          g : state.g,
          h : state.h,
          l : state.l,
          m : state.m,
          n : state.n,
          o : state.o,
          x : state.x,
        });
        alert("saved")
    }
  };

  return (
    <ScrollView style={styles.container}>
      {/* Age */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>Age :</Text>
        <Text style ={styles.text}>Patient age in years</Text>
        <TextInput
          placeholder="Age(Continuous)"
          onChangeText={(value) => handleChangeText(value, "a")}
          value={state.age}
        />
      </View>
      {/*sex*/}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>Sex	:</Text>
        <Text style ={styles.text}>Patient gender (1 = male; 0 = female)</Text>
        <TextInput
          placeholder="sex(Categorical) 1 or 0 "
          onChangeText={(value) => handleChangeText(value, "b")}
          value={state.sex}
        /> 
      </View>{/*cp */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>Chest pain :</Text>
        <Text style ={styles.text}>(1 = typical angina; 2 = atypical angina; 3 = nonanginal pain; 4 = no pain)</Text>
        <TextInput
          placeholder="Categorical( 1 || 2 || 3 || 4)"
          onChangeText={(value) => handleChangeText(value, "c")}
          value={state.cp}
        />
      </View>
      {/*trestbps*/}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>trestbps :</Text>
        <Text style ={styles.text}>ContinuousResting blood pressure (in mmHg) on admission to the hospital</Text>
        <TextInput
          placeholder="value in mmHg (Continuous)"
          onChangeText={(value) => handleChangeText(value, "d")}
          value={state.trestbps}
        />
      </View>
      {/* chol */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>chol :</Text>
        <Text style ={styles.text}>	Serum cholesterol in mg/dl</Text>
        <TextInput
          placeholder="value in mg/dl (Continuous)"
          onChangeText={(value) => handleChangeText(value, "e")}
          value={state.chol}
        />
      </View>
      {/* fbs */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>fbs :</Text>
        <Text style ={styles.text}>Fasting blood sugar higher than 120 mg/dl</Text>
        <TextInput
          placeholder="(1 = true; 0 = false)"
          onChangeText={(value) => handleChangeText(value, "f")}
          value={state.fbs}
        />
      </View>
      {/* restecg */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>restecg :</Text>
        <Text style ={styles.text}>Resting electrocardigram</Text>
        <TextInput
          placeholder="(0 = normal; 1 = ST-T wave abnormality; 2 = probable/definite left ventricular hypertrophy)"
          onChangeText={(value) => handleChangeText(value, "g")}
          value={state.restecg}
        />
      </View>
      {/* thalach */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>thalach :</Text>
        <Text style ={styles.text}>Maximum heart rate achieved</Text>
        <TextInput
          placeholder="(during thallium test)"
          onChangeText={(value) => handleChangeText(value, "h")}
          value={state.thalach}
        />
      </View>
      {/* exang */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>exang :</Text>
        <Text style ={styles.text}>Exercise induced angina </Text>
        <TextInput
          placeholder="Categorical (1 = yes; 0 = no)"
          onChangeText={(value) => handleChangeText(value, "l")}
          value={state.exang}
        />
      </View>
      {/* oldpeak */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>oldpeak :</Text>
        <Text style ={styles.text}>ST depression induced by exercise relative to rest</Text>
        <TextInput
          placeholder="(Continuous)"
          onChangeText={(value) => handleChangeText(value, "m")}
          value={state.oldpeak}
        />
      </View>
      {/*slope*/}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>slope :</Text>
        <Text style ={styles.text}>Slope of the peak exercise ST segment</Text>
        <TextInput
          placeholder="categorical (1 = up-sloping; 2 = flat; 3 = down-sloping)"
          onChangeText={(value) => handleChangeText(value, "n")}
          value={state.slope}
        />
      </View>
      {/* ca */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>ca :</Text>
        <Text style ={styles.text}>	Number of major vessels (0 to 3) colored by fluoroscopy</Text>
        <TextInput
          placeholder="Age(Continuous)"
          onChangeText={(value) => handleChangeText(value, "o")}
          value={state.ca}
        />
      </View>
      {/* thal */}
      <View style={styles.inputGroup}>
        <Text style ={styles.title}>thal :</Text>
        <Text style ={styles.text}>Thallium heart scan</Text>
        <TextInput
          placeholder="categorical (3 = normal; 6 = fixed defect; 7 = reversible defect)"
          onChangeText={(value) => handleChangeText(value, "x")}
          value={state.thal}
        />
      </View>
      <View style={styles.button}>
      <Button title="Save User" onPress={() => saveNewUser()} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title : {
    marginBottom : 10,
    fontWeight :"bold",
  },
  text :{
    fontSize : 10,
    marginBottom : 10
  },
  container: {
    flex: 1,
    padding: 35,
  },
  inputGroup: {
    flex: 1,
    padding: 0,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  loader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  button : {
    marginBottom :30,
    justifyContent: 'center'
  }
});

export default CreateUserScreen;
