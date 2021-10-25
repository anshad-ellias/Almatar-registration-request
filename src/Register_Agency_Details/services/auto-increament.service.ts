import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  AutoIncrement,
  AutoIncrementDocument,
} from 'src/schema/auto-increment.schema';

@Injectable()
export class AutoIncrementService {
  constructor(
    @InjectModel(AutoIncrement.name)
    private readonly incrementModel: Model<AutoIncrementDocument>,
  ) {}
  async autoIncrementID(modelName: string): Promise<any> {
    return await this.incrementModel
      .findOneAndUpdate(
        { _id: modelName },
        { $inc: { id: 1 } },
        { upsert: true, new: true },
      )
      .exec()
      .then((data) => {
        return data.id;
      });
  }
}
