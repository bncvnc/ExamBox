
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
import { Container, Header, Content, Accordion } from "native-base";
export default class McqsScreen extends React.Component {

    render() {  
        const dataArray = [
            { title: "View Answer", content: "C. Italy" },
          ];
       
        return (

            <View style={styles.container}>
              <ImageBackground style={styles.img_bg}> 
                <View style={styles.header}>
                    <Icons style={styles.headIcon} name="chevron-left" />
                    <Text style={styles.textHeadView}>English</Text>
                </View>
                <View style={styles.body_view}>
                    <View style={styles.InputTxtBox}>
                        <Text style={styles.TxtInputStyles}>Q1:</Text>
                        <Text style={styles.TxtInputStyles1}>Which country hosting FIFA Women’s World Cup 2019?</Text>
                    </View>
                    <View style={styles.BoxView}>
                        <View style={styles.Boxstyle}>
                            <Text style={styles.TxtOpStyles}>A. </Text>
                            <Text style={styles.TxtOpStyles1}>France</Text>
                        </View>
                    </View>
                    <View style={styles.BoxView}>
                        <View style={styles.Boxstyle}>
                            <Text style={styles.TxtOpStyles}>B. </Text>
                            <Text style={styles.TxtOpStyles1}>Germany</Text>
                        </View>
                    </View>
                    <View style={styles.BoxView}>
                        <View style={styles.Boxstyle}>
                            <Text style={styles.TxtOpStyles}>C. </Text>
                            <Text style={styles.TxtOpStyles1}>Italy</Text>
                        </View>
                    </View>
                    <View style={styles.BoxView}>
                        <View style={styles.Boxstyle}>
                            <Text style={styles.TxtOpStyles}>D. </Text>
                            <Text style={styles.TxtOpStyles1}>None of These</Text>
                        </View>
                    </View>
                    <View style={{width:350,height:1,backgroundColor:'#3b5999',marginTop:15,marginBottom:5}} />
                        <View style={styles.Boxstyle1}>
                            <Accordion style={{backgroundColor:'#fff',}} dataArray={dataArray}  />
                        </View>
                    <View style={{width:350,height:1,backgroundColor:'#3b5999',marginTop:15,marginBottom:5}} />
                </View>
                <View style={styles.SocialBtnBox}>
                        <TouchableOpacity style={styles.BtnBox}>
                            <Text style={styles.BtnTxtView}>NEXT</Text>
                        </TouchableOpacity>
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
        backgroundColor:'#fff',
        resizeMode:'contain',
        zIndex:0,

      },
      header:
      { 
        flexDirection:'row',
        backgroundColor:'#3b5999',
        padding:10,
        height:55,
        alignContent:'center',
        alignItems:'center',
        
        
      },
      headIcon:
      {
        flex:0.5,
        fontSize:25,
        fontWeight:'100',
        color:'#fff'
      },
      textHead:
      {
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:10,
        marginLeft:15
      },
      textHeadView:
      {
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
      },
     
      body_view:
      {
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:15,
        padding:10,
        marginLeft:10,
        marginRight:10,
        backgroundColor:'#f5f7fa',
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
      InputTxtBox:
      {
          flexDirection:'row',
          padding:10,
          marginLeft:10,
          marginRight:10,
          borderRadius:3,     
      },
      
      TxtInputStyles:
      {
        
        fontSize:16,
        fontWeight:'bold',
        marginLeft:5,
        color:'#3b5999'
      },
      TxtInputStyles1:
      {
        fontSize:15,
        fontWeight:'bold',
        marginLeft:15,
      },
      BoxView:
    {
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start'
    },
      Boxstyle:
      {
        flexDirection:'row',
          padding:10,
          marginTop:10,
          width:350,
          backgroundColor:'#fff',
          borderRadius:3,
          elevation:5,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5.84,
            marginBottom:5,
            alignContent:'center',
            alignItems:'center',
      },
      TxtOpStyles:
      {
        fontSize:16,
        fontWeight:'bold',
        marginLeft:5,
        color:'#3b5999'
      },
      TxtOpStyles1:
      {
        fontSize:16,
        fontWeight:'700',
        marginLeft:5,
        color:'#000'
      },
      Boxstyle1:
      {
        flexDirection:'row',
          padding:10,
          marginTop:10,
          width:350,
          borderRadius:3,
         
      },
      SocialBtnBox:
      {
        flexDirection:'row',
        marginLeft:15,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:5   
      },
      BtnBox:
      {
          width:250,
          height:50,
          backgroundColor:'#3b5999',
          borderRadius:100,
          elevation:10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5.84,
            marginBottom:20,
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center',
            marginTop:5
        
      },
      BtnTxtView:
      {
        fontSize:16,
        color:'#fff',
        fontWeight:'bold',
        
      },
});
