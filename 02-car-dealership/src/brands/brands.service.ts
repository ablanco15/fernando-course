import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { v4 as uuid } from 'uuid';
@Injectable()
export class BrandsService {

  private brands: Brand[] = [
    //{
    //  id: uuid(),
    //  name: 'Toyota',
    //  createdAt: new Date().getTime()
    //}
  ]

  create(createBrandDto: CreateBrandDto) {
    const {name} = createBrandDto
    const brand: Brand = {
      id: uuid(),
      name: name.toLocaleLowerCase(),
      createdAt: new Date().getTime()
    };

    this.brands.push(brand)

    return brand
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id)
    if (brand) return brand
    throw new NotFoundException(`The brand with ${id} was not found`)
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {

    let brandDB: Brand = this.brands.find(brand => brand.id === id)
    
    if (brandDB){
      this.brands.map( (brand) => {
        if (brand.id===id){
          brandDB.updatedAt = new Date().getTime()
          brandDB ={
            ...brandDB,
            ...updateBrandDto
          }
          return brandDB
        }
        return brand;
      })
      return brandDB
    }
    throw new NotFoundException(`The brand with ${id} was not found`)

  }

  remove(id: string) {
    const brandDB: Brand = this.brands.find(brand => id === brand.id)
    if (brandDB) this.brands = this.brands.filter(brand => brand.id !== id )
    return brandDB   
  }

  fillBrandsWithSeedData( brands: Brand []){
    this.brands = brands
  }
}
