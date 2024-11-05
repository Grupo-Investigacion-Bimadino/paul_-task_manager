import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TareasController } from './tareas/tareas.controller';
import { ComentariosController } from './comentarios/comentarios.controller';
import { AccionesController } from './acciones/acciones.controller';
import { ArchivosController } from './archivos/archivos.controller';

@Module({
  imports: [],
  controllers: [AppController, TareasController, ComentariosController, AccionesController, ArchivosController],
  providers: [AppService],
})
export class AppModule {}
