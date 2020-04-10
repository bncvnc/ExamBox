
import emailpage from '../../assets/emailpage.png';
import contact1 from '../../assets/contact1.png';
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

export default class ContactUsScreen extends React.Component {
    state = {
        screenHeight: 0,
    }
    onContentSizeChange = (contentWidth, contentHeight) => {
        // Save the content height in state
        content = contentHeight + 150;
        this.setState({ screenHeight: content });
    };
    onContentSizeChange = (screenWidth,screenHeight) =>{
        this.setState({
          scrennSize:screenHeight
        })
      }
    
    render() {  

        let enable = this.state.scrennSize > hp('100%');
        return (

            <View style={styles.container}>  
                    <View style={styles.MainSec}>
                        <TouchableOpacity onPress={() =>{
                        Navigation.pop(this.props.componentId);
                        }} style={styles.MainHead}>
                                
                            <Icons style={{fontSize:wp('5%'),color:'#fff'}} name="chevron-left" />
                        </TouchableOpacity>
                        <View style={styles.MainHead1}>
                            <Text style={{fontSize:wp('5%'),color:'#fff',fontWeight:'bold'}}>Contact Us</Text>
                        </View>
                    </View>
                    <ScrollView scrollEnabled={enable}  showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator ={false}
                        onContentSizeChange={this.onContentSizeChange}>
                    <ImageBackground style={styles.MainBody} source={contact1} />
                    <View style={styles.bodySec}>
                        <Text style={styles.txtbody} >
                        What is Lorem Ipsum?
                        </Text>
                        <View style={{width: wp('20%'),height:wp('0.5%'),backgroundColor:'#3b5999',marginBottom:wp('2%'),marginTop:wp('3%'),}} />
                        <View style={{width: wp('5%'),height:wp('0.5%'),backgroundColor:'#3b5999',marginBottom:wp('3%')}} />
                        <Text style={styles.txtbody1} >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley.
                        </Text>
                    </View>
                    <TouchableOpacity   onPress={() =>{
                            let phoneNumber='03332222200';
                            let ForBoth=Platform.OS==='android'?`tel:${phoneNumber}`:`telprompt:${phoneNumber}`;
                            Linking.openURL('mailto:help@doconcall.pk')
                        }}
                    style={styles.bodySecc}>
                        <Image style={styles.ImagEmail} source={emailpage} />
                        <Text style={styles.txtbodyy} >
                                help@exambox.pk
                        </Text>
                    </TouchableOpacity>
                </ScrollView>
          </View>
        );
    }
}
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor:'#f0f0f0'
      },
      MainSec:
      {
        flexDirection:'row',
        width:wp('100%'),
        height:Platform.OS==='ios'? wp('25%'):wp('15%'),
        alignContent:'center',
        alignItems:'center',
        backgroundColor:'#3b5999',
        
      },
      MainHead:
      {
        marginLeft:wp('3%')
      },
      MainHead1:
      {
        flex:0.9,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center'
      },
      MainBody:
      { 
        width:wp('100%'),
        height:wp('50%'),
        resizeMode:'contain',
        marginBottom:wp('2%')
      },
      bodySec:
      {
          
          alignContent:'center',
          alignItems:'center',
          justifyContent:'center',
          padding:25
      },
      txtbody:
      {
          fontFamily:'Roboto',
          fontSize:wp('4.5%'),
          textAlign:'justify',
          fontWeight:'bold',
          
      },
      txtbody1:
      {
          fontFamily:'Roboto',
          fontSize:wp('3.6%'),
          textAlign:'justify',
        
      },
      bodySecc:
      {
          flexDirection:'row',
          width:wp('90%'),
          height:wp('15%'),
          marginBottom:wp('2%'),
          marginTop:wp('8%'),
          marginLeft:wp('5%'),
          backgroundColor:'#3b5999',
          alignContent:'center',
          alignItems:'center',
          justifyContent:'center',
          borderTopLeftRadius:10,
          borderBottomRightRadius:10,
          borderTopRightRadius:2,
          borderBottomLeftRadius:2
         
      },
      txtbodyy:
      {
          fontFamily:'Roboto',
          fontSize:wp('4.5%'),
          textAlign:'justify',
          fontWeight:'bold',
          color:'#fff'
          
      },
      ImagEmail:
        {
          width:wp('20%'),
          height:wp('20%'),
          resizeMode:'contain',
          marginRight:wp('7%')
        },
});
