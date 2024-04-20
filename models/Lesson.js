const mongoose = require('mongoose');

const lessonSchema = new mongoose.Schema({
    dateTaught: {
        type: Date
    }, 
    subject: {
        type: String,
        enum: ['math', 'science', 'english', 'socStud', 'general'],
        required: true
    },
    module: {
        type: String
    },
    modLesson: {
        type: String
    },
    topic: {
        type: String
    },
    lessonPart: {
        type: String,
        required: true,
        enum: ['warmUp', 'intro', 'presentation', 'practice', 'evaluation', 'resources']
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['link', 'file', 'no location']
    },
    location: {
        type: String,
    },
    standards: {
        type: [String]
    }
}, {
    timestamps: true
});

const Lesson = mongoose.model('Lesson', lessonSchema);

module.exports = Lesson;
