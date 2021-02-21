import React, { Component } from 'react';

import {
  Button,
  ScrollView,
  View,
} from 'react-native';

import StoreChecker from './StoreChecker'

import checkStore from './checkStore';
import { storeMap } from './stores';

class RightAidChecker extends Component {
  state = {
    stores: { ...storeMap },
  };

  handleUpdateStore = async (storeId) => {
    this.updateStore(storeId, { error: undefined, hasSlots: undefined, loading: true });

    try {
      const hasSlots = await checkStore(storeId);
      this.updateStore(storeId, { hasSlots, loading: false });
    } catch(err) {
      this.updateStore(storeId, { error: err.message, loading: false });
    }
  }

  handleUpdateStores = async () => {
    Object.values(this.state.stores).forEach(store => this.handleUpdateStore(store.id));
  }

  updateStore(storeId, updates) {
    this.setState(state => ({
      stores: {
        ...state.stores,
        [storeId]: {
          ...(state.stores[storeId]),
          ...updates,
        },
      }
    }));
  }

  render() {
    return (
      <View style={{ flexDirection: 'column', height: '100%', width: '100%' }}>
        <ScrollView style={{ flexGrow: 1, width: '100%' }}>
          {
            Object.values(this.state.stores).map(
              store => (
                <StoreChecker
                  key={store.id}
                  store={store}
                  onCheckPress={() => { this.handleUpdateStore(store.id) }}
                />
              ),
            )
          }
        </ScrollView>
        <Button
          style={{ flexBasis: 50 }}
          title="Check all"
          onPress={this.handleUpdateStores}
        />
      </View>
    );
  }
}

export default RightAidChecker;
