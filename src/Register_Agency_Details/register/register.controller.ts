import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RegisterService } from './register.service';
import { CreateRegisterDto } from './dto/create-register.dto';
import { UpdateRegisterDto } from './dto/update-register.dto';

@Controller('register')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post()
  create(
    @Body() createRegisterDto: CreateRegisterDto,
  ): Promise<CreateRegisterDto> {
    return this.registerService.create(createRegisterDto);
  }

  @Get()
  findAll() {
    return this.registerService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: number) {
    return this.registerService.findOne(_id);
  }

  @Patch(':_id')
  update(
    @Param('_id') _id: number,
    @Body() updateRegisterDto: UpdateRegisterDto,
  ) {
    return this.registerService.update(_id, updateRegisterDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: number) {
    return this.registerService.remove(_id);
  }
}
