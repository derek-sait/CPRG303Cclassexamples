import { Button, Text, View } from "react-native";


export default function HomeScreen( {navigation} ){

    return(
        <View>
            <Text>Welcome to my App!</Text>
            <Button title="Go to TestScreen" onPress={ () => navigation.navigate("Test") } />
            <Button title="Go to About" onPress={ () => navigation.navigate("About") } />
            <Button title="Go to Contact" onPress={ () => navigation.navigate("Contact") } />
            <Button title="Go to Fetch Data" onPress={ () => navigation.navigate("FetchData") } />
        </View>
    );
}