import { Injectable } from '@nestjs/common';
import { CreateAccioneDto } from './dto/create-accione.dto';
import { UpdateAccioneDto } from './dto/update-accione.dto';

@Injectable()
export class AccionesService {
  create(createAccioneDto: CreateAccioneDto) {
    return createAccioneDto;

  }

  findAll() {
    return [
      {
        id:1,
        fecha_accion:'08/11/2024',
        accion:'eliminar',
        motivo_accion:'mal hecho',
        estado_posterior:'eliminado',
      },
      {
        id:2,
        fecha_accion:'08/11/2024',
        accion:'editar',
        motivo_accion:'faltan definiciones',
        estado_posterior:'listo para corregir',
      },
      {
        id:3,
        fecha_accion:'08/11/2025',
        accion:'',
        motivo_accion:'mal hecho',
        estado_posterior:'eliminado',
      },

    ]
  }

  findOne(id: number) {
    return [
       {
        id:3,
        fecha_accion:'08/11/2025',
        accion:'',
        motivo_accion:'mal hecho',
        estado_posterior:'eliminado',
       } 

    ];
  }

  update(id: number, updateAccioneDto: UpdateAccioneDto) {
    return {
      id,
      updateAccioneDto
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}
