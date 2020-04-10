import Pro from '../../assets/pro.png';
import About from '../../assets/About.png';
import Contact from '../../assets/contact.png';
import AppInfo from '../../assets/appInfo.png';
import Feedback from '../../assets/feedback.png';
import Share from '../../assets/share.png';
import Setting from '../../assets/setting.png';
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
    Platform,
} from 'react-native';
import Icons from 'react-native-vector-icons/dist/FontAwesome';
import { Container, Header, Content, Accordion } from "native-base";
export default class SideDrawScreen extends React.Component {

    render() {  
        const dataArray = [
            { title: "View Answer", content: "C. Italy" },
          ];
       
        return (

            <View style={styles.container}>
                {/* <View style={styles.header}>
                    <Icons style={styles.headIcon} name="chevron-left" />
                    <Text style={styles.textHeadView}>English</Text>
                    <Icons style={styles.headIcon} name="bars" />
                </View> */}
                <View style={styles.Body_Box}>
                    <View style={styles.body}>
                        <View style={styles.body_view1}>
                            <View style={styles.ImgView1}>
                                <Image style={styles.ImgViewStyle1} source={Pro} />
                            </View>
                            <View style={styles.TxtView1}>
                                <Text style={styles.TxtViewStyle1}>Abdul Kaleem Awais</Text>
                                <Text style={styles.TxtViewStyle11}>AbdulKaleemAwais@gmail.com</Text>
                            </View>
                        </View>
                        <View style={{width:280,height:1,backgroundColor:'#3b5999'}} />

                        <TouchableOpacity style={styles.body_view}>
                            <View style={styles.ImgView}>
                                <Image style={styles.ImgViewStyle} source={About} />
                            </View>
                            <View style={styles.TxtView}>
                                <Text style={styles.TxtViewStyle}>About Us</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width:280,height:1,backgroundColor:'#3b5999'}} />

                        <TouchableOpacity style={styles.body_view}>
                            <View style={styles.ImgView}>
                                <Image style={styles.ImgViewStyle} source={Contact} />
                            </View>
                            <View style={styles.TxtView}>
                                <Text style={styles.TxtViewStyle}>Contact Us</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width:280,height:1,backgroundColor:'#3b5999'}} />

                        <TouchableOpacity style={styles.body_view}>
                            <View style={styles.ImgView}>
                                <Image style={styles.ImgViewStyle} source={Feedback} />
                            </View>
                            <View style={styles.TxtView}>
                                <Text style={styles.TxtViewStyle}>Feedback</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width:280,height:1,backgroundColor:'#3b5999'}} />

                        <TouchableOpacity style={styles.body_view}>
                            <View style={styles.ImgView}>
                                <Image style={styles.ImgViewStyle} source={AppInfo} />
                            </View>
                            <View style={styles.TxtView}>
                                <Text style={styles.TxtViewStyle}>App Info</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width:280,height:1,backgroundColor:'#3b5999'}} />
                        <TouchableOpacity style={styles.body_view}>
                            <View style={styles.ImgView}>
                                <Image style={styles.ImgViewStyle} source={Share} />
                            </View>
                            <View style={styles.TxtView}>
                                <Text style={styles.TxtViewStyle}>Share</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width:280,height:1,backgroundColor:'#3b5999'}} />
                        <TouchableOpacity style={styles.body_view}>
                            <View style={styles.ImgView}>
                                <Image style={styles.ImgViewStyle} source={Setting} />
                            </View>
                            <View style={styles.TxtView}>
                                <Text style={styles.TxtViewStyle}>Setting</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{width:280,height:1,backgroundColor:'#3b5999'}} />
                    </View>
                    
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        // flex: 1,
        zIndex:0,
        backgroundColor:'#fff',
        
      },
      headIcon:
      {
        flex:0.15,
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
        flex:1,
        fontSize:18,
        fontWeight:'bold',
        color:'#fff'
      },
      Body_Box:
      {
          
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        paddingTop:Platform.OS ==='ios'?20:0
      },
      body:
      {
        // width:280,
        // height:600,
        flex:0,
        backgroundColor:'#fff',
        elevation:5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
            },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        marginBottom:5,
      },
      body_view:
      {
        
        flexDirection:'row',
        marginLeft:15
      },
      body_view1:
      {
        flexDirection:'column',
        marginLeft:5
      },
      ImgView:
      {
        marginTop:5,
        marginBottom:5,
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
      },
      ImgView1:
      {
        marginTop:5,
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
      },
      ImgViewStyle:
      {
          width:50,
          height:50,
          resizeMode:'contain',
          marginRight:15
      },
      TxtView:
      {
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
       
      },
      TxtViewStyle:
      {
        fontSize:15,
        fontWeight:'bold'
      },
      TxtView1:
      {
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
        marginTop:10
      },
      TxtViewStyle1:
      {
        fontSize:15,
        marginLeft:15,

      },
      TxtViewStyle11:
      {
        fontSize:15,
        marginLeft:15,
        marginBottom:15
      },
      ImgViewStyle1:
      {
        width:100,
        height:100,
        fontWeight:'bold'
      }
});
