import React, { useState, useEffect } from "react";

import { JosefinSans_300Light } from '@expo-google-fonts/josefin-sans';
import { JosefinSans_400Regular } from '@expo-google-fonts/josefin-sans';
import { JosefinSans_100Thin_Italic } from '@expo-google-fonts/josefin-sans';
import * as Font from 'expo-font';

const useCustomFont = () => {
    const [appIsReady, setAppIsReady] = useState(false);

    useEffect(() => {
        async function prepare() {
            try {
                await Font.loadAsync({ 'josefinsans-light': JosefinSans_300Light });
                await Font.loadAsync({ 'josefinsans-regular': JosefinSans_400Regular });
                await Font.loadAsync({ 'josefinsans-lightitalic': JosefinSans_100Thin_Italic });
            } catch (e) {
                console.warn(e);
            } finally {
                setAppIsReady(true);
            }
        }
        prepare();
    }, []);

    return appIsReady;
}

export default useCustomFont