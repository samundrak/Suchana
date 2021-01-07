import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateAppDto {
  @IsString()
  @MaxLength(50)
  @MinLength(8)
  name: string;
}
