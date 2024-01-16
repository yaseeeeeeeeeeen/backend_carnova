import { IsNotEmpty, IsOptional, isNotEmpty } from 'class-validator';

export class CreateVehicleDto {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  brand: string;

@IsNotEmpty()
lat:number;

@IsNotEmpty()
long:number;

  @IsNotEmpty()
  seat:number;

  @IsNotEmpty()
  number:string;

  @IsNotEmpty()
  fuel: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  transmission: string;

  @IsNotEmpty()
  isVerified: boolean = false;

  @IsNotEmpty()
  createdyear: number;

  @IsNotEmpty()
  price: number;

  // @IsNotEmpty()
  // document: string;

  @IsOptional()
  image: string[];
}
