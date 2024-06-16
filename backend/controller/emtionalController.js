import EmotionalModel from "../models/emotionalModel.js";


export const addEmo = async (req, res) => {
    const {q1,q2,q3,q4,q5,sid} = req.body;
    try {
        let avg=(q1+q2+q3+q4+q5)/5;
        const newEmo=new EmotionalModel({
            q1,q2,q3,q4,q5,sid,avg
        })
        await newEmo.save();
        res.status(201).json({message:"emo added",data:newEmo});
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const getEmo = async (req, res) => {
    const {sid,month}=req.body;
    try {
        const monthNumber = Number(month);
        const totalEmo=await EmotionalModel.aggregate([
            {
                $match: {
                    sid: Number(sid),
                    $expr: {
                        $eq: [{ $month: "$createdAt" }, monthNumber]
                    }
                }
            }
        ]);
        res.status(200).json(totalEmo);
    } catch (error) {
        console.log(error)
    }
}

export const updateEmo = async (req, res) => {
    const {q1,q2,q3,q4,q5,sid} = req.body;
    try {
        let avg=(q1+q2+q3+q4+q5)/5;
        const updatedEmo=await EmotionalModel.findOneAndUpdate({sid:sid},{$set:{q1,q2,q3,q4,q5,avg}},{new:true});
        res.status(200).json({ message: 'Emotional updated',data:updatedEmo });
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}