import React from 'react';
import { TouchableOpacity, View, StyleSheet, Button, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from 'react';

// const Touchable = styled.TouchableOpacity``;

const CapturePhoto = () => {
    const cameraRef = React.useRef(null); // useRef로 camera를 위한 ref를 하나 만들어주고

    const [count, setCount] = useState(false)
    const [img, setImg] = useState(false)
    //사진 찍기 함수
    const capturePhoto = async () => {
      setCount("3");
      setTimeout(() => {
        onePhoto();
      }, 1000)

      setTimeout(() => {
        twoPhoto();
      }, 2000)

      setTimeout(() => {
        threePhoto();
        exePhoto();
      }, 3000)
      
      const onePhoto = () => {
        setCount("2");
      }
      const twoPhoto = () => {
        setCount("1");
      }
      const threePhoto = () => {
        setCount(false);
      }

      const exePhoto = async () => {
      if (cameraRef) {
      
      //data 는 사진찍은것
      const data = await cameraRef.current.takePictureAsync({
          quality: 1,
          exif: true,
      });
      // 사진 찍은 데이터값 - useState에 저장
      console.log(data.uri); 

      setImg(data.uri);
      // img == 주소
      // 여기서 서버와 연결


      //후에 결과창으로 리다이렉트

    }
    }
    };
    return (
      <>
          <View>
          <RNCamera
            ref={cameraRef}
            style={{
              width: '100%',
              height: 400,
              alignContent:'center'
            }}
            captureAudio={false}
          >
          <Text style={styles.texts}> {count} </Text>
          </RNCamera>
          </View>

          <View style={styles.views}>
            <TouchableOpacity onPress={capturePhoto}>
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
  texts: {
    fontSize: 50,
    fontWeight: '100',
    color: 'white',
    alignItems: 'center',
    // alignItems: 'center',
  }
})

export default CapturePhoto;  