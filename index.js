/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

import { configureNotifications, createChannels } from './src/lib/notifications';

createChannels();
configureNotifications();

AppRegistry.registerComponent(appName, () => App);
