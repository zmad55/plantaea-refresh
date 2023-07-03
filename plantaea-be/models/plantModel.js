import mongoose from 'mongoose';

const plantSchema = new mongoose.Schema({
    scientificName: {type: 'String'},
    localName: {type: 'String'},
    category: {type: 'Array'},
    description: {type: 'String'},
    use: {type: 'String'}
})

const Plant = mongoose.model("Plant", plantSchema);

export default Plant;