import { Injectable } from '@nestjs/common';
import { CreateArchivoDto } from './dto/create-archivo.dto';
import { UpdateArchivoDto } from './dto/update-archivo.dto';

@Injectable()
export class ArchivosService {
  create(createArchivoDto: CreateArchivoDto) {
    return createArchivoDto;
  }

  findAll() {
    return [
      {
        id: 1, 
        formato: 'pdf',
        name: 'diagrama', 
        url: 'yandex.com/binarios', 
        peso: '10mb', 
      },
      {
        id: 2, 
        formato: 'pdf',
        name: 'casos de uso', 
        url: 'yandex.com/casos_de_uso', 
        peso: '10mb', 
      },
      {
        id: 3, 
        formato: 'pdf',
        name: 'diagramas', 
        url: 'yandex.com/diagramas', 
        peso: '10mb', 
      }
    ];
  }

  findOne(id: number) {
    return [
      {
        id: 1, 
        formato: 'pdf',
        name: 'diagrama', 
        url: 'yandex.com/binarios', 
        peso: '10mb', 
      }
    ];
  }

  update(id: number, updateArchivoDto: UpdateArchivoDto) {
    return [ id, updateArchivoDto, ];
  }

  remove(id: number) {
    return [ id, ];
  }
}
