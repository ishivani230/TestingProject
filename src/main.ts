import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';



const port = process.env.SERVICE_PORT;
console.log("sdfghjk",port)
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/api/v1/test');
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableCors();
 
   
    console.log("Server running at port",port)
  await app.listen(port || 5082);
}

bootstrap();  
