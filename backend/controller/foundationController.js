import FoundationModel from '../models/foundationModel.js';


export const addfoundation = async (req, res) => {
    const {speaking,learning,writing,physicalInvolvement,craft,sid} = req.body;
    try {
        console.log(speaking,learning,writing,physicalInvolvement,craft,sid)
        let avg=(speaking+learning+writing+physicalInvolvement+craft)/5;
        console.log(avg);
        const newFoundation=new FoundationModel({
            speaking,learning,writing,physicalInvolvement,craft,sid,avg
        })
        await newFoundation.save();
        res.status(201).json(newFoundation);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getfoundation = async (req, res) => {
    const {sid}=req.body;
    try {
        const totalFoundation=await FoundationModel.find({sid:sid});
        res.status(200).json(totalFoundation);
    } catch (error) {
        console.log(error)
    }
}

export const updatefoundation = async (req, res) => {
    const {speaking,learning,writing,physicalInvolvement,craft,sid} = req.body;
    try {
        let avg=(speaking+learning+writing+physicalInvolvement+craft)/5;
        const updatedFoundation=await FoundationModel.findOneAndUpdate({sid:sid},{$set:{speaking,learning,writing,physicalInvolvement,craft,avg}},{new:true});
        res.status(200).json({ message: 'foundation updated',data:updatedFoundation });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

