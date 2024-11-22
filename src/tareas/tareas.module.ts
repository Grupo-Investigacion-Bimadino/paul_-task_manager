import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
import { Tareas, TareasSchema } from './schema/tareas.schema';
import { MongooseModule } from '@nestjs/mongoose';
  

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Tareas.name, schema: TareasSchema }]),
  ],
  controllers: [TareasController],
  providers: [TareasService],
  exports: [TareasService], 
})
export class TareasModule {}
