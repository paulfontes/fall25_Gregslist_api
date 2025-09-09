import { Schema } from "mongoose";


export const CarSchema = new Schema({
  make: { type: String, required: true, maxLength: 25 },
  model: { type: String, required: true, maxLength: 25 },
  year: { type: Number, min: 1700, max: 2026, required: true, default: 2025 },
  color: { type: String, default: 'silver' },
  imgUrl: { type: String, default: 'https://plus.unsplash.com/premium_photo-1686730540270-93f2c33351b6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FyfGVufDB8fDB8fHww', maxLength: 500 },
  price: { type: Number, min: 0, max: Infinity, default: 0 },
  description: { type: String, maxLength: 500, default: 'no description' },
  mileage: { type: Number, min: 0, default: 0 },
  hasCleanTitle: { type: Boolean, default: true },
  tags: [{ type: String }],
  engineType: { type: String, enum: ['V12', 'V10', 'V8', 'V6', '4-cylinder', '2-stroke'] },

  creatorId: { type: Schema.ObjectId, required: true }
},
  // options object
  { timestamps: true, versionKey: false, toJSON: { virtuals: true } })

CarSchema.virtual('banana').get(() => 'sandwich') // super simple, obviously can be more complex 


CarSchema.virtual('creator', {
  localField: 'creatorId', // 🔮 creatorId: ABC123 - take the creatorId from this car
  ref: 'Account', // ABC123 ------> Accounts - go to the Account collection
  foreignField: '_id', // ABC123 == _id:ABC123 - match it against the _id
  justOne: true // only include on result

})

// virtuals set up with the options object need to be POPULATED when they are retrieved from the Database