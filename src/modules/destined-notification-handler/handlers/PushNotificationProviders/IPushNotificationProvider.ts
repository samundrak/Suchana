import { IFCMPayload } from './IFCMPayload';

export interface IPushNotificationProvider {
  send(recieverId: string, payload: string): Promise<boolean>;
}
