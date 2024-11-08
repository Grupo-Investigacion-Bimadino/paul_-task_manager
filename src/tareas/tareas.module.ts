import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';

@Module({
  controllers: [TareasController],
  providers: [TareasService],
  exports: [TareasService], // Exporta si es necesario en otros módulos
})
export class TareasModule {}
