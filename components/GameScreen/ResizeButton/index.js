import React, { useCallback, useEffect, useState } from 'react'
import Slider from '@react-native-community/slider';
import {TouchableOpacity, Text, StyleSheet, Dimensions,View} from 'react-native'
export default function ResizeButton(props){
    const {currentSquareWidth, handleChangeSquareWidth} = props
    const [isActive, setIsActive] = useState(false)

    const onPressResize = useCallback(() => {
        setIsActive(true)
    }, [])
    
    const onPressConfirm = useCallback(() => {
        setIsActive(false)
    }, [])

    return (
        <>
            {!isActive ? 
                <TouchableOpacity onPress={onPressResize} activeOpacity={0.7} style={[styles.button_wrapper, styles.position]}>
                    <Text>
                        Resize
                    </Text>
                </TouchableOpacity>
                :
                <View style={[styles.position]}>
                    <TouchableOpacity onPress={onPressConfirm} style={[styles.button_wrapper, {alignSelf:'center'}]}>
                        <Text>
                            Confirm
                        </Text>
                    </TouchableOpacity>
                    <Slider
                        style={[styles.slider]}
                        value={currentSquareWidth}
                        minimumValue={10}
                        onSlidingComplete={handleChangeSquareWidth}
                        maximumValue={Dimensions.get('window').width/5}
                    />
                </View>
            }
        </>
    )
}

const styles = StyleSheet.create({
    button_wrapper: {
        paddingHorizontal: 15,
        paddingVertical:10,
        backgroundColor: '#e2e2e2',
        borderRadius: 10,
        zIndex: 10,
        elevation: 5,
    },
    position: {
        position: 'absolute',
        top:30,
        
    },
    slider:{
        paddingTop:20,
        width: Dimensions.get('window').width * 0.9
    }
})