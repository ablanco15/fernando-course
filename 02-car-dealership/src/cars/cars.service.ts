import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
    private cars = [
        {
            id:1, 
            brand:'Toyota', 
            model:'Cororlla'
        }, 
        {
            id:2,
            brand:'Honda',
            model:'Civic'
        }, 
        {
            id:3, 
            brand:'Jeep',
            model: 'Cherokee'
        }
    ]

    findAll(){
        return this.cars
    }

    findOneByID(id:number){
        if(!(id<0)){
            const car = this.cars.find((car) => car.id === id)
            if(car) return car
            else throw new NotFoundException(`Car with ID '${id}' not found `)
        }
        
        //return {msg:'Car id was not found!'}
    }

}
