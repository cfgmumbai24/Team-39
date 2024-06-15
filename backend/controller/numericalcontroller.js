import NumericalModel from '../models/numericalmodel';


export const addnumerical = async (req, res) => {
    const data = req.body;
    try {
        const newnum = await NumericalModel.create(data);
        res.status(201).json(newnum);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}