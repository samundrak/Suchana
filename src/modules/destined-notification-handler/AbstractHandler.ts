import { timeStamp } from 'console';
import { IDestinedNotification } from '../audience-channel/interfaces/IDestinedNotification';

export abstract class AbstractHandler {
  public async execute(data: IDestinedNotification) {
    await this.saveInDB(data);
    await this.dispatch(data);
  }
  private saveInDB(data: IDestinedNotification) {
    // do something to save in DB
  }

  /**
   * As all handler will have their own
   * logic and implementation to dispatch
   * notification so we will leave it upto the
   * handlers.
   */
  protected abstract dispatch(data: IDestinedNotification): Promise<boolean>;
}
