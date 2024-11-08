import { Module } from '@nestjs/common';
import { ArchivosService } from './archivos.service';
import { ArchivosController } from './archivos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { archivos, MessageSchema } from './schemas/archivos.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: archivos.name, schema: MessageSchema }]),
  ],
  controllers: [ArchivosController],
  providers: [ArchivosService],
})
export class ArchivosModule {}
