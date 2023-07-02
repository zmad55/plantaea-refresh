import asyncHandler from 'express-async-handler'
import Plant from './../models/plantModel.js'

// @desc    Get all plants data
// @route   GET api/plant/getPlantData
// @access  Public
export const fetchAllPlants = asyncHandler(async (req, res) => {
    const plants = await Plant.find();

    if (plants.length === 0) {
        res.status(404).send({ success: false, message: "No plants founds" })
        return;
    }

    res.status(200).send({ success: true, plantsData: plants })
});
