// subject can be (math | science | english | socStud)
// lessonPart can be (intro | warmUp | presentation | practice | evaluation | other )
// type can be (file or link)
// location can be of type (url or physical location)
const lessons = [
    {
        dateTaught: '',
        subject: 'math',
        module: 'geometry',
        modLesson: '2D shapes',
        topic: 'circles',
        lessonPart: 'warmUp',
        description: 'identify the parts of a circle',
        type: 'link',
        location: 'https://www.mathworksheets4kids.com/circles/customary/parts-easy-1.pdf',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'english',
        module: 'reading: module 5: drama',
        modLesson: 'lesson 1: interpreting theme',
        topic: '',
        lessonPart: 'warmUp',
        description: 'match the story element to the definition',
        type: 'link',
        location: 'https://wordwall.net/resource/4921187/story-elements',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'english',
        module: 'reading: module 5: drama',
        modLesson: 'lesson 1: interpreting theme',
        topic: '',
        lessonPart: 'intro',
        description: 'how to identify a theme',
        type: 'link',
        location: 'https://www.youtube.com/watch?v=AXPbijjMnV8',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'english',
        module: 'reading: module 5: drama',
        modLesson: 'lesson 1: interpreting theme',
        topic: '',
        lessonPart: 'presentation',
        description: 'pdf slide presentation on how to identify theme',
        type: 'link',
        location: 'https://www.bhamcityschools.org/cms/lib/AL01001646/Centricity/Domain/9883/Theme%20PPT.pdf',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'english',
        module: 'writing: module 4: usage',
        modLesson: 'transitions',
        topic: '',
        lessonPart: 'practice',
        description: 'identify the transitional words',
        type: 'link',
        location: 'https://www.k12reader.com/worksheet/identify-the-transition-words/view/',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'science',
        module: 'module 4: earth and space science',
        modLesson: 'lesson 2: interaction between living and non-living things',
        topic: '',
        lessonPart: 'intro',
        description: 'Video on the water cycle',
        type: 'link',
        location: 'https://www.youtube.com/watch?v=al-do-HGuIk',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'science',
        module: 'module 4: earth and space science',
        modLesson: 'lesson 2: interaction between living and non-living things',
        topic: '',
        lessonPart: 'presentation',
        description: 'quizizz lesson on the water cycle',
        type: 'link',
        location: 'https://quizizz.com/admin/presentation/6078f5f50937e4001b8d1a9d?source=lesson_share',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'science',
        module: 'module 4: earth and space science',
        modLesson: 'lesson 2: interaction between living and non-living things',
        topic: '',
        lessonPart: 'presentation',
        description: 'water cycle diagram',
        type: 'link',
        location: 'https://www.tutoringhour.com/files/water-cycle/diagram.pdf',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'science',
        module: 'module 4: earth and space science',
        modLesson: 'lesson 2: interaction between living and non-living things',
        topic: '',
        lessonPart: 'practice',
        description: 'fill in the water cycle terms',
        type: 'link',
        location: 'https://www.k5learning.com/worksheets/science/grade-2-water-cycle-a.pdf',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'science',
        module: 'module 4: earth and space science',
        modLesson: 'lesson 3: The Cosmos',
        topic: '',
        lessonPart: 'warmUp',
        description: 'name all of the planets in the Solar System',
        type: '',
        location: 'no location',
        standards: []
    },
    {
        dateTaught: '',
        subject: 'socStud',
        module: 'module 2: Economics',
        modLesson: 'lesson 5: Consumer Economics',
        topic: '',
        lessonPart: 'presentation',
        description: 'iCivics Lesson Plan',
        type: 'link',
        location: 'https://www.icivics.org/teachers/lesson-plans/banks-credit-economy?back-ref-search=investment&back-ref-filter=content_type%3Alesson_plan',
        standards: []
    },
]

module.exports = lessons;