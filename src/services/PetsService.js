import { dbContext } from "../db/DbContext.js"

class PetsService {
    async getAllPets() {
        const pets = await dbContext.Pets.find()
        return pets
    }
    async searchPets(searchQuery) {
        let sortBy = searchQuery.sort
        console.log('🛒', sortBy);
        delete searchQuery.sortBy
        const pets = await dbContext.Pets.find(searchQuery).sort('-age')

        return pets
    }

    async getPetById(petId) {
        const pet = await dbContext.Pets.findById(petId)

        if (pet == undefined) {
            console.error('No Pet Found:' + petId)
        }
        return pet
    }
}

export const petsService = new PetsService()