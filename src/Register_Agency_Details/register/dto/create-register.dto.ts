import { IsObject, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class Address {
  readonly address1: string;
  readonly address2: string;
  readonly country: string;
  readonly state: string;
  readonly city: string;
  readonly postalCode: number;
}

export class TaLead {
  readonly title: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly designation: string;
  readonly phoneNumber: number;
  readonly emailId: string;
}

export class CreateRegisterDto {
  _id: number;

  name: string;

  iataCode: string;

  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => Address)
  address: Address;

  @ValidateNested({ each: true })
  @IsObject()
  @Type(() => TaLead)
  taLead: TaLead;
}
