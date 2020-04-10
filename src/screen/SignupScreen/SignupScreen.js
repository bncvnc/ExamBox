import signup_bg from '../../assets/signup_bg.jpg';
import Users from '../../assets/username.png';
import pass from '../../assets/password.png';
import name from '../../assets/name.png';
import phone from '../../assets/phone.png';
import React, { Fragment } from 'react';
import validate from '../../Validate/Validate';
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
import {connect} from 'react-redux'
import {RegisterUser} from '../../store/actions/index';
class SignupScreen extends React.Component {

  state={
    screenHeight:0,
    isLoggedIn: false,
    user: {},
    states:[],
    city:'not',
    numCode:'+92',
    pickerSelection: 'Select A Category',
    pickerDisplayed: false,
    pickText:false,
    checkCode:false,
    pickerSelection1: 'Country',
    pickerDisplayed1: false,
    pickText1:false,
    pickerSelection2: 'City / Town',
    pickerDisplayed2: false,
    pickText2:false,
    country_id:0,
    // country:this.props.country[0],
    nameFocused:false,
    nameBlured:false,
    passwordFocused:false,
    passwordBlured:false,
    confiormPasswordBlured:false,
    confiormPasswordFocused:false,
    emailFocused:false,
    emailBlured:false,
    numberFocused:false,
    numberBlured:false,
    breadwinnerBlured:false,
    CNICFocused:false,
    CNICBlured:false,
    breadwinnerFocused:false,
    houser_noFocused:false,
    houser_noBlured:false,
    isLoading: true,
    search: '' ,
    hearAboutUs:'',
    franchiseCode:'',
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
              minLength:4
            },
            touched:false,
            warningText:'Your Name Must Be 4 Characters Long'
      },
      breadwinner:{
        value:'Test User',
            valid:false,
            validationRules:{
              minLength:4
            },
            touched:false,
            warningText:'Your breadwinner Name Must Be 4 Characters Long'
      },
      houser_no:{
        value:'',
            valid:false,
            validationRules:{
              minLength:2
            },
            touched:false,
            warningText:'Please Provide A Valid House No'
      },
      CNIC:{
        value:'',
            valid:false,
            validationRules:{
                minLength:13
            },
            touched:false,
            warningText:'Please Provide A Valid CNIC'
      },
      confiormPassword:{
        value:'',
            valid:false,
            validationRules:{
              equalTo:'password'
            },
            touched:false,
            warningText:'Your Password Does Not Match'
      },
      myNumber:{
          value:'',
          valid:false,
          validationRules:{
            minLength:9
          },
          touched:false,
          warningText:'Please Enter Numbers Only And Minimum numbers must be 9'
      },
    }
}

  onFieldTextChange = (text,field) => {

       
    let connectedValue = {};
    if (this.state.inputs[field].validationRules.equalTo) {
      const equalControl = this.state.inputs[field].validationRules.equalTo;
      const equalValue = this.state.inputs[equalControl].value;
      connectedValue = {
        ...connectedValue,
        equalTo: equalValue
      };
    }
    if (field === "password") {
      connectedValue = {
        ...connectedValue,
        equalTo: text
      };
    }
    this.setState(prevState =>{
      
      return {
        inputs: {
          ...prevState.inputs,
          confiormPassword: {
            ...prevState.inputs.confiormPassword,
            valid:
              field === "password"
                ? validate(
                    prevState.inputs.confiormPassword.value,
                    prevState.inputs.confiormPassword.validationRules,
                    connectedValue
                  )
                : prevState.inputs.confiormPassword.valid
          },
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
  onChanged(text){ 
    let checkZero = text.replace(/^0+(?=\d)/,'');
   let number = checkZero.replace(/[^0-9]/g, '');
   //console.log(number);
   let connectedValue = {};
     this.setState( prevState =>{
       return {
         inputs: {
           ...prevState.inputs,
           myNumber: {
             ...prevState.inputs.myNumber,
             value: number,
             valid: validate(
               text,
               prevState.inputs.myNumber.validationRules,
               connectedValue
             ),
             touched:true
             
           }
           
         }
         
       };
     });
     }
     RegisterUser= () => {
      let authdata={
           password:this.state.inputs.password.value,
           email:this.state.inputs.email.value,
           name:this.state.inputs.name.value,
           phoneNumber:this.state.numCode+this.state.inputs.myNumber.value
       }
       this.props.onRegisterUser(authdata,this.props.componentId);
     };

    render() {  
      let email= this.state.inputs.email.valid;
      let password= this.state.inputs.password.valid;
      let confiormPassword = this.state.inputs.confiormPassword.valid;
      let myNumber = this.state.inputs.myNumber.valid;
        return (

            <View style={styles.container}>
                <ImageBackground style={styles.img_bg} source={signup_bg}>
                    <View style={styles.body_view}>
                    <View style={styles.InputTxtBox}>
                            <Image style={styles.ImgView} source={name}/>
                            <TextInput 
                            style={styles.TxtInputStyles} 
                            placeholder="Full Name"
                            placeholderTextColor={'#a0a0a0'}
                            returnKeyType="next"
                            onSubmitEditing={() => { this.secondTextInput.focus(); }}
                            autoFocus={true}
                            blurOnSubmit={false}
                            value={this.state.inputs.name.value} 
                            onFocus={()=>this.setState({
                             nameFocused:true
                             
                            })}asd
                            onBlur={()=>this.setState({
                             nameBlured:true
                            })}
                            onChangeText={(text) => this.onFieldTextChange(text,'name')}
                            />
                        </View>
                        <Text 
      style={[styles.warrnings,this.state.nameFocused && this.state.nameBlured && !this.state.inputs.name.valid ?styles.show:styles.disapair]}
      >{this.state.inputs.name.warningText}</Text>
                        <View style={styles.InputTxtBox}>
                            <Image style={styles.ImgView} source={Users}/>
                            <TextInput 
                            style={styles.TxtInputStyles} 
                            placeholder="Username / Email"
                            placeholderTextColor={'#a0a0a0'}
                            ref={(input) => { this.secondTextInput = input; }}
                            returnKeyType="next"
                            onSubmitEditing={() => { this.thirdTextInput.focus(); }}
                            blurOnSubmit={false}
                            onFocus={()=>this.setState({
                              emailFocused:true
                            
                            })}
                            onBlur={()=>this.setState({
                              emailBlured:true
                            })}
                            value={this.state.inputs.email.value} 
                            autoCapitalize="none" 
                            keyboardType={'email-address'}
                            onChangeText={(text) => this.onFieldTextChange(text,'email')} 
                            

                            />
                        </View>
                        <Text 
      style={[styles.warrnings,this.state.emailFocused && this.state.emailBlured 
        && !this.state.inputs.email.valid ?styles.show:styles.disapair]}
      >{this.state.inputs.email.warningText}</Text> 
                        <View style={styles.InputTxtBox}>
                            <Image style={styles.ImgView} source={phone}/>
                            <TextInput 
                            style={styles.TxtInputStyles} 
                            placeholder="Phone Number"
                            ref={(input) => { this.thirdTextInput = input; }}
                            onSubmitEditing={() => { this.fourthTextInput.focus(); }}
                            blurOnSubmit={false}
                            placeholderTextColor={'#a0a0a0'}
                            onFocus={()=>this.setState({
                              numberFocused:true
                              
                            })}
                            onBlur={()=>this.setState({
                              numberBlured:true
                            })}
                            value={this.state.inputs.myNumber.value} 
                            onChangeText={(text) => this.onChanged(text,'myNumber')}  
                            maxLength={10}
                            />
                        </View>
                        <Text 
      style={[styles.warrnings,this.state.numberBlured && this.state.numberFocused && !this.state.inputs.myNumber.valid ?styles.show:styles.disapair]}
      >{this.state.inputs.myNumber.warningText}</Text>
                        <View style={styles.InputTxtBox}>
                            <Image style={styles.ImgView} source={pass}/>
                            <TextInput 
                            style={styles.TxtInputStyles} 
                            placeholder="Password"
                            ref={(input) => { this.fourthTextInput = input; }}
                            returnKeyType="next"
                            onSubmitEditing={() => { this.sixethTextInput.focus(); }}
                            blurOnSubmit={false}
                            placeholderTextColor={'#a0a0a0'}
                            value={this.state.inputs.password.value} 
                            onFocus={()=>this.setState({
                              passwordFocused:true
                            
                            })}
                            onBlur={()=>this.setState({
                              passwordBlured:true
                            })}
                            onChangeText={(text) => this.onFieldTextChange(text,'password')} 

                            secureTextEntry={true}
                            />
                        </View>
                        
                        <Text 
      style={[styles.warrnings,this.state.passwordFocused && this.state.passwordBlured && !this.state.inputs.password.valid ?styles.show:styles.disapair]}
      >{this.state.inputs.password.warningText}</Text>
                        <View style={styles.InputTxtBox}>
                            <Image style={styles.ImgView} source={pass}/>
                            <TextInput 
                            style={styles.TxtInputStyles} 
                            placeholder="Confirm Password"
                            ref={(input) => { this.sixethTextInput = input; }}
                            returnKeyType="next"
                            onSubmitEditing={() => { 


                            }}
                            blurOnSubmit={false}
                            placeholderTextColor={'#a0a0a0'}
                            onFocus={()=>this.setState({
                              confiormPasswordFocused:true
                            
                            })}
                            onBlur={()=>this.setState({
                              confiormPasswordBlured:true
                            })}
                            value={this.state.inputs.confiormPassword.value} 
                            onChangeText={(text) => this.onFieldTextChange(text,'confiormPassword')}  
                            secureTextEntry={true}
                            />
                        </View>
                        <Text 
      style={[styles.warrnings,this.state.confiormPasswordFocused && this.state.confiormPasswordBlured && !this.state.inputs.confiormPassword.valid ?styles.show:styles.disapair]}
      >{this.state.inputs.confiormPassword.warningText}</Text>
                    </View>
                    <View style={styles.SocialBtnBox}>
                        <TouchableOpacity 
                          disabled={email && password && confiormPassword && myNumber ? false : true}
                          onPress={() =>{
                            this.RegisterUser();  
                          }}
                        style={[styles.BtnBox,{backgroundColor:email && password && confiormPassword && myNumber ?'#3b5999':'gray'}]}>
                            <Text style={styles.BtnTxtView}>SIGNUP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.BottomView}>
                        <View style={styles.BottomViewTxt}>
                            <Text style={styles.ViewTxt}>Al Ready Have An Account? </Text>
                        </View>
                        <TouchableOpacity style={styles.BottomViewTxt}>
                            <Text style={styles.ForgetPassViewSignUp}>LOGIN</Text>
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
        marginTop:210,
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
            marginBottom:15,
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
        marginLeft:15,
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
const MapsDispatchToPRops = dispatch =>{
  return{
    onRegisterUser:(authdata) =>dispatch(RegisterUser(authdata))
  }
}
export default connect(null,MapsDispatchToPRops) (SignupScreen)