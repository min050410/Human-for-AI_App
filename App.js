import React, { Component } from 'react';
import { BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
// import {RNCamera} from 'react-native-camera';
import MainPage from './components/mainPage'
import CapturePhoto from './components/capturePhoto';
import UploadPhoto from './components/uploadPhoto';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

class MyWeb extends Component {

  constructor(props) {
    super(props);
    this.state = {
      iscam: false,
      isGarrery: false,
    }
    
  }
  webView = {
    canGoBack: false,
    ref: null,
  }
  onAndroidBackPress = () => {
    if (this.webView.canGoBack && this.webView.ref) {
      this.webView.ref.goBack();
      return true;
    }
    return false;
  }

  componentDidMount() {
    if (Platform.OS === 'android') {
      BackHandler.addEventListener('hardwareBackPress', this.onAndroidBackPress);
    }
  }

  componentWillUnmount() {
    if (Platform.OS === 'android') {
      BackHandler.removeEventListener('hardwareBackPress');
    }
  }

  
  

  render() {
    return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainPage}
          //header 부분 삭제
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="CapturePhoto" 
          component={CapturePhoto} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="UploadPhoto" 
          component={UploadPhoto} 
          options={{ headerShown: false }}
        />
        
      </Stack.Navigator>
    </NavigationContainer>
    )

    //webView 일때
    //webView 코드 다 짜놨는데 프론트 배포 늦어져서 취소함 ㅠ

    // if(this.state.iscam){
    //   return <CapturePhoto/>
    // }
    // else if(this.state.isGarrery){
    //   return <UploadPhoto/>
    // }
    // else{
    // return (
    //   // webView
    //   // uri 를 바꿔서 return 값을 조정
    //   <WebView
    //     source={{ uri: "https://github.com/Human-for-AI/" }}
    //     ref={(webView) => { this.webView.ref = webView; }}
    //     onNavigationStateChange={(navState) => { 
    //       this.webView.canGoBack = navState.canGoBack; 
    //       // console.log("current_path", navState.url);
    //       if(navState.url == "https://github.com/orgs/Human-for-AI/repositories"){
    //         this.setState( { iscam: 1 } )
    //         console.log( this.state.iscam )
    //       }
    //       else if(navState.url == "https://github.com/orgs/Human-for-AI/packages"){
    //         this.setState( { isGarrery: 1 } )
    //         console.log( this.state.isGarrery )
    //       }
    //     }}
    //   /> 
    //   );
    // }
  }
}
export default MyWeb


