import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );

const config = new DocumentBuilder ()
  .setTitle('Photobooth API')
  .setDescription("Photobooth Backend API")
  .setVersion('1.0')
  .build();

const document = SwaggerModule.createDocument(app, config);

SwaggerModule.setup('api', app, document);

await app.listen(process.env.PORT ?? 3000);

console.log(
    `🚀 Backend running at http://localhost:${process.env.PORT ?? 3000}`,
  );

  console.log(
    `📚 Swagger running at http://localhost:${process.env.PORT ?? 3000}/api`,
  );
}

bootstrap();



