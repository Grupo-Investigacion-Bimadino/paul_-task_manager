import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class acciones extends Document {
  @Prop({ default: () => new Date() })
  fecha_accion: Date;

  @Prop()
  accion: string;

  @Prop()
  motivo_accion: string;

  @Prop()
  estado_posterior: string;
  }

export const MessageSchema = SchemaFactory.createForClass(acciones);