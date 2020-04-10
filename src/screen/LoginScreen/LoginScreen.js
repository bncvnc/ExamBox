import Login_bg from '../../assets/Login_bg.jpg';
import Users from '../../assets/username.png';
import pass from '../../assets/password.png';
import fb from '../../assets/fb.png';
import gmail from '../../assets/gmail.png';
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
    ActivityIndicator
} from 'react-native';
import Icons from 'react-native-vector-icons/dist/FontAwesome';
import { connect } from 'react-redux';
import {loginUser,LoginWithSocial} from '../../store/actions/index';
import validate from '../../Validate/Validate';
import { LoginManager, AccessToken, GraphRequest, GraphRequestManager } from "react-native-fbsdk";
import { GoogleSignin, statusCodes } from '@react-native-community/google-signin';
class LoginScreen extends React.Component {
  constructor (props) {
    super(props);
    this._configureGoogleSignIn();
  }

_configureGoogleSignIn() {
  GoogleSignin.configure({
    webClientId: '346794146679-1qu7bdkj45p5nrt5733mds34id881mi1.apps.googleusercontent.com'
     // client ID of type WEB for your server (needed to verify user ID and offline access)

  });
}
  state={
    emailFocused:false,
    scrennSize:0,
    emailBlured:false,
    passwordFocused:false,
    passwordBlured:false,
    inputs:{
      password:{
        value:'',
        valid:false,
        validationRules:{
          checkPassword:6
        },
        touched:false,
        warningText:'Password Must Contain 7 to 15 characters which contain one UpperCase character, One numeric digit'
      },
      email:{
        value:'',
            valid:false,
            validationRules:{
              isEmail:true
            },
            touched:false,
            warningText:'Please Enter A Valid Email Address'
      },
      name:{
        value:'',
            valid:false,
            validationRules:{
              minLength:6
            },
            touched:false,
            warningText:'Your Name Must Be 6 Characters Long'
      }
    }
}
onFieldTextChange = (text,field) => {
  let connectedValue = {};
  this.setState(prevState =>{
    
    return {
      inputs: {
        ...prevState.inputs,
        [field]: {
          ...prevState.inputs[field],
          value: text,
          valid: validate(
            text,
            prevState.inputs[field].validationRules,
            connectedValue
          ),
          touched:true
          
        }
        
      }
      
    };
    
  })
}
loginUser = () => {
  const authDta ={
    email:this.state.inputs.email.value,
    password:this.state.inputs.password.value
  }
  this.props.onloginUser(authDta)
 
}
signIn = async () => {
  try {
    console.log('try');
    await GoogleSignin.hasPlayServices();
    console.log('after');
    const userInfo = await GoogleSignin.signIn();
    console.log('after');
    console.log('userInfo = ', userInfo);
    this.setState({ userInfo });
      if(userInfo.user.email !==null)
      {
      const authDta ={
        email:userInfo.user.email,
        name:userInfo.user.name,
        phoneNumber:'asd',
        password:'asdfasdf',
      }
      this.props.LoginWithSocial(authDta)
      }
      else{
      ToastAndroid.showWithGravityAndOffset(
      'Something went wrong',
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
      )
      }
  } catch (error) {
    console.log('catch');
    console.log(error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

LoginWithFb = () =>{
  LoginManager.logInWithPermissions(['public_profile', 'email']).then(
    (result)=> {
      if (result.isCancelled) {
        console.log("Login cancelled");
      } else {
        console.log(
          "Login success with permissions: " +
      
            result.grantedPermissions.toString()
        );
        AccessToken.getCurrentAccessToken().then((data) => {
          const { accessToken } = data
          this.initUser(accessToken)
        });
        
        
      }
    },
    function(error) {
      console.log("Login fail with error: " + error);
    }
  );
}

initUser = (token) => {
  fetch('https://graph.facebook.com/v2.5/me?fields=email,name,friends&access_token=' + token)
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
    // this.props.socialSignInn(json.email,json.name);
    const authDta ={
      email:json.email,
      name:json.name,
      phoneNumber:'asd',
      password:'asdfasdf',
    }
    this.props.LoginWithSocial(authDta)
    // this.props.CheckSocialLogin(authDta);
  }).catch((err) =>{
    console.log(err);
  })
}

    render() {  

      let email = this.state.inputs.email.valid;
      let password = this.state.inputs.password.valid;

      let LoginButton =( <View>

        </View>);
        if(this.props.isLoading) {
          LoginButton =(
            <View style={{zIndex:999999,justifyContent:'center',alignItems:'center',alignContent:'center',backgroundColor:'rgba(0,0,0,.6)',position:'absolute',top:0,left: 0,right: 0, bottom: 0,flex: 1}}>
            <ActivityIndicator size={'large'} color={'#e2e2e2'}  />
         </View>
          )
        }
       
        return (

            <View style={styles.container}>
                <ImageBackground style={styles.img_bg} source={Login_bg}>
                    <View style={styles.body_view}>
                        <View style={styles.InputTxtBox}>
                            <Image style={styles.ImgView} source={Users}/>
                            <TextInput 
                            style={styles.TxtInputStyles} 
                            keyboardType={'email-address'}
                            returnKeyType="next"
                            placeholder="Enter your Email"
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            onChangeText={(text) =>{
                              this.onFieldTextChange(text,'email')
                            }}
                            value={this.state.inputs.email.value}
                            autoCorrect={false}
                            blurOnSubmit={false}
                            placeholder='Email Address'
                            autoCapitalize="none" 
                            onFocus={()=>this.setState({
                             emailFocused:true
                            
                           })}
                           onBlur={()=>this.setState({
                             emailBlured:true
                           })}
                            />
                        </View>
                        <Text 
      style={[styles.warrnings,this.state.emailFocused && this.state.emailBlured && !this.state.inputs.email.valid ?styles.show:styles.disapair]}
      >{this.state.inputs.email.warningText}</Text>
                        <View style={styles.InputTxtBox}>
                            <Image style={styles.ImgView} source={pass}/>
                            <TextInput 
                            style={styles.TxtInputStyles} 
                            placeholder="Password"
                            returnKeyType={'done'}
                            ref={(input) => { this.secondTextInput = input; }}
                            style={styles.bodySecTxtView} 
                              onChangeText={(text) =>{
                              this.onFieldTextChange(text,'password')
                            }}
                            secureTextEntry={true}
                            value={this.state.inputs.password.value}
                              placeholder="Enter your Password"
                              onFocus={()=>this.setState({
                              passwordFocused:true
                              
                            })}
                            onBlur={()=>this.setState({
                              passwordBlured:true
                            })}

                            onSubmitEditing={()=>{
                              Keyboard.dismiss();
                              if(email && password) {
                                this.loginUser()
                              }
                            }}  />
                        </View>
                        <Text 
      style={[styles.warrnings,this.state.passwordFocused && this.state.passwordBlured && !this.state.inputs.password.valid ?styles.show:styles.disapair]}
      >{this.state.inputs.password.warningText}</Text>
                        <TouchableOpacity style={styles.ForgetPassView}>
                            <Text style={styles.ForgetPassViewTxt}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.SocialBtnBox}>
                        <TouchableOpacity   
                        onPress={()=>{
                          this.loginUser();
                        }}
                        disabled={email && password ? false:true}
                        style={styles.BtnBox}
                                     >
                            <Text style={styles.BtnTxtView}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                        style={styles.BtnBoxFB}
                        onPress={() =>{
                          this.LoginWithFb();
                        }}
                        >
                            <Image style={styles.BtnImgView} source={fb} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() =>{
                          this.signIn()
                        }} style={styles.BtnBoxGM}>
                            <Image style={styles.BtnImgView} source={gmail} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BottomView}>
                        <View style={styles.BottomViewTxt}>
                            <Text style={styles.ViewTxt}>You Don’t Have Any Account?</Text>
                        </View>
                        <TouchableOpacity style={styles.BottomViewTxt}>
                            <Text style={styles.ForgetPassViewSignUp}>SIGNUP</Text>
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
      body_view:
      {
        
        flexDirection:'column',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:320,
      },
      InputTxtBox:
      {
          flexDirection:'row',
          width:370,
          height:50,
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
            marginBottom:20,
            alignContent:'center',
            alignItems:'center',
        
      },
      ImgView:
      {
          width:24,
          height:24,
          marginLeft:15,
      },
      TxtInputStyles:
      {
        width:500,
        // marginLeft:15,
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
      SocialBtnBox:
      {
        flexDirection:'row',
        marginLeft:15,
        alignContent:'flex-start',
        alignItems:'flex-start',
        justifyContent:'flex-start',
            
      },
      BtnBox:
      {
          flex:0.9,
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
        fontSize:15,
        color:'#fff',
        fontWeight:'bold',
        
      },
      BtnBoxFB:
      {
        marginLeft:30,
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
      },
      BtnBoxGM:
      {
        marginLeft:30,
        alignContent:'flex-end',
        alignItems:'flex-end',
        justifyContent:'flex-end',
      },
      BtnImgView:
      {
        width:62,
        height:62
      },
      BottomView:
      {
        flexDirection:'row',
        alignContent:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:25
      },
      ViewTxt:
      {
        fontSize:15,
        fontWeight:'500',
        marginRight:10
      },
      ForgetPassViewSignUp:
      {
        fontSize:17,
        fontWeight:'bold',
        color:'#3b5999'
      },
      invalid:{
        borderBottomColor:'#8b0000',
      },
      isvalid:{
        borderBottomColor:'rgba(204, 204, 204, .6)',
      },
      disapair:{
        height:0,
        opacity:0
      },
      show:{
        // opacity:100,
        flex:0
      },
      warrnings:{
        fontSize:12,
        color:'#8b0000',
        fontFamily:'Arial',
        textAlign:'center',
        // marginBottom:wp('1.5%'),
        // marginTop:wp('1.5%')
      },
});
const mapStateToProps = state => {
  return {
    user: state.user.user,
    isLoading: state.ui.isLoading,
    InternetInfo:state.ui.InternetInfo,
    mode:state.user.mode
  };
};
const mapsDespathToProps =dispatch =>{
  return{
    onloginUser :(authDta) =>dispatch(loginUser(authDta)),
    LoginWithSocial :(authDta) =>dispatch(LoginWithSocial(authDta)),
    checkIfThereIsdata : (authDta) => dispatch(saveUserInfo(authDta))
  }
}
export default connect(mapStateToProps,mapsDespathToProps) (LoginScreen)