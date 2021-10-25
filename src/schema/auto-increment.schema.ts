import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AutoIncrementDocument = AutoIncrement & Document;

@Schema()
export class AutoIncrement {
  @Prop()
  _id: string;

  @Prop()
  id: number;
}

export const AutoIncrementSchema = SchemaFactory.createForClass(AutoIncrement);
