import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
import { MotoController } from './moto/moto.controller';

@Module({
  imports: [CarsModule],
  controllers: [MotoController],
  providers: [],
  exports: [],
})
export class AppModule {}
