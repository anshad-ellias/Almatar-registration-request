import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Register, RegisterDocument } from 'src/schema/register_agency.schema';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';
import { RegisterRepository } from './register.repository';

@Injectable()
export class RegisterService {
  constructor(
    private readonly registerRepository: RegisterRepository,
    @InjectModel(Register.name)
    private registerDocumentType: Model<RegisterDocument>,
  ) {}

  async create(createRegisterDto: CreateRegisterDto) {
    return await this.registerRepository.create(createRegisterDto);
  }

  findAll() {
    return this.registerRepository.findAll();
  }

  findOne(id: number) {
    return this.registerRepository.findOne(id);
  }

  update(id: number, updateRegisterDto: UpdateRegisterDto) {
    return this.registerRepository.update(id, updateRegisterDto);
  }

  remove(id: number) {
    return this.registerRepository.remove(id);
  }
}
