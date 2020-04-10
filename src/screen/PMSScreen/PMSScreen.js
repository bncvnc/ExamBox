import PMS1 from '../../assets/PMS1.png';
import PMS2 from '../../assets/PMS2.png';
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

export default class PMSScreen extends React.Component {

    render() {  

       
        return (

            <View style={styles.container}>
                <ImageBackground style={styles.img_bg}> 
                    <View style={styles.header}>
                        <Icons style={styles.headIcon} name="chevron-left" />
                    </View>
                    <View style={styles.textHead}>
                        <Text style={styles.textHeadView}>Provincial Management Services</Text>
                    </View>
                    <View style={styles.body_view}>
                        <TouchableOpacity style={styles.InputTxtBox}>
                            <Image style={styles.ImgView} source={PMS1}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.InputTxtBox}>
                            <Image style={styles.ImgView} source={PMS2}/>
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
        backgroundColor:'#f5f7fa',
        resizeMode:'contain',
        zIndex:0,

      },
      header:
      { 
        flexDirection:'row',
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginTop:10,
        marginLeft:15
      },
      headIcon:
      {
        fontSize:25,
        fontWeight:'100'
      },
      textHead:
      {
        flexDirection:'row',
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginTop:10,
        marginLeft:15
      },
      textHeadView:
      {
        fontSize:18,
        fontWeight:'bold'
      },
      body_view:
      {
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:25
      },
      InputTxtBox:
      {
          flexDirection:'row',
          width:370,
          height:260,
          backgroundColor:'#FFF',
          borderRadius:3,
          elevation:10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
            },
            shadowOpacity: 0.25,
            shadowRadius: 5.84,
            marginBottom:15,
            alignContent:'center',
            alignItems:'center',
            justifyContent:'center',
            
      },
      ImgView:
      {
        height:260,
        resizeMode:'contain',
      },
      TxtInputStyles:
      {
        flex:0.86,
        fontSize:16,
        fontWeight:'bold',
        marginLeft:15,
        color:'#3b5999'
      },
      IconStyles:
      {
        fontSize:16,
        fontWeight:'900',
        color:'#3b5999'
      },
      ForgetPassView:
      {
        flexDirection:'row',
        alignContent:'flex-end',
        alignItems:'flex-end',
        justifyContent:'flex-end',
        marginBottom:25,
      },
      ForgetPassViewTxt:
      {
        marginLeft:240,
        fontSize:15,
      },
     
});
