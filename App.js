import React, { Component } from 'react';
import { BackHandler} from 'react-native';
import { WebView } from 'react-native-webview';
// import {RNCamera} from 'react-native-camera';
import CapturePhoto from './components/capturePhoto';
import UploadPhoto from './components/uploadPhoto';


class MyWeb extends Component {
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
    return (
      // <WebView
      //   source={{ uri: "https://github.com/Human-for-AI/" }}
      //   ref={(webView) => { this.webView.ref = webView; }}
      //   onNavigationStateChange={(navState) => { this.webView.canGoBack = navState.canGoBack; }}
      // />
      // camera test
      // <RNCamera
      //   style={{width: 200, height: 200}}
      //   type={RNCamera.Constants.Type.back}
      //   captureAudio={false}
      // />

      //takePhoto test
      // <CapturePhoto/>

      //uploadPhoto test
      <UploadPhoto/>
      
    );
  }
}
export default MyWeb


