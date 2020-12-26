import { AbstractHandler } from '../AbstractHandler';

export class EmailHandler extends AbstractHandler {
  dispatch() {
    console.log('dispatch to respective email ser ice');
    // We will send data to email here
    return Promise.resolve(true);
  }
}
