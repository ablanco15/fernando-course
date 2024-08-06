import { Injectable, NotFoundException, Delete } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid'
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
        //{
        //    id: uuid(), 
        //    brand: 'Toyota', 
        //    model: 'Cororlla'
        //},
    ]

    findAll(){
        return this.cars
    }

    findOneByID(id:string){
        const car = this.cars.find((car) => car.id === id)
        if(car) return car
        else throw new NotFoundException(`Car with ID '${id}' not found `)
    }

    create(createCarDto: CreateCarDto){
        const car: Car = {
            id: uuid(),
            ...createCarDto
        }
        this.cars.push(car)
        return car
    }

    update(id: string, updateCarDto: UpdateCarDto){
        let carDB = this.findOneByID(id)
        this.cars = this.cars.map( car => {
            if ( car.id === id ){
                carDB = {...carDB,...updateCarDto,id}
                return carDB
            }
            return car
        })

        return carDB;
    }

    delete(id:string){
        const carDB = this.findOneByID(id)
        if (carDB){
            this.cars = this.cars.filter(car => id !== car.id)
            return carDB
        }
        throw new NotFoundException()
    }

    fillCarsWithSeedData( cars: Car []){
        this.cars = cars
    }
}
