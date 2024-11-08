import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccionesModule } from './acciones/acciones.module';
import { ArchivosModule } from './archivos/archivos.module';
import { ComentariosModule } from './comentarios/comentarios.module';
import { TareasModule } from './tareas/tareas.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://TaskManager:taskmanager05@cluster0.k5rbb.mongodb.net/TaskManager_db?retryWrites=true&w=majority&appName=Cluster0',
    ),
AccionesModule, ArchivosModule, ComentariosModule, TareasModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
