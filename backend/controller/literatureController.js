import LiteratureModel from '../models/literatureModel';


export const addLiterature = async (req, res) => {
    const data = req.body;
    try {
        const newLit = await LiteratureModel.create(data);
        res.status(201).json(newnum);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}