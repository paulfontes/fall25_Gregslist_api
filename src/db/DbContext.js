import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { CarSchema } from '../models/Car.js';
import { PetSchema } from '../models/Pet.js';

class DbContext {
  // Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);

  Cars = mongoose.model('Car', CarSchema)

  Pets = mongoose.model('Pet', PetSchema)
}

export const dbContext = new DbContext()
