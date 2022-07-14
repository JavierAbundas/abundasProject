import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateUserDTO {
  id: number;
  fullName: string;
  phone: string;
  email: string;
  password: string;
  address: string;
  zip: number;
  photo: string;
  state: string;
  city: string;
  org: string;
  role: string;
}
