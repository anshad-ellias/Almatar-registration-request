import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RegisterModule } from './Register_Agency_Details/register/register.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/User-Agent-Details'),
    RegisterModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
