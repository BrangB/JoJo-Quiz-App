export const Data = [
    {
        "id": 1,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["are living","will live","have lived","live"],
        "answer" : "live"
    },
    {
        "id": 2,
        "question": "I  _____  my parents twice a month.",
        "Choices" : ["visit","am visiting","have visited","will visit"],
        "answer" : "visit"
    },    
    {
        "id": 3,
        "question": "What are you doing there? I _____ TV.",
        "Choices" : ["watch","am watching","have watched","will watch"],
        "answer" : "am watching"
    },    
    {
        "id": 4,
        "question": "Watch carefully. First I _____ a cucumber and _____ it into small pieces.",
        "Choices" : ["am taking, am cutting","take, cut","am taking, cut","take, am cutting"],
        "answer" : "take, cut"
    },    
    {
        "id": 5,
        "question": "I will follow you wherever you _____ .",
        "Choices" : ["will go","are going","go","goes"],
        "answer" : "go"
    },    
    {
        "id": 6,
        "question": "I will call you if I _____ time.",
        "Choices" : ["get","am getting","have got","will get"],
        "answer" : "get"
    },    
    {
        "id": 7,
        "question": "What _____ snakes _____ ?",
        "Choices" : ["do, eat","are, eating","are, eat","were, eating"],
        "answer" : "do, eat"
    },
    {
        "id": 8,
        "question": "How _____ I _____ to the airport?",
        "Choices" : ["do, get","am, getting","do, getting"],
        "answer" : "do, get"
    },
    {
        "id": 9,
        "question": "I _____ this fragrance very much.",
        "Choices" : ["like","am liking","have liked","will like"],
        "answer" : "like"
    },
    {
        "id": 10,
        "question": "I will hit anybody who _____ me names.",
        "Choices" : ["calls","is calling","has called","will call"],
        "answer" : "calls"
    },    
    {
        "id": 11,
        "question": "Why _____ she _____ on the table?",
        "Choices" : ["does, stand","is, standing","does, standing","will stand"],
        "answer" : "is, standing"
    },    
    {
        "id": 12,
        "question": "The temple _____ on a hill outside the town.",
        "Choices" : ["is standing","has stood","stands","will stand"],
        "answer" : "stands"
    },
    {
        "id": 13,
        "question": "Some teachers _____ much homework.",
        "Choices" : ["give","gives","are give","are give"],
        "answer" : "give"
    },
    {
        "id":14,
        "question": "Taylor and Adam _____ good friends.",
        "Choices" : ["be","is","are","does"],
        "answer" : "are"
    },
    {
        "id": 15,
        "question": "_____ your parents let you go to bed late?",
        "Choices" : ["Are","Does","Do","Is"],
        "answer" : "Do"
    },
]

// const randomQuestion = Data.Choices.map(answer => ({sort: Math.random(), value: answer})).sort((a,b) => a.sort - b.sort).map(obj => obj.value)

export const randomQuestions = Data.slice(0, 10).map((item, i) => {
        return {
            "id": i + 1,
            "question": item.question,
            "Choices" : item.Choices.map(answer => ({sort: Math.random(), value: answer})).sort((a,b) => a.sort - b.sort).map(obj => obj.value),
            "answer" : item.answer
        }
        
})