import {View, Text} from 'react-native';
import {useLocalSearchParams, Stack} from 'expo-router'

export default function ProductDetailsScreen(){
	const {id}=useLocalSearchParams();
    return(
        <View>
            <Stack.Screen options = {{title:'Details:'+id}}/>
            <Text style={{fontSize:20}}>Screen for product id: {id}</Text>
        </View>
    );
};
