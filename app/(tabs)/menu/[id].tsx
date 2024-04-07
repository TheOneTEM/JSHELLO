import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useLocalSearchParams, Stack} from 'expo-router';
import products from '@assets/data/products';
import {DefaultImage} from '@/components/MenuItem';
import {useState} from  'react';
import Button from '@/components/Button'

const sizes=['S', 'M', 'L', 'XL']

export default function ProductDetailsScreen(){
	const {id}=useLocalSearchParams();
	const product = products.find((p) => p.id.toString() === id);
	const [selectedSize, setSelectedSize] = useState('L');
const AddToCart = () => {
	console.warn('Adding to Cart, size: '+selectedSize)
}
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
            <Text style={styles.sizeTitle}>Select size:</Text>

            <View style={styles.sizes} >
                {sizes.map((size) => (
                    <Pressable
                    style={[styles.sizeSelector, {backgroundColor: selectedSize === size? '#dddddd': bgc}]}  key={size}
                    onPress={()=>{setSelectedSize(size);}}>
                        <Text style= {[styles.sizeText, {color: selectedSize === size? null:'#cccccc'}]}>{size}</Text>
                    </Pressable>
                ))}
            </View>
            <Text style={styles.price}>Price: ${product.price}</Text>
            <Button onPress={AddToCart}text='Add to cart'/>
        </View>
    );
};
const bgc = '#ffffff' // bgc = background color
const styles = StyleSheet.create({
	container: {
		backgroundColor: bgc,
		flex:1,
		padding: 10,
	},
	image: {
		width: '100%',
		aspectRatio: '1',
	},
	sizeTitle: {
		fontSize: 25,
		fontWeight: 'bold',
	},
	price: {
		fontSize: 25,
    	fontWeight: 'bold',
    	marginTop: 'auto',
    },
	sizes: {
		backgroundColor: bgc,
		flexDirection: 'row',
		justifyContent: 'space-around'
	},
	sizeSelector: {
		backgroundColor: '#dddddd',
		width: 50,
		aspectRatio: 1,
		borderRadius: 25,
		alignItems: 'center',
		justifyContent: 'center',
	},
	sizeText: {
		fontSize: 20,
	},
})