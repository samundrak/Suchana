import { ArrayNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateAudienceDto {
  @MaxLength(50, {
    each: true,
  })
  @MinLength(3, {
    each: true,
  })
  @ArrayNotEmpty()
  tokens: string[];
}
