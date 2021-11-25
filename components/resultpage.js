import React from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';
import { WithLocalSvg } from 'react-native-svg';
import Imagesvg from '../image/Imagesvg.svg';

const MainPage = ({ navigation }) => {
    return(
        <View style={styles.wrap}>
            <View style={styles.card}>
                <TouchableOpacity onPress={() =>
                navigation.navigate('UploadPhoto')
                }>
                <View style={styles.inCard}>
                    <WithLocalSvg
                        style={styles.svg}
                        width={50}
                        height={50}
                        asset={Imagesvg}
                    />
                </View>
                </TouchableOpacity>
            <View style={styles.bottons}>
                <TouchableOpacity onPress={() =>
                navigation.navigate('CapturePhoto', {name: 'Jane'})
                }>
                <View style={styles.capture}><Text style={{ color: '#777575' }}>사진 찍기</Text></View>
                </TouchableOpacity>
                <View style={styles.read}><Text style={{ color: 'white' }}>그림 읽기</Text></View>
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrap: {
        flex: 1,
        backgroundColor: '#ebf3fc',
        flexDirection: 'column',
        justifyContent: 'center',
        
    },
    card: {
        backgroundColor: '#FFFFFF',
        flex: 0.6,
        marginHorizontal: 40,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        justifyContent: 'center',
    },
    inCard: {

        // backgroundColor: 'blue',
        // margin: '20 auto',
        height: 200,
        borderWidth: 1.5,
        borderRadius: 20,
        marginHorizontal: 30,
        // border: 'dashed black',
        borderColor: '#E9E9E9',
        borderStyle: 'dashed',
        marginBottom: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    svg: {
        marginTop: 70,
    },
    bottons: {
        display: 'flex',
        flexDirection: 'row',
        marginHorizontal: 30,
        justifyContent: 'space-between',
        // gap: 100
    },
    capture: {
        backgroundColor: "#E9E9E9",
        padding: 8,
        borderRadius: 10,
        
    },
    read: {
        backgroundColor: "#6884FF",
        padding: 8,
        borderRadius: 10,
    },
    text: {
        color: "#FFFFFF",
    }
})

export default MainPage;