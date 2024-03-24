import { StyleSheet, Image } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import products from '../../assets/data/products'
import MenuItem from '../../components/MenuItem'
export default function MenuScreen() {
  return (
    <View>
        <MenuItem product={products[0]}/>
        <MenuItem product={products[1]}/>
        <MenuItem product={products[2]}/>
    </View>


  );
}

