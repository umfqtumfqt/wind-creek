/**
 * @format
 */

import { AppRegistry } from 'react-native';
import Appwiandcvreekhm from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => Appwiandcvreekhm);

setImmediate(() => {
  const { getMessaging, setBackgroundMessageHandler } = require('@react-native-firebase/messaging');
  const { wiandcvreekhmOnMessageRecieved } = require('./services/initiwiandcvreekhmalizationShared');
  const messaging = getMessaging();
  setBackgroundMessageHandler(messaging, async remoteMessage => {
    await wiandcvreekhmOnMessageRecieved(remoteMessage);
  });
});
