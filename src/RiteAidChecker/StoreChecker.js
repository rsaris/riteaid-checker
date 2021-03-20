import React from 'react';

import propTypes from 'prop-types';

import {
  Button,
  Linking,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Clipboard from '@react-native-community/clipboard';

const styles = StyleSheet.create({
  button: {
    height: '100%',
    flexBasis: 50,
  },
  row: {
    alignItems: 'center',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 50,
    width: '100%',
  },
  rowHasSlots: {
    backgroundColor: '#AED86F',
  },
  rowNoSlots: {
    backgroundColor: '#FE9A86',
  },
  textContainer: {
    flexShrink: 1,
    paddingLeft: 10,
  },
});

function slotsText(hasSlots) {
  if (hasSlots === undefined) { return ''; }

  return hasSlots ? "Let's do this!" : 'Keep trying...';
}

export default function StoreChecker({ store, onCheckPress }) {
  let rowStyles = styles.row;
  if (store.hasSlots !== undefined) {
    rowStyles = {
      ...rowStyles,
      ...(store.hasSlots ? styles.rowHasSlots : styles.rowNoSlots),
    };
  }

  function handleGoPress() {
    Clipboard.setString(`${store.zip}`);
    Linking.openURL('https://www.riteaid.com/pharmacy/covid-qualifier');
  }

  return (
    <View style={rowStyles}>
      <View style={styles.textContainer}>
        <Text numberOfLines={1}>
          {store.id}: {store.address}, {store.zip}
        </Text>
        <Text numberOfLines={1}>
          {store.loading && <Text style={styles.text}>Loading...</Text>}
          {store.error && <Text style={styles.text}>Error: {store.error}</Text>}
          {slotsText(store.hasSlots)}
        </Text>
      </View>

      <Button
        style={styles.button}
        title={store.hasSlots ? 'Let\'s Go!!!' : 'Check store'}
        onPress={store.hasSlots ? handleGoPress : onCheckPress}
      />
    </View>
  );
}

StoreChecker.propTypes = {
  store: propTypes.shape({
    id: propTypes.number.isRequired,
    address: propTypes.string.isRequired,
    error: propTypes.string,
    hasSlots: propTypes.bool,
    loading: propTypes.bool,
    zip: propTypes.number.isRequired,
  }).isRequired,
  onCheckPress: propTypes.func,
};
