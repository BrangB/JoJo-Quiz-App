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
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },    
    {
        "id": 4,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },    
    {
        "id": 5,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },    
    {
        "id": 6,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },    
    {
        "id": 7,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },
    {
        "id": 8,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },
    {
        "id": 9,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },
    {
        "id": 10,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },    
    {
        "id": 11,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },    
    {
        "id": 12,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },
    {
        "id": 13,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },
    {
        "id":14,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
    },
    {
        "id": 15,
        "question": "My parents  _____  near Chennai.",
        "Choices" : ["live","are living","have lived","will live"],
        "answer" : "live"
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