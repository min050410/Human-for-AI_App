import React, { Component } from 'react';
import { BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
// import {RNCamera} from 'react-native-camera';
import CapturePhoto from './components/capturePhoto';
import UploadPhoto from './components/uploadPhoto';


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
    if(this.state.iscam){
      return <CapturePhoto/>
    }
    else if(this.state.isGarrery){
      return <UploadPhoto/>
    }
    else{
    return (
      // webView
      <WebView
        source={{ uri: "https://github.com/Human-for-AI/" }}
        ref={(webView) => { this.webView.ref = webView; }}
        onNavigationStateChange={(navState) => { 
          this.webView.canGoBack = navState.canGoBack; 
          // console.log("current_path", navState.url);
          if(navState.url == "https://github.com/orgs/Human-for-AI/repositories"){
            this.setState( { iscam: 1 } )
            console.log( this.state.iscam )
          }
          else if(navState.url == "https://github.com/orgs/Human-for-AI/packages"){
            this.setState( { isGarrery: 1 } )
            console.log( this.state.isGarrery )
          }
        }}
      />
      
      //CapturePhoto test
      // <CapturePhoto/>

      //uploadPhoto test
      // <UploadPhoto/>
      
      );
    }
  }
}
export default MyWeb


