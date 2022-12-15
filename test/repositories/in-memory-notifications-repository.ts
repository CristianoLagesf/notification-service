import { Notification } from './../../src/application/entities/notification';
import { NotificationsRepository } from '../../src/application/repositories/notification-repository';

const notifications: Notification[] = [];

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notification: Notification[] = [];
  async create(notification: Notification) {
    notifications.push(notification);
  }
}
