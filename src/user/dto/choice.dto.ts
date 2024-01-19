import { OmitType, PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsOptional } from 'class-validator';

export class ChoiseDto {
  @IsNotEmpty()
  startDate: Date;

  @IsNotEmpty()
  endDate: Date;

  @IsNotEmpty()
  pickup: string;

  @IsNotEmpty()
  dropoff: string;

  @IsOptional()
  userId: string;

  @IsOptional()
  vehicleId: string
}

export class CustomChoiceDto extends PartialType(ChoiseDto) {}

