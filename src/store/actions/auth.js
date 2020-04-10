import {
  SAVE_USERINFO,
} from './actionTypes';
import AsyncStorage from '@react-native-community/async-storage';
import {Alert} from 'react-native';
import {URI} from '../../components/variables/variables';
import {uiStartLoading,uiStopLoading,ShowErrorAlert,ShowSuccessAlert,LogoutLoader} from './index';
import { Navigation } from 'react-native-navigation';
import RootLogin from '../../components/RootLogin/RootLogin';
// import changeScreen from '../../components/changeScreen/changeScreen';
// import appNavigation from '../../components/navigation/navigation';
// import { Root, Popup, } from 'popup-ui'
// import { PushScreen } from '../../components/PushScreen/PushScreen';
export const loginUser = (authdata) =>{
    return dispatch => {
      dispatch(uiStartLoading());
    fetch(URI + 'api/ExpressAppLogin', {
      method:'POST',
      headers: {
      Accept:'application/json',
      'Content-Type':'application/json',
      },
      body:JSON.stringify({
        "password":authdata.password,
        "email":authdata.email,
      }),
      })
      .then((response) => response.json())
      .then((responseData) => {
        console.log(responseData);
      "POST Response",
      "Response Body -> "+JSON.stringify(responseData)

        console.log(responseData);
        // return;
        if (responseData.success) {
          
          // alert(`Loged in Successful!`);
          dispatch(uiStopLoading());

          let userData = {
            ...responseData.data
          };
          let appState = {
            isLoggedIn: true,
            user: userData,
            payment_added:responseData.data.payment_added?true:false,
          };

          AsyncStorage.setItem("appState", JSON.stringify(appState));

          dispatch(saveUserInfo(appState))


      
          
            
          
        } else if(!responseData.success) {
          dispatch(uiStopLoading());

          dispatch(ShowErrorAlert(responseData.data));
        }
    
      }).catch((err)=>{
        console.log(err);
        console.log('errpr');
      })
      .done();

    }
}

export const saveUserInfo = (appState) => {
    return {
      type: SAVE_USERINFO,
      user: appState,
    };
  };


  export const RegisterUser = (authdata,componentId) => {
 
    return (dispatch,getState) =>{
      // console.log(componentId);
      // return;
      dispatch(uiStartLoading());
        fetch(URI + 'RegisterUser', {
            method:'POST',
            headers: {
            Accept:'application/json',
            'Content-Type':'application/json',
            },
            body:JSON.stringify({
              ...authdata
            }),
            })
            .then((response) => response.json())
            .then((responseData) => {
              console.log(responseData);
              if (responseData.success) {
                dispatch(uiStopLoading());

                let userData = {
                  ...responseData.data
                };
                let appState = {
                  isLoggedIn: true,
                  user: userData,
                };
      
                AsyncStorage.setItem("appState", JSON.stringify(appState));
      
                dispatch(saveUserInfo(appState))
              
              
                RootLogin();
                
                
              } else if(!responseData.success) {
                dispatch(uiStopLoading());

              }
            }).catch((err)=>{
              console.log('sdas')
            })
            .done();
    }
  }
  export const LoginWithSocial = (authdata,componentId) => {
 
    return (dispatch,getState) =>{
      // console.log(componentId);
      // return;
      dispatch(uiStartLoading());
        fetch(URI + 'LoginWithSocial', {
            method:'POST',
            headers: {
            Accept:'application/json',
            'Content-Type':'application/json',
            },
            body:JSON.stringify({
              ...authdata
            }),
            })
            .then((response) => response.json())
            .then((responseData) => {
              console.log(responseData);
              if (responseData.success) {
                dispatch(uiStopLoading());

                let userData = {
                  ...responseData.data
                };
                let appState = {
                  isLoggedIn: true,
                  user: userData,
                };
      
                AsyncStorage.setItem("appState", JSON.stringify(appState));
      
                dispatch(saveUserInfo(appState))
              
              
                RootLogin();
                
                
              } else if(!responseData.success) {
                dispatch(uiStopLoading());

              }
            }).catch((err)=>{
              console.log('sdas')
            })
            .done();
    }
  }
export const logoutUser = () =>{
  return (dispatch,getState) =>{
    // dispatch(LogoutLoader(true))
    let id= getState().user.user.id;
    dispatch(DisableStatus(id));
    //dispatch(authRemoveToken());
    dispatch(authClearStorage()).then(() =>{
      // pusherUnsubscribe();
      // pusher.unsubscribe('my-channel');
      // dispatch(LogoutLoader(false))

      // appNavigation('navigation.playground.SignInScreen')
    })
    
}

}
export const authClearStorage = () => {
  return dispatch => {
    return AsyncStorage.removeItem("appState");
  };
};



export const getCountrysData = () =>{
  return dispatch =>{
    fetch(URI +'api/get/Countries')
    .then((response)=>response.json())
    .then((responseData) =>{
      countries = [];
      countries.push(responseData.data);

      dispatch(saveCountryData(countries));
    }).catch((err)=>{
      console.log('sdas')
    })
  }
}
export const SearchCountry = (text) => {
  return dispatch => {
    fetch(URI +'api/Search/Country?name='+text)
    .then((response)=>response.json())
    .then((responseData) =>{
      countries = [];
      countries.push(responseData.data);

      dispatch(SaveSearchedData(countries));
    }).catch((err)=>{
      console.log('sdas')
    })
  }
}




