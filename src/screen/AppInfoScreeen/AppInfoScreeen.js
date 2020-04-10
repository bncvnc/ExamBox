import app from '../../assets/app.jpg';
import Users from '../../assets/username.png';
import pass from '../../assets/password.png';
import name from '../../assets/name.png';
import phone from '../../assets/phone.png';
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

export default class AppInfoScreeen extends React.Component {

    render() {  

       
        return (

            <View style={styles.container}>
                <ImageBackground style={styles.img_bg} source={app}>
                    <View style={styles.BottomView}>
                            <TouchableOpacity style={styles.BottomViewTxt}>
                                <Text style={styles.ForgetPassViewSignUp}>Version: 1.0002</Text>
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
        resizeMode:'contain',
        zIndex:0,

      },
      BottomView:
      {
        flex:1,
        position:'relative',
        top:150,
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:5
      },
      ViewTxt:
      {
        fontSize:15,
        fontWeight:'500',
        marginRight:10
      },
      ForgetPassViewSignUp:
      {
        fontSize:22,
        fontWeight:'600',
        color:'#fff'
      },
});
