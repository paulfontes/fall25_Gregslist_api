import { dbContext } from "../db/DbContext.js"

class CarsService {
  async getAllCars() {
    const cars = await dbContext.Cars.find() // nothing in the find, means "find all"
    return cars
  }

  async searchCars(searchQuery) {
    // find all cars where the color is red   {color: 'red'}
    // find all cars where the color is red OR white {color: ['red', 'white']}
    // find all cars where the color is red AND the make is Honda {color: 'red', make: 'Honda'}
    const cars = await dbContext.Cars.find(searchQuery)
    return cars
  }

}

export const carsService = new CarsService()