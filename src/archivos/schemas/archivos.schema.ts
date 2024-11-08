import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class archivos extends Document {

 

  @Prop()
  name: string;

  @Prop()
  formato: string;

  @Prop()
  url: string;

  @Prop()
  peso: number;

  @Prop()
  IDtareas: number;

  @Prop({ default: () => new Date() })
  timestamp: Date;
}

export const MessageSchema = SchemaFactory.createForClass(archivos);