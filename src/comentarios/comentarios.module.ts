import { Module } from '@nestjs/common';
import { ComentariosService } from './comentarios.service';
import { ComentariosController } from './comentarios.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { comentarios, MessageSchema } from './schema/comentarios.shema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: comentarios.name, schema: MessageSchema }]),
  ],
  controllers: [ComentariosController],
  providers: [ComentariosService],
})
export class ComentariosModule {}
