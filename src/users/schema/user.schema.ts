import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export enum DEPARTMENT {
  IT = 'It',
  ACCOUNTS = 'Accounts and Admin',
  MARKETING = 'Marketing',
  SALES = 'Sales',
}

@Schema({
  timestamps: true,
})
export class users {
  @Prop()
  name: string;

  @Prop()
  email: string;

  @Prop()
  role: string;

  @Prop()
  department: DEPARTMENT;
}
export const UserSchema = SchemaFactory.createForClass(users);
