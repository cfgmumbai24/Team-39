import mongoose from 'mongoose';

const numericalModelSchema = new mongoose.Schema({
    sid : {
        type: Number,
        required: true
    },
    maths : {
        type: Number,
        required: true
    },
    avg : {
        type: Number,
        default: 0
    },
    createdAt : {
        type: Date,
        default: Date.now
    }
});

const NumericalModel = mongoose.model('NumericalModel', numericalModelSchema);
export default NumericalModel;