import { StyleSheet, Image, FlatList } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import products from '@assets/data/products'
import MenuItem from '@components/MenuItem'

export default function MenuScreen() {
  return (
    <FlatList
        data={products}
        renderItem={({item}) => <MenuItem product={item}/>}
        numColumns = {2}
        contentContainerStyle={{gap:10, padding:10}}
        columnWrapperStyle={{gap:10}}
    />
  );
}

