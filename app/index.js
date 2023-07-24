import { View,ScrollView, SafeAreaView } from "react-native";
import { useState } from "react";
import { Stack, useRouter } from "expo-router";

import {COLORS ,icons, images,SIZES} from '../constants'
import {Nearbyjobs , Popularjobs , ScreenHeaderBtn , Welcome} from '../components'
import styles from "../styles/search";
import { TextInput } from "react-native-gesture-handler";



const Home = () => {
    const router = useRouter()
    return (
        <SafeAreaView style={{flex:1 ,backgroundColor:COLORS.lightWhite}}>
            <Stack.Screen 
                options={{
                    headerStyle:{backgroundColor:COLORS.lightWhite},
                    headerShadowVisible : false ,
                    headerLeft: () =>(
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension="70%"  />
                    ) ,
                    headerRight: () =>(
                        <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
                    ),
                  

                    headerTitle: "Vectiqa" ,
                    
                }}
            
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View 
                style={{flex:1 ,
                padding:SIZES.medium}}
                >
                <Welcome />
                <Popularjobs />
                <Nearbyjobs/>
                </View>

                <View style={styles.searchContainer}>
                <View style={styles.searchWrapper}>
                <TextInput 
                style={styles.searchInput}
                />
                </View>
                
                
                </View>
            </ScrollView>
            

        </SafeAreaView>
    )
}

export default Home ;