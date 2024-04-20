const mongoose = require('mongoose');

const standardSchema = new mongoose.Schema({
    subject: {
        type: String,
        enum: ['math', 'science', 'english', 'socStud', 'general'],
        required: true,
        default: 'general'
    },
    subtopic: {
        type: String 
    },
    themeOrPractice: {
        type: String,
        enum: ['theme', 'practice'],
    },
    standardNumber: {
        type: String
    },
    text: {
        type: String,
    },
    depthOfKnowledge: {
        type: String
    },
    linkedLesson: {
        type: [String]
    }
}, {
    timestamps: true
});

const Standard = mongoose.model("Standard", standardSchema);

module.exports = Standard;