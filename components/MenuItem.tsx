import { StyleSheet, Image, Text, View } from 'react-native';
import Colors from '../constants/Colors';
import products from '../../assets/data/products'
export const MenuItem = ({product}) => {
    return (<View style={styles.container}>
                <Image source={{uri:product.image}} style = {styles.image}/>
                <Text style={styles.title}>{product.name}</Text>
                <Text style={styles.subtitle}>${product.price}</Text>
            </View>)};
export default MenuItem;

const styles = StyleSheet.create({
  image: {
  width: '100%',
  aspectRatio: 1,
  },
  container: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 20
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },

  subtitle: {
  color: Colors.light.tint,
  fontSize: 15,
  fontWeight: 'bold',
  },
});