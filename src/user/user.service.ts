import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InfraService } from '../infra/service/infra.service';

@Injectable()
export class UserService {
  constructor(private readonly infraService: InfraService) {}

  create(createUserDto: CreateUserDto) {
    return `ok`;
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${updateUserDto.userId} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
