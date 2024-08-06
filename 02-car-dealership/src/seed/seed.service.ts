import { Injectable } from '@nestjs/common';
import { BrandsService } from 'src/brands/brands.service';
import { CarsService } from 'src/cars/cars.service';
import { CARS_SEED } from './data/cars.seed';
import { BRANDS_SEED } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandsService
  ){}
  
  populateDB() {

    this.brandService.fillBrandsWithSeedData(BRANDS_SEED)
    this.carsService.fillCarsWithSeedData(CARS_SEED)
    
    return `Seed executed Succesful`;
  }

}
