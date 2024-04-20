const mongoose = require('../conn');
const Standard = require('../../models/Standard');

const db = mongoose.connection;

// subject can be (math | science | english | socStud)
// subtopic can be ( quantitative | algebraic | reading | language | writing ) and only apply to math or english
// themeOrPractice can be (theme | practice)
db.on("open", () => {
const startStandards = [
    {
        subject: 'math', 
        subtopic: 'quantitative',
        themeOrPractice: 'theme',
        standardNumber: 'Q1',
        text: 'Apply Number sense concepts, including ordering rational number, absolute values, multiples, factors, and exponents',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'math', 
        subtopic: 'quantitative',
        themeOrPractice: 'theme',
        standardNumber: 'Q1.a',
        text: 'Order fractions and decimals, including on a number line.',
        depthOfKnowledge: '1-2',
        linkedLesson: ['Fractions', 'Decimals']
    },
    {
        subject: 'math', 
        subtopic: 'quantitative',
        themeOrPractice: 'theme',
        standardNumber: 'Q1.b',
        text: 'Apply number properties involving multiples and factors, such as using the least common multiple, greatest common factor, or distributive property to rewrite numeric expressions.',
        depthOfKnowledge: '',
        linkedLesson: ['Number Sense']
    },
    {
        subject: 'math', 
        subtopic: 'algebraic',
        themeOrPractice: 'theme',
        standardNumber: 'A.1',
        text: 'Write, evaluate, and compute with expressions and polynomials',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'math', 
        subtopic: 'algebraic',
        themeOrPractice: 'theme',
        standardNumber: 'A.1a',
        text: 'Add Subtract, factor, multiply and expand linear expressions with rational coefficients.',
        depthOfKnowledge: '1-2',
        linkedLesson: ['Algebra']
    },
    {
        subject: 'math', 
        subtopic: 'algebraic',
        themeOrPractice: 'theme',
        standardNumber: 'A.1b',
        text: 'Evaluate linear expressions by substituting integers for unknown quantities.',
        depthOfKnowledge: '1-2',
        linkedLesson: ['Algebra']
    },
    {
        subject: 'math', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'MP.1',
        text: 'Building Solution Pathways and Lines of Reasoning',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'math', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'MP.1a',
        text: 'Search for and recognize entry points for solving a problem',
        depthOfKnowledge: '1-2',
        linkedLesson: []
    },
    {
        subject: 'socStud', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'SSP.1',
        text: ' Drawing Conclusions and Making Inferences',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'socStud', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'SSP.1a',
        text: ' Drawing Conclusions and Making Inferences',
        depthOfKnowledge: 'Determine the details of what is explicitly stated in primary and secondary sources and make logical inferences or valid claims based on evidence.',
        linkedLesson: ['Civics & Government']
    },
    {
        subject: 'socStud', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'SSP.1b',
        text: 'Cite or identify specific evidence to support inferences or analyses of primary and secondary sources, attending to the precise details of explanations or descriptions of a process, event, or concept.',
        depthOfKnowledge: '',
        linkedLesson: ['Civics & Government']
    },
    {
        subject: 'socStud', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'CG',
        text: 'Civics and Government',
        depthOfKnowledge: '',
        linkedLesson: ['Civics & Government']
    },
    {
        subject: 'socStud', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'CGa',
        text: 'Types of modern and historical governments',
        depthOfKnowledge: '',
        linkedLesson: ['Civics & Government']
    },
    {
        subject: 'socStud', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'CGb',
        text: 'Principles that have contributed to development of American constitutional democracy',
        depthOfKnowledge: '',
        linkedLesson: ['Civics & Government']
    },
    {
        subject: 'socStud', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'E',
        text: 'Economics',
        depthOfKnowledge: '',
        linkedLesson: ['Economics']
    },
    {
        subject: 'socStud', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'E.a',
        text: 'Key economic events that have shaped American government and policies',
        depthOfKnowledge: '',
        linkedLesson: ['Economics']
    },
    {
        subject: 'socStud', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'E.b',
        text: 'Relationship between political and economic freedoms',
        depthOfKnowledge: '',
        linkedLesson: ['Economics']
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'L',
        text: 'Life Science',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'L.a',
        text: 'Human Body and Health',
        depthOfKnowledge: '',
        linkedLesson: ['Human Body and Health']
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'L.a.1',
        text: 'Body Systems',
        depthOfKnowledge: '',
        linkedLesson: ['Human Body and Health']
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'ES',
        text: 'Earth and Space Science',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'ES.a',
        text: 'Earth and Space Science',
        depthOfKnowledge: 'Interaction Between Earth Systems and Living Things',
        linkedLesson: ['Interaction Between Earth Systems and Living Things']
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'theme',
        standardNumber: 'ES.a.1',
        text: 'Interactions of matter between living and nonliving things',
        depthOfKnowledge: '',
        linkedLesson: ['Interaction Between Earth Systems and Living Things']
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'SP.7',
        text: 'Scientific Theories',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'SP.7.a',
        text: 'Understand and apply scientific models, theories, and processes.',
        depthOfKnowledge: '2-3',
        linkedLesson: []
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'SP.7.b',
        text: 'Apply formulas from scientific theories',
        depthOfKnowledge: '2',
        linkedLesson: []
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'SP.8',
        text: 'Probability & Statistics',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'science', 
        subtopic: '',
        themeOrPractice: 'practice',
        standardNumber: 'SP.8.a',
        text: 'Describe a data set statistically.  Calculate the mean, median, and mode of a data set.',
        depthOfKnowledge: '1-2',
        linkedLesson: []
    },
    {
        subject: 'english', 
        subtopic: 'reading',
        themeOrPractice: 'theme',
        standardNumber: 'Reading Module 2',
        text: 'Poetry',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'english', 
        subtopic: 'reading',
        themeOrPractice: 'theme',
        standardNumber: 'Reading Module 5',
        text: 'Drama',
        depthOfKnowledge: '',
        linkedLesson: ['Understanding Drama']
    },
    {
        subject: 'english', 
        subtopic: 'reading',
        themeOrPractice: 'theme',
        standardNumber: 'RM5 Lesson 1',
        text: 'Understanding Plot',
        depthOfKnowledge: '',
        linkedLesson: ['Understanding Drama']
    },
    {
        subject: 'english', 
        subtopic: 'writing',
        themeOrPractice: 'theme',
        standardNumber: 'Writing Module 1',
        text: 'Punctuation',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'english', 
        subtopic: 'language',
        themeOrPractice: 'theme',
        standardNumber: 'LA Module 2',
        text: 'Writing Paragraphs',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'english', 
        subtopic: 'reading',
        themeOrPractice: 'practice',
        standardNumber: 'R2',
        text: 'Determine central ideas or themes of texts and analyze their development; summarize the key supporting details and ideas.',
        depthOfKnowledge: '',
        linkedLesson: []
    },
    {
        subject: 'english', 
        subtopic: 'reading',
        themeOrPractice: 'practice',
        standardNumber: 'R2.1',
        text: 'Comprehend explicit details and main ideas in text.',
        depthOfKnowledge: '',
        linkedLesson: ['Non-Fiction']
    },
    {
        subject: 'english', 
        subtopic: 'reading',
        themeOrPractice: 'practice',
        standardNumber: 'R2.2',
        text: 'Summarize details and ideas in text.',
        depthOfKnowledge: '',
        linkedLesson: ['Prose Fiction']
    },
    {
 
    },
    {
        subject: 'english', 
        subtopic: 'language',
        themeOrPractice: 'practice',
        standardNumber: 'L1',
        text: 'Demonstrate command of the conventions of standard English grammar and usage when writing or speaking.',
        depthOfKnowledge: '',
        linkedLesson: []
    },
]

    // Standard.deleteMany({}).then((data) => {
        // seed starter Standards
        Standard.create(startStandards).then((data) => {
            // log the recipes
            console.log('data', data);
            db.close();
        })
        .catch((error) => {
            console.log(error);
            db.close();
        })
    // })

})
