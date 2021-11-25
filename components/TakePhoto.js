import React from 'react';
import {  TouchableOpacity, View, StyleSheet, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

// const Touchable = styled.TouchableOpacity``;

const TakePhoto = () => {
const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고
    //사진 찍기 함수
    const takePhoto = async () => {
    if (cameraRef) {
      //data 는 사진찍은것
      const data = await cameraRef.current.takePictureAsync({
          quality: 1,
          exif: true,
      });
    }
  };
    return (
      <>
          <RNCamera
            ref={cameraRef}
            style={{
              width: 200,
              height: 200,
            }}
            captureAudio={false} />
          <View style={styles.views}>
            <TouchableOpacity onPress={takePhoto}>
              <Button style={styles.Buttons} title="hi"/>
            </TouchableOpacity>
          </View>
       </>
  )
}

const styles = StyleSheet.create({
  views: {
    // backgroundColor: "blue",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Buttons: {
    width: "100px",
    height: "100px",
    borderRadius: "50px",
    border: "10px solid lightGrey",
    backgroundColor: "pink",
  },
})

export default TakePhoto;  