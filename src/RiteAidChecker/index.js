import React, { useState } from 'react';

import {
  Alert,
  Text,
  ScrollView,
} from 'react-native';

import StoreChecker from './StoreChecker'

import { storeMap } from './stores';

export default function RightAidChecker() {
  const [stores, setStores] = useState(storeMap);

  return (
    <ScrollView style={{ height: '100%', width: '100%' }}>
      {Object.values(stores).map(store => <StoreChecker key={store.id} store={store} />)}
    </ScrollView>
  );
}
