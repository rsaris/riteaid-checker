import React, { Fragment, useState } from 'react';

import propTypes from 'prop-types';

import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import checkStore from './checkStore';

const STATE_LOADING = 'loading';
const STATE_ERROR = 'error';
const STATE_LOADED = 'loaded';

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
  text: {
    flexShrink: 1,
    paddingLeft: 10,
  }
})

function slotsText(hasSlots) {
  if (hasSlots === undefined) { return ''; }

  return hasSlots ? "Let's do this!" : "Keep trying...";
}

export default function StoreChecker({ store }) {
  const [hasSlots, setHasSlots] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [state, setState] = useState(STATE_LOADED);

  async function handleCheckPress() {
    setState(STATE_LOADING);
    try {
      const storeHasSlots = await checkStore(store.id);
      setHasSlots(storeHasSlots);
      setState(STATE_LOADED);
    } catch (err) {
      setErrorMessage(err.message);
      setState(STATE_ERROR);
    }
  }

  return (
    <View style={styles.row}>
      {state === STATE_LOADING && <Text style={styles.text}>Loading...</Text>}
      {state === STATE_ERROR && <Text style={styles.text}>Error: {errorMessage}</Text>}
      {state === STATE_LOADED && (
        <Text style={styles.text}>
          {store.id}: {store.address}, {store.zip}
          {'\n'}
          {slotsText(hasSlots)}
        </Text>
      )}

      <Button
        style={styles.button}
        title='Check status'
        onPress={handleCheckPress}
      />
    </View>
  );
}

StoreChecker.propTypes = {
  store: propTypes.shape({
    id: propTypes.number.isRequired,
    address: propTypes.string.isRequired,
    zip: propTypes.number.isRequired,
  }).isRequired,
};
