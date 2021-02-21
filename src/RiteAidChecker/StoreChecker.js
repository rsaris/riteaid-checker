import React from 'react';

import propTypes from 'prop-types';

import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

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
    width: '100%'
  },
  rowHasSlots: {
    backgroundColor: '#AED86F',
  },
  rowNoSlots: {
    backgroundColor: '#FE9A86',
  },
  text: {
    flexShrink: 1,
    paddingLeft: 10,
  }
})

function slotsText(hasSlots) {
  if (hasSlots === undefined) { return ''; }

  return hasSlots ? "Let's do this!" : "Keep trying...";
}

export default function StoreChecker({ store, onCheckPress }) {
  let rowStyles = styles.row;
  if (store.hasSlots !== undefined) {
    rowStyles = {
      ...rowStyles,
      ...(store.hasSlots ? styles.rowHasSlots : styles.rowNoSlots),
    };
  }

  return (
    <View style={rowStyles}>
      <Text style={styles.text}>
        {store.id}: {store.address}, {store.zip}
        {'\n'}

        {store.loading && <Text style={styles.text}>Loading...</Text>}
        {store.error && <Text style={styles.text}>Error: {store.error}</Text>}
        {slotsText(store.hasSlots)}
      </Text>

      <Button
        style={styles.button}
        title='Check status'
        onPress={onCheckPress}
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
