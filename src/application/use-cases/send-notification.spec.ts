import { InMemoryNotificationsRepository } from './../../../test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notification';

describe('Send notification', () => {
  test('it should be able to send notification ', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.execute({
      recipientId: 'example-send',
      content: 'hello',
      category: 'invite',
    });
    console.log(notificationsRepository);
    expect(notificationsRepository.notification[0]).toEqual(notification);
  });
});
