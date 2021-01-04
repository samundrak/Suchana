import { IPushNotificationProvider } from './IPushNotificationProvider';
import admin, { messaging } from 'firebase-admin';
import * as path from 'path';
import { Logger } from '@nestjs/common';

admin.initializeApp({
  credential: admin.credential.cert(
    path.join(__dirname, '../../../../../no-push/fcm-secret.json'),
  ),
});
export class FirebaseCloudMessaging implements IPushNotificationProvider {
  private messaging: messaging.Messaging;
  private logger: Logger = new Logger('FCM');
  constructor() {
    this.boot();
  }

  boot() {
    this.logger.log('FCM boot');

    this.messaging = admin.messaging();
  }
  async send(receiverId: string, payload: string): Promise<boolean> {
    console.log(receiverId);
    this.messaging
      .sendToDevice(receiverId, {
        notification: {
          body: payload,
          title: 'Bonjour',
        },
      })
      .then(console.log)
      .catch(e => {
        console.log(e);
      });
    this.logger.log(`Sending message from FCM `);
    return true;
  }
}
