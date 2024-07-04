import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateLightDto } from './dto/create-light.dto';
import { UpdateLightDto } from './dto/update-light.dto';

@Injectable()
export class LightService {
  constructor(private prisma: PrismaService) {}

  create(createConsumoDto: CreateLightDto) {
    return this.prisma.consumo.create({
      data: createConsumoDto,
    });
  }

  findAll() {
    return this.prisma.consumo.findMany();
  }

  findOne(id: number) {
    return this.prisma.consumo.findUnique({
      where: { id },
    });
  }

  update(id: number, updateLightDto: UpdateLightDto) {
    return this.prisma.consumo.update({
      where: { id },
      data: updateLightDto,
    });
  }

  remove(id: number) {
    return this.prisma.consumo.delete({
      where: { id },
    });
  }
}
