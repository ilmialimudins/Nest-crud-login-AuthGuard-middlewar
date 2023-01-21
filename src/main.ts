import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { MainModule } from './main.module';

async function bootstrap() {
  const server = await NestFactory.create(MainModule);
  server.enableCors();
  const port = process.env.PORT || 3003;
  await server.listen(port, () => {
    console.log('Listening on port ' + port);
  });
}
bootstrap();
