import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class comentarios extends Document {
  @Prop()
  fecha_creacion: string;

  @Prop()
  texto_comentario: string;

  @Prop()
  estado: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const MessageSchema = SchemaFactory.createForClass(comentarios);