import app from '../../assets/app.jpg';
import Users from '../../assets/username.png';
import pass from '../../assets/password.png';
import name from '../../assets/name.png';
import about1 from '../../assets/about1.png';
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

export default class AboutUsScreen extends React.Component {
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
                    }}
                     style={styles.MainHead}>
                            
                        <Icons style={{fontSize:wp('5%'),color:'#fff'}} name="chevron-left" />
                    </TouchableOpacity>
                    <View style={styles.MainHead1}>
                        <Text style={{fontSize:wp('5%'),color:'#fff',fontWeight:'bold'}}>About Us</Text>
                    </View>
                   

                </View>
                <ScrollView scrollEnabled={enable}  showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator ={false}
                     onContentSizeChange={this.onContentSizeChange}>
                <ImageBackground style={styles.MainBody} source={about1} />

                <View style={styles.bodySec}>
                    <Text style={styles.txtbody} >
                    What is Lorem Ipsum?
                    </Text>
                    <View style={{width: wp('20%'),height:wp('0.5%'),backgroundColor:'#3b5999',marginBottom:wp('2%'),marginTop:wp('3%'),}} />
                    <View style={{width: wp('5%'),height:wp('0.5%'),backgroundColor:'#3b5999',marginBottom:wp('3%')}} />
                    <Text style={styles.txtbody1} >
                   - Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                   Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                   when an unknown printer took a galley of type and scrambled it to make a type 
                   specimen book. It has survived not only five centuries, but also the leap into 
                   electronic typesetting, remaining essentially unchanged. It was popularised in 
                   the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                   and more recently with desktop publishing software like Aldus PageMaker including 
                   versions of Lorem Ipsum.Why do we use it? It is a long established fact that a 
                   reader will be distracted by the readable content of a page when looking at its 
                   ayout. The point of using Lorem Ipsum is that it has a more-or-less normal 
                   distribution of letters, as opposed to using 'Content here, content here', 
                   making it look like readable English. Many desktop publishing packages and 
                   web page editors now use Lorem Ipsum as their default model text, and a search
                   for 'lorem ipsum' will uncover many web sites still in their infancy. Various 
                   versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                    </Text>
                    <View style={{width: wp('18%'),height:wp('0.5%'),backgroundColor:'#3b5999',marginBottom:wp('3%'),marginTop:wp('3%'),}} />
                    <Text style={styles.txtbody1} >
                   - Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                    </Text>
                    
                     
                    <View style={{width: wp('18%'),height:wp('0.5%'),backgroundColor:'#3b5999',marginBottom:wp('3%'),marginTop:wp('3%'),}} />
                </View>
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
});
