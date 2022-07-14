import { NestFactory } from '@nestjs/core';
import { UserModule } from './user.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UserModule,
    {
      transport: Transport.TCP,
    },
  );
  await app.listen();
}
bootstrap();
