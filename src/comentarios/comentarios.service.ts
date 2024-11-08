import { Injectable } from '@nestjs/common';
import { CreateComentarioDto } from './dto/create-comentario.dto';
import { UpdateComentarioDto } from './dto/update-comentario.dto';

@Injectable()
export class ComentariosService {
  create(createComentarioDto: CreateComentarioDto) {
    return createComentarioDto;
  }

  findAll() {
    return [
      {
        id:1,
        texto:'debe mejorar la redaccion de sus respuestas',
        fecha_creacion:'08/11/2025',
        estado:'comentado',

      },
      {
        id:2,
        texto:'anexe el archivo pedido',
        fecha_creacion:'08/11/2025',
        estado:'comentado',
        
      },
      {
        id:3,
        texto:'el arroz de coco quedó salado',
        fecha_creacion:'08/11/2025',
        estado:'comentado',
        
      }
    ];
  }

  findOne(id: number) {
    return [
      {
          id:1,
          texto:'debe mejorar la redaccion de sus respuestas',
          fecha_creacion:'08/11/2025',
          estado:'comentado',
      }
    ];
  }

  update(id: number, updateComentarioDto: UpdateComentarioDto) {
    return {
      id,
      updateComentarioDto
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}
