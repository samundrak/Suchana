import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  validate as classValidatorValidate,
  MinLength,
} from 'class-validator';
import { ChannelsEnum } from 'src/channel/enums/ChannelsEnum';
import { CreateAudienceChannelDto } from '../dto/create-audience-channel.dto';

class ChannelValidation {
  @MinLength(10)
  email: string;
}
export function IsValidChannelValue(
  property: string,
  validationOptions?: ValidationOptions,
) {
  return function(object: CreateAudienceChannelDto, propertyName: string) {
    registerDecorator({
      name: 'isValidChannelValue',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [property],
      options: validationOptions,
      validator: {
        async validate(value: any, args: ValidationArguments) {
          const payload = args.object as CreateAudienceChannelDto;
          const validationData = new ChannelValidation();
          if (payload.type === ChannelsEnum.EMAIL) {
            validationData.email = value;
          }

          try {
            await classValidatorValidate(validationData);
            return true;
          } catch (e) {
            return false;
          }
        },
      },
    });
  };
}
