import { PrismaNOtificationsRepository } from './prisma/repositories/prisma-notifications-repository';
import { NotificationsRepository } from 'src/application/repositories/notification-repository';
import { PrismaService } from './prisma/prisma.service';
import { Module } from '@nestjs/common';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNOtificationsRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DatabaseModule {}
