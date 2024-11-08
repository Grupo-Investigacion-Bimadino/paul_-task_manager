import { Module } from '@nestjs/common';
import { TareasController } from './tareas.controller';
import { TareasService } from './tareas.service';
import { tareas, MessageSchema } from './schema/tareas.schema';
import { MongooseModule } from '@nestjs/mongoose';
  

@Module({
  imports: [
    MongooseModule.forFeature([{ name: tareas.name, schema: MessageSchema }]),
  ],
  controllers: [TareasController],
  providers: [TareasService],
  exports: [TareasService], 
})
export class TareasModule {}
