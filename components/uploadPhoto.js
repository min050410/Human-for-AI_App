import React, { Component } from 'react';
import {useState, useEffect} from 'react';
import { Platform, PermissionsAndroid, View, Image, FlatList ,StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text, ImageBackground  } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CameraRoll from "@react-native-community/cameraroll"

const UploadPhoto = ({ navigation }) => {
  const [data, setData] = useState(false)
  const [nowdata, setNowdata] = useState(false)
  const [uploadData, setuploadData] = useState(false)
  const [icontoggle, setIcontoggle] = useState(false)
  
  useEffect(() => {
      if (Platform.OS === 'android') {
        const result = PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
          {
            title: 'Permission Explanation',
            message: '사진 권한이 필요합니다!',
          },
        );
        // if (result !== 'granted') {
        //   console.log('Access to pictures was denied');  
        // }
      }
      CameraRoll.getPhotos({
        first: 50,
        assetType: 'Photos',
      })
      .then(res => {
        setData( res.edges );            
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  useEffect(() => {
    goPhoto();
  }, [uploadData]);

  const selectPhoto = (item) => {
    setNowdata(item.node.image.uri);
    setIcontoggle(!icontoggle);
  }
  
  const uploadPhoto = () => {
    // console.log(data);
    setuploadData(nowdata);
  } 

  const goPhoto = () => {
    console.log(uploadData);
    // 서버와 연결


    // 그리고 결과창으로 리다이렉트
    // navigation.navigate('resultpage');
  }


  return(
      <View style={styles.views}>
          <FlatList
              // sytle={styles.listview}
              data={data}
              numColumns={3}
              renderItem={({ item }) => 
              <TouchableWithoutFeedback onPress={() => {
                selectPhoto(item) }
              }
              >        
              <ImageBackground resizeMode="stretch"
                  style={{
                      flex: 1,
                      width: '100%',
                      height: 150,
                  }}
                  source={{ uri: item.node.image.uri }} //{ uri: item.node.image.uri }
              >
                <Icon name="ios-checkmark-circle" size={30} 
                color = {(icontoggle && nowdata == item.node.image.uri)? "#6884FF" : "#fff"} />
              </ImageBackground>
              </TouchableWithoutFeedback>  
            }
          />
          <TouchableWithoutFeedback onPress={() => {
               
                  uploadPhoto()
               
               }
              } >
            <View style={styles.captureButton}>
            <Text>
            <Icon name="ios-checkmark" size={30} color="#fff" />
            </Text>
            </View>
          </TouchableWithoutFeedback>
      </View>
  )
        
}
    



const styles = StyleSheet.create({
  views: {
    // backgroundColor: "blue",
    flex: 1,
  },
  captureButton: {
    backgroundColor:'#6884FF',
    // borderRadius: ,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default UploadPhoto;


