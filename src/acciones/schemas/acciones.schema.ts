import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Timestamp } from 'rxjs';

@Schema({ timestamps: true })
export class acciones extends Document {
  @Prop()
  fecha_accion: string;

  @Prop()
  accion: string;

  @Prop()
  motivo_accion: string;

  @Prop()
  estado_posterior: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;
  }

export const MessageSchema = SchemaFactory.createForClass(acciones);