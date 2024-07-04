import { PartialType } from '@nestjs/swagger';
import { CreateLightDto } from './create-light.dto';

export class UpdateLightDto extends PartialType(CreateLightDto) {
    device?: string;
  consumption?: number;
  date?: Date;
}
