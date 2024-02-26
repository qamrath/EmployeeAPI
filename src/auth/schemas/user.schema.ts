import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {
  @Prop()
  name: string;
  @Prop({ unique: [true, 'Duplicate Email'] })
  email: string;
  @Prop()
  password: string;
}

export const authSchema = SchemaFactory.createForClass(User);
