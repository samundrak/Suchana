import { IPushNotificationProvider } from './IPushNotificationProvider';

export class PushNotificationProvider {
  constructor(private provider: IPushNotificationProvider) {}

  sendMessage(recieverId: string, payload: string) {
    return this.provider.send(recieverId, payload);
  }
}
