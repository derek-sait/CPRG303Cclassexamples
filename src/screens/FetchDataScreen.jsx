"use client"

import { useEffect, useState } from "react";
import { Button, Image, SafeAreaView, Text, View } from "react-native";
import { mainStyles } from "../assets/styles/styles";

export default function FetchDataScreen({navigation}){

    const [duckData, setDuckData] = useState(null);
    const [newDuck, setNewDuck] = useState(0);

    async function fetchDuck(){
        try {
            const response = await fetch("https://random-d.uk/api/v2/random");
            if (!response.ok) {
                let data = {
                    url: "https://www.example.com/assets/images/404.jpg", // example 404 image
                    message: "There was a problem with the Duck API."
                }
                setDuckData(data);
                return;
            }
            const data = await response.json();
            setDuckData(data);
        } catch (error) {
            let data = {
                url: "https://www.example.com/assets/images/404.jpg", // example 404 image
                message: "The API server did not respond."
            }
            setDuckData(data);
            return;
        }
    }

    useEffect( () => {
        fetchDuck();
    } , [newDuck] );

    return(
        <SafeAreaView>
            <Text>Random Duck!</Text>
            <Text>Fetching a random duck image from an API.</Text>
            { duckData ? (
                <View>
                    <Image source={ { uri: duckData.url } } style={ {width:300,height:300} } />
                    <Text>{duckData.url}</Text>
                    <Text>{duckData.message}</Text>
                    <Button title="New Duck!" onPress={ () => setNewDuck( Math.random() ) } />
                </View>
            ) : (
                <Text>Loading...</Text>
            ) }
            {/* <Text style={mainStyles.myCustomText}>{JSON.stringify(duckData)}</Text> */}
        </SafeAreaView>
    );
}