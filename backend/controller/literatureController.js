import LiteratureModel from '../models/literatureModel.js';


export const addLiterature = async (req, res) => {
    const {english,hindi,marathi,sid} = req.body;
    try {
        let avg=(english+hindi+marathi)/3;
        const newLiterature=new LiteratureModel({
            english,hindi,marathi,sid,avg
        })
        await newLiterature.save();
        res.status(201).json(newLiterature);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getLiterature = async (req, res) => {
    const {sid,month}=req.body;
    try {
        const monthNumber = Number(month);
        const totalLiterature=await LiteratureModel.aggregate([
            {
                $match: {
                    sid: Number(sid),
                    $expr: {
                        $eq: [{ $month: "$createdAt" }, monthNumber]
                    }
                }
            }
        ]);
        res.status(200).json(totalLiterature);
    } catch (error) {
        console.log(error)
    }
}

export const updateLiterature = async (req, res) => {
    const {english,hindi,marathi,sid} = req.body;
    try {
        let avg=(english+hindi+marathi)/3;
        const updatedLiterature=await LiteratureModel.findOneAndUpdate({sid:sid},{$set:{english,hindi,marathi,avg}});
        res.status(200).json({ message: 'Literature updated',data:updatedLiterature });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}