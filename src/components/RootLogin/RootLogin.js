
import {Navigation} from 'react-native-navigation';
import Icons from 'react-native-vector-icons/FontAwesome';
import IconsM from 'react-native-vector-icons/MaterialIcons';


const RootLogin = () =>{
    Promise.all([
      IconsM.getImageSource(Platform.OS === 'android' ?'timeline':'timeline',30),
      IconsM.getImageSource(Platform.OS === 'android'? "lock-open": "lock-open",30),
    ]).then(sources => {
      Navigation.setRoot({
        root: {
          sideMenu: {
            id: "sideMenu",
            left: {
              component: {
                id: "Drawer",
                name: "navigation.playground.SideDrawScreen",
              }
            },
            center: {
              bottomTabs :{
                options: {
                    bottomTabs: {
                        titleDisplayMode:'showWhenActive',
                    }
                  },
                children: [
                  {
                    stack: {
                      children: [{
                        component:{
                          name:'navigation.playground.Home',
                          id:'MyChallenges',
                          options: {
                            topBar: {
                              background: {
                                color: '#FFFFFF'
                              },
                              title: {
                                text: 'Main Page',
                                color:'#000000',
                                alignment: 'center'
                              },
                              leftButtons: [{
                                id: 'openSideDrawer',
                                icon:sources[3],
                                color:'#000000',
                              }]
                            }
                          }
                        }
                      }],
                      options: {
                        bottomTab: {
                          text: 'CSS',
                          icon:sources[0],
                          // badge: '2',
                          // badgeColor: 'lightgray',
                          iconColor: 'lightgrey',
                          // dotIndicator: {
                          //   color: 'green', // default red
                          //   size: 8, // default 6
                          //   visible: true // default false
                          // },
                          selectedIconColor: '#29ABE2',
                          textColor: 'lightgrey',
                          selectedTextColor: '#29ABE2',
                          fontFamily: 'ProximaNova-Bold',
                        }
                      }
                    }
                  },
                  {
                    stack: {
                      children: [{
                        component:{
                          name:'navigation.playground.CSSScreen',
                          id:'open',
                          options: {
                            topBar: {
                              background: {
                                color: '#FFFFFF'
                              },
                              title: {
                                text: 'Open Challenges',
                                color:"#000000",
                                alignment: 'center'
                              },
                              leftButtons: [{
                                id: 'openSideDrawer',
                                icon:sources[3],
                                color:'grey',
                              }]
                            }
                          }
                        }
                      }],
                      options: {
                        bottomTab: {
                          text: 'PMS',
                          icon:sources[1],
                          iconColor: 'lightgrey',
                          selectedIconColor: '#29ABE2',
                          textColor: 'lightgrey',
                          selectedTextColor: '#29ABE2',
                          fontFamily: 'ProximaNova-Bold',
                          fontSize:10
                        }
                      }
                    }
                  }, 
                  
                ],
                
              },
            }
          }
        }
      });
    })
}

export default RootLogin;