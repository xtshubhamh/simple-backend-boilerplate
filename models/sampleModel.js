import mongoose from 'mongoose';

const sampleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
});

const Sample = mongoose.model('Sample', sampleSchema);
export default Sample;
