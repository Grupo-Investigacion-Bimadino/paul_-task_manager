import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Tareas extends Document {
 
  @Prop()
  titulo: string;

  @Prop()
  nombre: string;

  @Prop()
  ruta: string;

  @Prop()
  descripcion: string;

  @Prop({ default: () => new Date() })
  fecha_creacion: Date;

  @Prop({ default: () => new Date() })
  fecha_vencimiento: Date;
  
  @Prop()
  IDequipo: string;

  @Prop()
  prioridad: string;

  @Prop()
  estado: string;

  @Prop()
  IDarchivo: string;

  @Prop()
  etiqueta: string;

 
}

export const TareasSchema = SchemaFactory.createForClass(Tareas);