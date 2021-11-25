import React, { Component } from 'react';
import { Platform, PermissionsAndroid, View, Image, FlatList ,StyleSheet, TouchableWithoutFeedback, TouchableOpacity, Text, ImageBackground  } from 'react-native';
// import { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import CameraRoll from "@react-native-community/cameraroll"

class UploadPhoto extends Component{
  


    constructor(props) {
        super(props);
        this.state = {
            data:'',
            nowdata:'',
            uploadData:'',
            icontoggle:false
        }
        
    }
    
    
        
      async componentDidMount(){
            
        if (Platform.OS === 'android') {
            const result = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
              {
                title: 'Permission Explanation',
                message: '사진 권한이 필요합니다!',
              },
            );
            if (result !== 'granted') {
              console.log('Access to pictures was denied');
              return;
            }
          }
    
          CameraRoll.getPhotos({
            first: 50,
            assetType: 'Photos',
          })
          .then(res => {
            this.setState({ data: res.edges });            
          })
          .catch((error) => {
             console.log(error);
          });
        
      }
    
    render(){
        const selectPhoto = (item) => {
          this.setState({ nowdata: item.node.image.uri });
          this.setState({ icontoggle: !this.state.icontoggle });
        }

        const uploadPhoto = () => {
          this.setState({ uploadData: this.state.nowdata });
          setTimeout(() => {
            goPhoto();
          }, 1000)  
        } 

        const goPhoto = () => {
          console.log( this.state.uploadData );
          
          // 서버와 연결


          // 그리고 결과창으로 리다이렉트



        }


        return(
            <View style={styles.views}>
                <FlatList
                    // sytle={styles.listview}
                    data={this.state.data}
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
                        source={{ uri: item.node.image.uri }}
                    >
                      <Icon name="ios-checkmark-circle" size={30} 
                      color = {( this.state.icontoggle && this.state.nowdata==item.node.image.uri )? "#6884FF" : "#fff"} />
                    </ImageBackground>
                    </TouchableWithoutFeedback>  
                  }
                />
                <TouchableWithoutFeedback onPress={() => {
                      uploadPhoto() }
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
    
}

const styles = StyleSheet.create({
  views: {
    // backgroundColor: "blue",
    flex: 1,
  },
  captureButton: {
    backgroundColor:'#6884FF',
    // borderRadius: ,
    justifyContent: 'center',
    alignItems: 'center',
  },
})



export default UploadPhoto;