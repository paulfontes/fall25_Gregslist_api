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
    // sort by cheapest cars first .sort('price')
    let sortBy = searchQuery.sort // pull the value off sort first
    console.log('🧺', sortBy)
    delete searchQuery.sort // remove sort from our object, so it doesn't get passed into the find

    let limitBy = searchQuery.limit || 5 // use the limit from the query OR if there isn't one just limit 5
    console.log('🫷', limitBy)
    delete searchQuery.limit

    let queryBy = new RegExp(searchQuery.query, 'ig') // create a regular expression from the query, (ig is global case-insensitive)
    console.log('🔮', queryBy)
    delete searchQuery.query
    searchQuery.description = queryBy  // attach the regex BACK to the searchQuery for the field we want to search through

    // searchQuery.tags = queryBy
    // NOTE a bit more complicated version, that lets us combine all our possible searches, to search for the widest range of possible options. If any of the objects occur, the car is returned
    // searchQuery = { $or: [searchQuery ? searchQuery : null, { description: queryBy }, { tags: queryBy }] } // any of these could match and return  
    console.log(searchQuery)

    const cars = await dbContext.Cars.find(searchQuery).sort(sortBy).limit(limitBy).populate('creator') // populate, tell the model to fill out the virtual we created with the same name, in our schema
    return cars
  }

}

export const carsService = new CarsService()