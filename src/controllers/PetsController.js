import { petsService } from "../services/PetsService.js";
import BaseController from "../utils/BaseController.js";


export class PetsController extends BaseController {
    constructor() {
        super('api/pets')
        this.router
            .get('', this.getPets)
            .get('/search', this.searchPets)
            .get('/:petId', this.getPetById)
    }

    async getPets(request, response, next) {
        try {
            const pets = await petsService.getAllPets()
            response.send(pets)
        } catch (error) {
            next(error)
        }
    }

    async getPetById(request, response, next) {
        try {
            const petId = request.params.petId

            const onePet = await petsService.getPetById(petId)

            response.send(onePet)
        } catch (error) {
            next(error)
        }
    }

    async searchPets(request, response, next) {
        try {
            const searchQuery = request.query
            const pets = await petsService.searchPets(searchQuery)
            response.send(pets)
        } catch (error) {
            next(error)
        }
    }
}