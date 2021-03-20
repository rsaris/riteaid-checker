import { Platform } from 'react-native';
import PushNotification from 'react-native-push-notification';

const channels = {
  DEFAULT: 'default',
};

function configureNotifications() {
  PushNotification.configure({
    requestPermissions: Platform.OS === 'ios',
  });
}

function createChannels() {
  PushNotification.createChannel({
    channelId: channels.DEFAULT,
    channelName: "Default",
  });
}

function createNotification({
  channelId = channels.DEFAULT,
  message,
}) {
  PushNotification.localNotification({
    channelId,
    message,
  });
}

export {
  channels,
  configureNotifications,
  createChannels,
  createNotification,
};
