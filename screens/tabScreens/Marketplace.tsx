import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  FlatList,
  Image,
  Button,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import { RootState } from '../../store/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../../store/counterReducer'

const { width } = Dimensions.get('window')

const ProductList = () => {
  const [products, setProducts] = useState([])
  const [cart, setCart] = useState([])
  const count = useSelector((state: RootState) => state.counter.value)
  const dispatch = useDispatch()

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
  }, [])

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>${item.price}</Text>
      <TouchableOpacity
        className="bg-yellow-400  rounded-3xl px-5 py-2 "
        onPress={() => addToCart(item)}
      >
        <Text>Add to cart</Text>
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <View className="p-5">
        
        <TouchableOpacity aria-label="Increment value" onPress={() => dispatch(increment())}>
          <Text>Increment</Text>
        </TouchableOpacity>
        <TouchableOpacity aria-label="Increment value" onPress={() => dispatch(decrement())}>
          <Text>Decrement</Text>
        </TouchableOpacity>
        <Text>{count}</Text>
      </View>

      {/* <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item, index }) =>
          index % 2 === 0 ? (
            <View style={styles.row}>
              {renderItem({ item })}
              {products[index + 1] && renderItem({ item: products[index + 1] })}
            </View>
          ) : null
        }
      /> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  card: {
    width: width / 2 - 24,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  price: {
    fontSize: 14,
    color: 'black',
    marginBottom: 8,
  },
})

export default ProductList
