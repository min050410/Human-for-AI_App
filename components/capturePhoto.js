import React from 'react';
import { TouchableOpacity, View, StyleSheet, Button, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';

// const Touchable = styled.TouchableOpacity``;

const CapturePhoto = () => {
const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고
    //사진 찍기 함수
    const capturePhoto = async () => {
    if (cameraRef) {
      //data 는 사진찍은것
      const data = await cameraRef.current.takePictureAsync({
          quality: 1,
          exif: true,
      });
      // 사진 찍은 데이터값
      console.log(data); 
    }
    };
    return (
      <>
          <RNCamera
            ref={cameraRef}
            style={{
              width: '100%',
              height: 400,
            }}
            captureAudio={false} />

          <View style={styles.views}>
            <TouchableOpacity onPress={takePhoto}>
              <View style={styles.captureButton}>
              <Text>
              <Icon name="camera" size={30} color="#FFF" />
              </Text>
              </View>
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
    backgroundColor: '#ebf3fc',
  },
  captureButton: {
    backgroundColor:'#6884FF',
    width: 200,
    borderRadius: 30,
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CapturePhoto;  