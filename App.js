import {
	Platform,
  } from "react-native";
import { Navigation } from "react-native-navigation";
import Icons from 'react-native-vector-icons/Ionicons';
import Home from './src/screen/Home/Home';
import LoginScreen from './src/screen/LoginScreen/LoginScreen';
import SignupScreen from './src/screen/SignupScreen/SignupScreen';
import CSSScreen from './src/screen/CSSScreen/CSSScreen';
import PMSScreen from './src/screen/PMSScreen/PMSScreen';
import McqsScreen from './src/screen/McqsScreen/McqsScreen';
import SideDrawScreen from './src/screen/SideDrawScreen/SideDrawScreen';
import AppInfoScreeen from './src/screen/AppInfoScreeen/AppInfoScreeen';
import AboutUsScreen from './src/screen/AboutUsScreen/AboutUsScreen';
import ContactUsScreen from './src/screen/ContactUsScreen/ContactUsScreen';
import configureStore from './src/store/configurStore';
import { Provider } from 'react-redux';
const store = configureStore();
//Home
Navigation.registerComponentWithRedux(`navigation.playground.Home`, () => Home,Provider, store);
//LoginScreen
Navigation.registerComponentWithRedux(`navigation.playground.LoginScreen`, () => LoginScreen,Provider, store);
//SignupScreen
Navigation.registerComponentWithRedux(`navigation.playground.SignupScreen`, () => SignupScreen,Provider, store);
//CSSScreen
Navigation.registerComponentWithRedux(`navigation.playground.CSSScreen`, () => CSSScreen);
//PMSScreen
Navigation.registerComponentWithRedux(`navigation.playground.PMSScreen`, () => PMSScreen,Provider, store);
//McqsScreen
Navigation.registerComponentWithRedux(`navigation.playground.McqsScreen`, () => McqsScreen,Provider, store);
//SideDrawScreen
Navigation.registerComponentWithRedux(`navigation.playground.SideDrawScreen`, () => SideDrawScreen,Provider, store);
//AppInfoScreeen
Navigation.registerComponentWithRedux(`navigation.playground.AppInfoScreeen`, () => AppInfoScreeen,Provider, store);
//AppInfoScreeen
Navigation.registerComponentWithRedux(`navigation.playground.AboutUsScreen`, () => AboutUsScreen,Provider, store);
//ContactUsScreen
Navigation.registerComponentWithRedux(`navigation.playground.ContactUsScreen`, () => ContactUsScreen,Provider, store);



if(Platform.OS==='android'){
	Navigation.setDefaultOptions({
		layout: {
			orientation: ["portrait"],
			backgroundColor: 'transparent'
		},
		topBar: {
			visible: false,
		},
		animations: {
			setRoot: {
			  waitForRender: true,
			},
			put: {
			  waitForRender: true,
			},
			push: {
			  waitForRender: true,
			  sideMenu: {
				left: {
					visible: false,
					enabled: false
				  }
			}
			},
		  },
	});
}


    Navigation.events().registerAppLaunchedListener(() => {
        Promise.all([ Icons.getImageSource('ios-share-alt', 30) ]).then((sources) => {
            Navigation.setRoot({
                root: {
                    stack: {
                        id: 'AppStack',	
                        children: [
                            {
                                component: {
                                    name: 'navigation.playground.LoginScreen'
                                }
                            }
                        ],
                        options: {
                            topBar: {
                                visible: false
                            }
                        }
                    }
                }
            });
        });
        // if(Platform.OS==='ios'){
        //     Navigation.setDefaultOptions({
        //         topBar: {
        //             visible: false,
                    
        //         },
        //         animations: {
        //             setRoot: {
        //               waitForRender: true,
        //             },
        //             put: {
        //               waitForRender: true,
        //             },
        //             push: {
        //               waitForRender: true,
        //               sideMenu: {
        //                 left: {
        //                     visible: false,
        //                     enabled: false
        //                   }
        //             }
        //             },
        //           },
        //     });
        // }
    });