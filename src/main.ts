import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");

  const options = new DocumentBuilder()
    .setTitle("Document API")
    .setDescription("api")
    .setVersion("0.0.1")
    .build()

  const document = SwaggerModule.createDocument(app, options)
  SwaggerModule.setup('api/document', app, document)


  await app.listen(4000);
}

bootstrap();
