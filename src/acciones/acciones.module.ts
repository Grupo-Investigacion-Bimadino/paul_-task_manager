import { Module } from '@nestjs/common';
import { AccionesService } from './acciones.service';
import { AccionesController } from './acciones.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { acciones, MessageSchema } from './schemas/acciones.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: acciones.name, schema: MessageSchema }]),
  ],
  controllers: [AccionesController],
  providers: [AccionesService],
})
export class AccionesModule {}
