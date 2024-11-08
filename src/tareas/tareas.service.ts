import { Injectable } from '@nestjs/common';
import { CreateTareaDto } from './dto/create-tarea.dto';
import { UpdateTareaDto } from './dto/update-tarea.dto';

@Injectable()
export class TareasService {
  create(createTareaDto: CreateTareaDto) {
    return createTareaDto;
  }

  findAll() {
    return [ 
      
      {
      id: 1, 
      Titulo: 'La vaca lola', 
      Nombre: 'Duvan Ruiz', 
      Ruta: 'download/documentos', 
      Descripción: 'la aca lola tiene cabeza y tiene cola', 
      Fecha_creación: '08/11/2024', 
      Fecha_vencimiento: '08/11/2024', 
      id_equipo: '123', 
      Prioridad: 'alta', 
      Etiqueta: 'realizar rapido', 
      Estado: 'no empezado', 
      IDArchivo: "3421",
      },

      {
        id: 2, 
        Titulo: 'Arroz de coco', 
        Nombre: 'Armadores de arroz', 
        Ruta: 'download/documentos', 
        Descripción: 'como se hace el arroz de coco', 
        Fecha_creación: '08/11/2024', 
        Fecha_vencimiento: '08/11/2024', 
        id_equipo: '123', 
        Prioridad: 'alta', 
        Etiqueta: 'realizar rapido', 
        Estado: 'no empezado', 
        IDArchivo: "3421",
        },
        {
        id: 3, 
        Titulo: 'Arroz de aceite', 
        Nombre: 'Armadores de arroz', 
        Ruta: 'download/documentos', 
        Descripción: 'como se hace el arroz de aceite', 
        Fecha_creación: '08/11/2024', 
        Fecha_vencimiento: '08/11/2024', 
        id_equipo: '123', 
        Prioridad: 'alta', 
        Etiqueta: 'realizar rapido', 
        Estado: 'no empezado', 
        IDArchivo: "3421",

          }

      ];
  }

  findOne(id: number) {
    return {
      
        id: 2, 
        Titulo: 'Arroz de coco', 
        Nombre: 'Armadores de arroz', 
        Ruta: 'download/documentos', 
        Descripción: 'como se hace el arroz de coco', 
        Fecha_creación: '08/11/2024', 
        Fecha_vencimiento: '08/11/2024', 
        id_equipo: '123', 
        Prioridad: 'alta', 
        Etiqueta: 'realizar rapido', 
        Estado: 'no empezado', 
        IDArchivo: "3421",
        
    };
  }

  update(id: number, updateTareaDto: UpdateTareaDto) {
    return {
      id, 
      updateTareaDto
    };
  }

  remove(id: number) {
    return {
      id,
    };
  }
}
