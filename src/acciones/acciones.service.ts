import { Injectable } from '@nestjs/common';
import { CreateAccioneDto } from './dto/create-accione.dto';
import { UpdateAccioneDto } from './dto/update-accione.dto';

@Injectable()
export class AccionesService {
  create(createAccioneDto: CreateAccioneDto) {
    return 'This action adds a new accione';
  }

  findAll() {
    return `This action returns all acciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} accione`;
  }

  update(id: number, updateAccioneDto: UpdateAccioneDto) {
    return `This action updates a #${id} accione`;
  }

  remove(id: number) {
    return `This action removes a #${id} accione`;
  }
}
