import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';
import { CreateRegisterDto } from './create-register.dto';

class Address {
  readonly address1: string;
  readonly address2: string;
  readonly country: string;
  readonly state: string;
  readonly city: string;
  readonly postalCode: number;
}

class TaLead {
  readonly title: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly designation: string;
  readonly phoneNumber: number;
  readonly emailId: string;
}

export class UpdateRegisterDto extends PartialType(CreateRegisterDto) {
  _id: number;

  name: string;

  iataCode: string;

  @ValidateNested({ each: true })
  @Type(() => Address)
  address: Address;

  @ValidateNested({ each: true })
  @Type(() => TaLead)
  taLead: TaLead;
}
