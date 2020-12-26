import { Injectable } from '@nestjs/common';
import { IDestinedNotification } from '../audience-channel/interfaces/IDestinedNotification';
import { AbstractHandler } from './AbstractHandler';
import { HandlerNotFoundError } from './errors/DispatcherNotFoundError';

@Injectable()
export class DestinedNotificationHandlerService {
  private handler: AbstractHandler;

  setHandler(handler: AbstractHandler) {
    this.handler = handler;
  }

  dispatch(data: IDestinedNotification) {
    if (!this.handler) {
      throw new HandlerNotFoundError();
    }
    this.handler.execute(data);
  }
}
