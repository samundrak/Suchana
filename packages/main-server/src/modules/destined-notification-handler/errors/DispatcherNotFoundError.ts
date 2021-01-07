export class HandlerNotFoundError extends Error {
  constructor() {
    super('Handler not found.');
  }
}
