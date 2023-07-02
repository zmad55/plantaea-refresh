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


// scientificName
// "Allium Ramosum"
// localName
// "Kutsai"

// category
// Array
// 0
// "medicine"
// 1
// "consumable"
// 2
// "ornamental"
// description
// "Commonly found in Benguet, Allium ramosum has clusters of narrow bulbs…"
// use
// "Used as treatment for wounds, cough, colds, etc."
// taxonomy
