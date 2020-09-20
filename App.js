import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, StatusBar, ImageBackground } from 'react-native';
import AssetExample from './components/AssetExample';





const App = () => {
 




  const image = { uri: "https://iphonewalls.net/wp-content/uploads/2014/08/Subtle%20White%20Diamonds%20Pattern%20iPhone%205%20Wallpaper.jpg" };


  const [amount, setAmount] = useState('');
  const [Tex, setTex] = useState('');
  const [Befor, setBefor] = useState('');




  function precise(x) {
    return Number.parseFloat(x).toPrecision(4);
  }

  const beforText = () => {
    const sum = amount * 1.15;
    const tex = sum - amount;
    setTex(precise(tex));

    const befortex = amount - tex;
    setBefor(precise(befortex));

  }


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#204969' barStyle='light-content' />
      <ImageBackground source={image} style={styles.image}>
        <View style={styles.main}>
          <Text style={styles.logo}>الرجاء إدخال القيمة</Text>
          <View style={styles.inputView} >
            <TextInput
              style={styles.inputText}
              placeholder="إجمالي المبلغ"
              placeholderTextColor="#003f5c"
              onChangeText={text => setAmount(text)}
            />
          </View>
          <TouchableOpacity style={styles.loginBtn} onPress={beforText} >
            <Text style={styles.loginText}> أحسب بعد الضريبة</Text>
          </TouchableOpacity>
          <View style={styles.Texts}>
            <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 16 }}>المجموع قبل الضريبة :{Befor}</Text>
            <Text style={styles.Texts}>ضريبة القيمة المضافة (15%) :{Tex}</Text>
            <Text style={styles.Texts}>الإجمالي:{amount}</Text>
          </View>


          <AssetExample />
        </View>

      </ImageBackground>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dadada',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#204969",
    marginBottom: 40,
  },
  inputView: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    direction: 'rtl',
    color: "#204969",

  },

  loginBtn: {
    width: "80%",
    backgroundColor: "#204969",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  bef: {
    color: 'red',
  },
  Texts: {
    fontWeight: 'bold',
    fontSize: 16
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }


});

export default App;