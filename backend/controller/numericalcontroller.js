import NumericalModel from '../models/numericalmodel.js';


export const addnumerical = async (req, res) => {
    const {maths,sid} = req.body;
    try {
        let avg=maths;
        const newnum=new NumericalModel({
            maths,
            sid,
            avg
        })
        await newnum.save();
        res.status(201).json(newnum);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
export const getNumerical = async (req, res) => {
    const {sid,month}=req.body;
    try {
        const monthNumber = Number(month);
        const totalNumerical=await NumericalModel.aggregate([
            {
                $match: {
                    sid: Number(sid),
                    $expr: {
                        $eq: [{ $month: "$createdAt" }, monthNumber]
                    }
                }
            }
        ]);
        res.status(200).json(totalNumerical);
    } catch (error) {
        console.log(error)
    }
}

export const updateNumerical = async (req, res) => {
    const {maths,sid} = req.body;
    try {
        let avg=maths;
        const updatedNumerical=await NumericalModel.findOneAndUpdate({sid:sid},{$set:{maths,avg}},{new:true});
        res.status(200).json({ message: 'Literature updated',data:updatedNumerical });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}