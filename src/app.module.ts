import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LightModule } from './light/light.module';
import { LightController } from './light/light.controller';
import { LightService } from './light/light.service';
import { PrismaService } from './prisma/prisma.service';
@Module({
  imports: [PrismaModule, LightModule],
  controllers: [AppController, LightController],
  providers: [AppService, LightService, PrismaService],
})
export class AppModule {}
