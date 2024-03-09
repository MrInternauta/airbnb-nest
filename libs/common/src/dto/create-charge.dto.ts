import { Type } from 'class-transformer';
import { CardDto } from './card.dto';
import {
  IsDefined,
  IsNotEmptyObject,
  IsNumber,
  ValidateNested,
} from 'class-validator';

export class CreateChargeDto {
  @Type(() => CardDto)
  @IsDefined()
  @IsNotEmptyObject()
  @ValidateNested()
  card: CardDto;

  @IsNumber()
  amount: number;
}
