import {View, Text, Image, StyleSheet} from 'react-native';
import {useLocalSearchParams, Stack} from 'expo-router';
import products from '@assets/data/products';
import {DefaultImage} from '@/components/MenuItem';

export default function ProductDetailsScreen(){
	const {id}=useLocalSearchParams();
	const product = products.find((p) => p.id.toString() == id);
	if(!product){
		return (
			<View>
                <Stack.Screen options = {{title:'Not Found!'}}/>
                <Text style={{fontSize:20}}>Product not found!</Text>
            </View>
        );
	};
    return(
        <View style= {styles.container}>
            <Stack.Screen options = {{title:product.name}}/>
            <Image
                source={{uri: product.image || DefaultImage}}
                style = {styles.image}
                resizeMode = "contain"
            />
            <Text style={styles.price}>${product.price}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#ffffff',
		flex:1,
		padding: 10,
	},
	image: {
		width: '100%',
		aspectRatio: '1',
	},
	price: {
		fontSize: 18,
		fontWeight: 'bold',
	},
})