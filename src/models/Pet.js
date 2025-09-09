import { Schema } from "mongoose";



export const PetSchema = new Schema({
    id: { type: String },
    name: { type: String, required: true, maxLength: 50 },
    imgUrl: { type: String, default: 'https://plus.unsplash.com/premium_photo-1677545183884-421157b2da02?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGV0fGVufDB8fDB8fHww', maxLength: 500 },
    age: { type: Number, min: 0, max: 500, default: 0 },
    likes: [{ type: String, enum: ['adopted', 'adoptable'] }],
    isVaccinated: { type: Boolean, default: true },
    status: { type: String, maxLength: 200, required: true },
    species: { type: String, maxLength: 50 },
    creatorId: { type: Schema.ObjectId, required: true }
},

    { timestamps: true, toJSON: { virtuals: true } }
)