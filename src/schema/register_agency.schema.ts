import { Prop, Schema, raw, SchemaFactory } from '@nestjs/mongoose';
import {
  Address,
  TaLead,
} from 'src/Register_Agency_Details/register/dto/create-register.dto';

export type RegisterDocument = Register & Document;
@Schema()
export class Register {
  @Prop(raw(TaLead))
  taLead: TaLead;

  @Prop(raw(Address))
  address: Address;

  @Prop({ required: true, dropDups: true })
  name: string;

  @Prop({ required: true })
  iataCode: string;

  @Prop({ required: true })
  _id: number;
}
export const RegisterDocumentSchema = SchemaFactory.createForClass(Register);
