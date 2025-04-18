import Sample from '../models/sampleModel.js';

// Get all samples
export const getSamples = async (req, res) => {
    try {
        const samples = await Sample.find();
        res.json(samples);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
