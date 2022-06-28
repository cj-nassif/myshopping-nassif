import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';

import firestore from '@react-native-firebase/firestore';

import { styles } from './styles';
import { Product, ProductProps } from '../Product';
// 3  minutos 49 s
export function ShoppingList() {
  const [products, setProducts] = useState<ProductProps[]>([]);

  // useEffect(() => {
  //   firestore()
  //     .collection('products')
  //     .get()
  //     .then(response => {
  //       const data = response.docs.map(doc => {
  //         return {
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //       }) as ProductProps[];
  //       setProducts(data);
  //     })
  //     .catch(error => console.log(error));
  // }, [])

  //Estratégia de atualização em tempo real (realtime firestore)

  // useEffect(() => {
  //   const subscribe = firestore()
  //     .collection('products')
  //     .onSnapshot(querySnapshot => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //       }) as ProductProps[];

  //       setProducts(data);
  //     })
  //   return () => subscribe();
  // }, [])

  // //  aplicando filtro
  // useEffect(() => {
  //   const subscribe = firestore()
  //     .collection('products')
  //     .where('quantity', '==', 100)
  //     .onSnapshot(querySnapshot => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //       }) as ProductProps[];

  //       setProducts(data);
  //     })
  //   return () => subscribe();
  // }, [])

  // //  aplicando limite de quantidade objetos retornados na consulta
  // useEffect(() => {
  //   const subscribe = firestore()
  //     .collection('products')
  //     .limit(2)
  //     .onSnapshot(querySnapshot => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //       }) as ProductProps[];

  //       setProducts(data);
  //     })
  //   return () => subscribe();
  // }, [])

  //  ordenando a consulta
  useEffect(() => {
    const subscribe = firestore()
      .collection('products')
      .orderBy('description', 'asc')
      .onSnapshot(querySnapshot => {
        const data = querySnapshot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        }) as ProductProps[];

        setProducts(data);
      })
    return () => subscribe();
  }, [])

  // //intervalo de consulta
  // useEffect(() => {
  //   const subscribe = firestore()
  //     .collection('products')
  //     .orderBy('quantity')
  //     .startAt(2)
  //     .endAt(4)
  //     .onSnapshot(querySnapshot => {
  //       const data = querySnapshot.docs.map((doc) => {
  //         return {
  //           id: doc.id,
  //           ...doc.data()
  //         }
  //       }) as ProductProps[];

  //       setProducts(data);
  //     })
  //   return () => subscribe();
  // }, [])

  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={({ item }) => <Product data={item} />}
      showsVerticalScrollIndicator={false}
      style={styles.list}
      contentContainerStyle={styles.content}
    />
  );
}
