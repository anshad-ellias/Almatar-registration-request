import { Module } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterController } from './register.controller';
import { RegisterRepository } from './register.repository';
import { AutoIncrementService } from '../services/auto-increament.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  AutoIncrement,
  AutoIncrementSchema,
} from 'src/schema/auto-increment.schema';
import {
  Register,
  RegisterDocumentSchema,
} from 'src/schema/register_agency.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: AutoIncrement.name,
        schema: AutoIncrementSchema,
        collection: 'autoincrement',
      },
      {
        name: Register.name,
        schema: RegisterDocumentSchema,
        collection: 'User-Agent-Details',
      },
    ]),
  ],
  controllers: [RegisterController],
  providers: [RegisterService, RegisterRepository, AutoIncrementService],
})
export class RegisterModule {}
