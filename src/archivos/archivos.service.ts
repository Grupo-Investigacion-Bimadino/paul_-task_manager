import { Injectable } from '@nestjs/common';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { archivos } from './schemas/archivos.schema'

@Injectable()
export class ArchivosService {
  constructor(@InjectModel(archivos.name) private ARCHIVOSModel: Model<archivos>) {}
  async create(createArchivoDto: CreateArchivoDto) {

    const createarchivo = new this.ARCHIVOSModel (createArchivoDto)

    const result = await createarchivo.save();

    return result; 
    
  }

  findAll() {
    return this.ARCHIVOSModel.find();
  }

  findOne(id: String) {
    return this.ARCHIVOSModel
    .findById(id)
  }

  async update(id: string, updateArchivoDto: UpdateArchivoDto) {
    try {
      const updatedArchivo = await this.ARCHIVOSModel.findByIdAndUpdate(
        id,
         updateArchivoDto,
        { new:true } );

      return updatedArchivo;
    }
    finally{
      console.log('actualización finalizada.');
    }
  }

  async remove(id: string) {
    try {
      const deletedArchivo = await this.ARCHIVOSModel.findByIdAndDelete(id);
      return deletedArchivo;
    }
    finally{}
  }
  }

