import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CarsService} from './cars.service'

@Controller('cars')
export class CarsController {

  constructor(
    private readonly carsService: CarsService
  ){}

  @Get()
  getAllCars() {
    return this.carsService.findAll()
  }

  @Get(':id')
  getCarById( @Param('id', ParseIntPipe) id:number){
    return this.carsService.findOneByID(id)
  }

  @Post()
  CreateCar( @Body() body: any){
    return body
  }

  @Patch(':id')
  UpdateCar(
    @Param('id', ParseIntPipe) id:number,
    @Body() body: any )
  {
    return body
  }

  @Delete(':id')
  DeleteCar( @Param('id', ParseIntPipe) id: number){
    return {
      method: 'Delete',
      id: id
    }
  }
}

  