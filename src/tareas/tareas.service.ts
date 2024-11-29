import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Tareas } from './schema/tareas.schema'


@Injectable()
export class TareasService {
  constructor(@InjectModel(Tareas.name) private TAREASModel: Model<Tareas>) {}
 async create(createTareaDto: CreateTareaDto) {

    const createTarea =  new this.TAREASModel(createTareaDto)

    const result = await createTarea.save();

    return result;  
  }

  findAll() {
    
    return this.TAREASModel.find();
  
  }

  findOne(id: String) {
    return this.TAREASModel
    .findById(id)
  }

  async update(id: String, updateTareaDto: UpdateTareaDto) {
    try {
      const updatedTarea = await this.TAREASModel.findByIdAndUpdate(
        id,
        updateTareaDto,
        { new:true } );

      return updatedTarea;
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
      const deletedTarea = await this.TAREASModel.findByIdAndDelete(id);
      return deletedTarea;
    }
    finally{}
  }
}
