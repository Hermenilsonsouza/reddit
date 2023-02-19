import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  ListRenderItemInfo,
  ActivityIndicator,
} from 'react-native';
import {Container} from '../../components/styled/styles';
import Card from '../../components/card/card';
import {CardProps} from '../../components/card/types';
import {searchData} from '../../services';

import {RootStackParamList} from '../../routes/routerTypes';
import {NativeStackScreenProps} from '@react-navigation/native-stack/lib/typescript/src/types';

type NavProps = NativeStackScreenProps<RootStackParamList, 'Hot'>;

const Hot = ({navigation}: NavProps) => {
  const [data, setdata] = useState();

  const update = async () => {
    const i = await searchData('hot');
    setdata(i);
  };

  useEffect(() => {
    update();
  }, []);

  function renderItem({item}: ListRenderItemInfo<CardProps>) {
    return (
      <Card
        title={item.title}
        authorFullname={item.authorFullname}
        created={item.created}
        numComments={item.numComments}
        ups={item.ups}
        url={item.url}
        onPress={() => navigation.navigate('Details', {item: item.title})}
      />
    );
  }

  return (
    <SafeAreaView>
      {data ? (
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={renderItem}
        />
      ) : (
        <Container>
          <ActivityIndicator size="large" color="#5296dd" />
        </Container>
      )}
    </SafeAreaView>
  );
};

export default Hot;
