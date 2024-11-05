import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class archivos extends Document {
  @Prop()
  nombre: string;

  @Prop()
  formato: string;

  @Prop()
  url: string;

  @Prop()
  peso: string;

  @Prop()
  IDtareas: string;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const MessageSchema = SchemaFactory.createForClass(archivos);