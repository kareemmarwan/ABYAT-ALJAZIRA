import * as React from 'react';
import { Text, View, StyleSheet, Image, Button} from 'react-native';
import * as WebBrowser from 'expo-web-browser';


 const AssetExample =() => {

  const [link , setLink] = React.useState(null);
  const [site , setSite] = React.useState(null)
  const [email , setEmail] = React.useState(null)

  // Address of the center
  const handlePress = async () => {
    let result= await WebBrowser.openBrowserAsync('https://goo.gl/maps/FiP8e7CXLPNQrNe6A');  
    setLink(result);
  };
  //  site is in the center
  const handleSite = async () => {
    let result= await WebBrowser.openBrowserAsync('http://abyat.com.sa/');
     setSite(result);
  };

  
  const handlEmail = async () => {
    let result= await WebBrowser.openBrowserAsync('info@abyat.com.sa');
    setEmail(result);
  };
 

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={{uri:'http://abyat.com.sa/wp-content/uploads/2018/02/logo1.png'}}/>
       <Text style={styles.paragraph}>
        جميع الحقوق محفوظة لمؤسسة أبيات الجزير لأعمال الديكور
        الأحساء - الحليلة / بالقرب من موبايلي
        جوال: 0506924692
        هاتف: 0135970702
        <Text style={{color:'blue'}} onPress={handlEmail}> info@abyat.com.sa </Text>
        <Text style={{color:'green'}} onPress={handleSite}>  abyat.com.sa </Text>
      </Text>

      <Button style={styles.loginBtn} title="الذهاب للموقع" onPress={handlePress}/> 

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent:"flex-end",
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    top:10
  },
  logo: {
    width:250,
    height:70,
    resizeMode:'cover',

  },
  loginBtn:{
    width:200,
    backgroundColor:"#204969",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:15,
    marginBottom:10
    
  },
  
});


export default AssetExample;