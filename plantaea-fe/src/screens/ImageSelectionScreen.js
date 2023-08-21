import { View, Text, PermissionsAndroid, Image, ActivityIndicator } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from 'expo-image-picker'

import Button from '@components/Button'

import { API_PI_URL } from '@config/urls';

const ImageSelectionScreen = ({ navigation, route }) => {
    const [photo, setPhoto] = useState();
    const [isLoading, setIsLoading] = useState(false)
    const [identificationResults, setIdentificationResults] = useState({})

    const openCamera = () => {

    }

    const openGallery = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result.assets[0].uri);

        const formData = new FormData()
        formData.append('file', {
            uri: result.assets[0].uri,
            type: 'image/jpg',
            // type: result.assets[0].type,
            name: 'test.jpg',
            // name: result.assets[0].fileName
            fileName: 'image'
        })

        setIsLoading(true);

        try {
            let res = await fetch(
                `http://192.168.100.194:8081/api/identifyPlant`,
                {
                    method: 'post',
                    body: formData,
                }
            );
            let responseJson = await res.json();
            setIsLoading(false);
            setIdentificationResults(responseJson);
            navigation.navigate("IdentificationResultsScreen", { data: { responseJson } })
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            {isLoading ? (
                <View className="flex flex-col items-center justify-center h-full">
                    <ActivityIndicator animating={true} color="darkgreen" size="large" />
                </View>
            ) : (
                <View>
                    <Button label="Open Camera" onPress={() => navigation.navigate("IdentificationResultsScreen")} />
                    <Button label="Pick from Photos" onPress={openGallery} />
                </View>
            )}
            {/* {photo && <Image source={{ uri: photo }} style={{ width: 800, height: 800 }} />} */}
        </View>
    );
};

export default ImageSelectionScreen;
