import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class tareas extends Document {
  @Prop()
  titulo: string;

  @Prop()
  nombre: string;

  @Prop()
  ruta: string;

  @Prop()
  descripcion: string;

  @Prop()
  fecha_creacion: string;

  @Prop({ default: () => new Date() })
  fecha_vencimiento: Date;

  @Prop({ default: () => new Date() })
  timestamp: Date;

  @Prop()
  IDequipo: string;

  @Prop()
  prioridad: string;

  @Prop()
  estado: string;

  @Prop()
  IDarchivo: string;

 
}

export const MessageSchema = SchemaFactory.createForClass(tareas);