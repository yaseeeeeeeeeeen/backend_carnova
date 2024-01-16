import { IsNotEmpty, IsOptional, isNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  brand: string;

  @IsNotEmpty()
  fuel: string;

  @IsNotEmpty()
  number:string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  seat:string;

  @IsNotEmpty()
  lat: string;

  @IsNotEmpty()
  long: string;

  @IsNotEmpty()
  transmission: string;

  @IsNotEmpty()
  createdyear: string;

  @IsNotEmpty()
  price: string;

  @IsOptional()
  image: string[];

  @IsOptional()
  createdBy: string;

  @IsNotEmpty()
  isVerified: boolean = false;
}
