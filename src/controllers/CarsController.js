import { carsService } from "../services/CarsService.js";
import BaseController from "../utils/BaseController.js";



export class CarsController extends BaseController {
  constructor() {
    super('api/cars')
    this.router
      .get('', this.getAllCars)
      .get('/search', this.searchCars)

  }

  async getAllCars(request, response, next) {
    try {
      const cars = await carsService.getAllCars()
      response.send(cars)
    } catch (error) {
      next(error)
    }
  }

  async searchCars(request, response, next) {
    try {
      const searchQuery = request.query
      console.log('❔', searchQuery)
      const cars = await carsService.searchCars(searchQuery)
      response.send(cars)
    } catch (error) {
      next(error)
    }
  }
}