import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { comentarios } from './schema/comentarios.shema'

@Injectable()
export class ComentariosService {
  constructor(@InjectModel(comentarios.name) private COMENTARIOSModel: Model<comentarios>) {}
  async create(createComentarioDto: CreateComentarioDto) {

    const createcomentario =  new this.COMENTARIOSModel (createComentarioDto)

    const result = await createcomentario.save();
    
    return result; 
    
  }

  findAll() {
    return this.COMENTARIOSModel.find();
  }

  findOne(id: string) {
      return this.COMENTARIOSModel
    .findById(id)
  }

  async update(id: String, updateComentarioDto: UpdateComentarioDto) {
    try {
      const updatedComentario = await this.COMENTARIOSModel.findByIdAndUpdate(
        id,
        updateComentarioDto,
        { new:true } );

      return updatedComentario;
    }
    finally{
      console.log('actualización finalizada.');
    }
  }

  async remove(id: string) {
    try {
      const deletedComentario = await this.COMENTARIOSModel.findByIdAndDelete(id);
      return deletedComentario;
    }
    finally{}
  }
}
