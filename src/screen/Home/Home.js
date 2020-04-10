import bg from '../../assets/bg.jpg';
import logo from '../../assets/logo.png';
import React, { Fragment } from 'react';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {
    SafeAreaView,
    StyleSheet,
    TouchableHighlight,
    TouchableOpacity,
    Modal,
    ScrollView,
    TextInput,
    View,
    Image,
    Text,
    ImageBackground,
    StatusBar,
} from 'react-native';
import Icons from 'react-native-vector-icons/dist/FontAwesome';
import RootLogin from '../../components/RootLogin/RootLogin';
export default class Home extends React.Component {

    render() {  

       
        return (

            <View style={styles.container}>
                <ImageBackground style={styles.img_bg} source={bg}>
                    <View style={styles.body_view}>
                        <Image style={styles.logoView} source={logo} />
                        <View style={{flexDirection:'column',marginTop:5}}>
                            <TouchableOpacity onPress={() =>{
                              RootLogin();
                            }} 
                            style={{padding:10}}>
                                <View  style={styles.btn_view}>
                                    <Text style={styles.btnn_view}>
                                    CSS (Central Superior Services) 
                                    </Text> 
                                    {/* <Icons style={styles.btnn_view1} name="arrow-right" /> */}
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() =>{
                              RootLogin();
                            }} 
                            style={{padding:10}}>
                                <View style={styles.btn_view}>
                                    <Text style={styles.btnn_view}>
                                     PMS (Provincial Management Services)
                                    </Text> 
                                    {/* <Icons style={styles.btnn_view1} name="arrow-right" /> */}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        zIndex:0,
      },
      img_bg:
      {
        flex:1,
        resizeMode:'contain',
        zIndex:0,
      },
      body_view:
      {
        flex:1,
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
      },
      logoView:
      {
        width:320,
        height:320,
        resizeMode:'contain',
        marginBottom:110
      },
      txt_view:
      {

        fontSize:28,
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff'
      },
      txt_vieww:
      {
        fontSize:18,
        textAlign:'center',
        color:'#fff',
        padding:15,
        fontWeight:'500',
      },
      btn_view:
      {
        flexDirection:'row',
        backgroundColor:'#3b5999',
        borderRadius:3,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        width:370,
        height:60,
        borderRadius:100,
        elevation:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        marginBottom:15,
      },
      btnn_view:
    {
      color:'#fff',
      fontSize:18,
      textAlign:'center',
      fontWeight:'bold',
      marginRight:10
    },
   
});
