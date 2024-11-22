import { Injectable } from '@nestjs/common';
import { CreateAccioneDto } from './dto/create-accione.dto';
import { UpdateAccioneDto } from './dto/update-accione.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { acciones } from './schemas/acciones.schema'

@Injectable()
export class AccionesService {
  constructor(@InjectModel(acciones.name) private ACCIONESModel: Model<acciones>) {}
  async create(createAccioneDto: CreateAccioneDto) {
    const createAccione = new this.ACCIONESModel (createAccioneDto)
    const result = await createAccione.save();
    return result; 
  }
  findAll() {
    return this.ACCIONESModel.find();
  }

  findOne(id: string) {
    return this.ACCIONESModel
    .findById(id); 
  }

  async update(id: string, updateAccioneDto: UpdateAccioneDto) {
    try {
      const updatedAcciones = await this.ACCIONESModel.findByIdAndUpdate(
        id,
        updateAccioneDto,
        { new:true } );

      return updatedAcciones;
    }
    catch (e) {
      console.error(e)
    }
    finally{
      console.log('actualización finalizada.');
    }
  }

  async remove(id: string) {
    try {
      const deletedAcciones = await this.ACCIONESModel.findByIdAndDelete(id);
      return deletedAcciones;
    }
    finally{}
  }
}
