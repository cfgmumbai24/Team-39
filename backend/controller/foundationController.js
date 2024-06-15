import FoundationModel from '../models/foundationModel.js';


export const addfoundation = async (req, res) => {
    const data = req.body;
    try {
        const newFounadtion =await FoundationModel.create(data);
        res.status(201).json(newFounadtion);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
