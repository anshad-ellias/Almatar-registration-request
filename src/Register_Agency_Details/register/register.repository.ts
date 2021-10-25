import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Register, RegisterDocument } from 'src/schema/register_agency.schema';
import { AutoIncrementService } from '../services/auto-increament.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';

@Injectable()
export class RegisterRepository {
  constructor(
    @InjectModel(Register.name) private registerModel: Model<Register>,
    private readonly autoIncrementService: AutoIncrementService,
    @InjectModel(Register.name)
    private register: Model<RegisterDocument>,
  ) {}

  async create(createRegisterDto: CreateRegisterDto): Promise<any> {
    // eslint-disable-next-line prefer-const
    let agencyDetails = new this.registerModel(createRegisterDto);
    agencyDetails._id = await this.autoIncrementService.autoIncrementID(
      'agencyDetails_id',
    );
    return agencyDetails.save();
  }

  async findAll() {
    return await this.register.find().exec();
  }

  async findOne(_id: number): Promise<any> {
    return await this.register.findOne({ _id });
  }

  async update(
    _id: number,
    updateRegisterDto: UpdateRegisterDto,
  ): Promise<any> {
    return await this.register.updateOne(
      { _id },
      { $set: { ...updateRegisterDto } },
    );
  }

  async remove(id: number) {
    return this.register.findOneAndUpdate(
      { _id: id },
      { isActive: false },
      { new: true },
    );
  }
}
