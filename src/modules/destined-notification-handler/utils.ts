import { NotificationMessagePayloadDTO } from '../notification/dto/NotificationMessagePayloadDTO';

export function parseAndMapMessageAsPerChannel(message: string) {
  const parsedMessages = JSON.parse(message) as NotificationMessagePayloadDTO[];

  return parsedMessages.reduce(
    (acc, cur) => ({
      ...acc,
      [cur.channel]: cur.value,
    }),
    {},
  );
}
