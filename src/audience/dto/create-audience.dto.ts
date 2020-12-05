import { IsAlphanumeric, MaxLength, MinLength } from 'class-validator';

export class CreateAudienceDto {
  @IsAlphanumeric()
  @MinLength(3)
  @MaxLength(50)
  token: string;
}
