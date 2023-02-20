export const Data = {
    presentTense: [
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
],
    pastTense: [
        {
            "id": 1,
            "question": "Andrew _____ go to the cinema yesterday. He ____ at home.",
            "Choices" : ["wasn't / stayed","didn't / was stayed","wasn't / was stay","didn't / stayed"],
            "answer" : "didn't / stayed"
        },
        {
            "id": 2,
            "question": "She _____ cook anything so the children _____ hungry.",
            "Choices" : ["wasn't / were","wasn't / did","didn't / ate","didn't / were"],
            "answer" : "didn't / were"
        },    
        {
            "id": 3,
            "question": "There _____ an interesting movie on TV last night but I _____ watch it.",
            "Choices" : ["did / didn't","was / wasn't","was / didn't","did / wasn't"],
            "answer" : "was / didn't"
        },    
        {
            "id": 4,
            "question": "The door _____ open but the children _____ enter the room.",
            "Choices" : ["did / didn't, am cutting","was / weren't","was / didn't","did / weren't"],
            "answer" : "was / didn't"
        },    
        {
            "id": 5,
            "question": "The young man _____ two sandwiches but he ____ still hungry.",
            "Choices" : ["did eat / was","ate / was","eated / was","ate / did"],
            "answer" : "ate / was"
        },    
        {
            "id": 6,
            "question": "The police _____ the thief but they _____ find the jewellery.",
            "Choices" : ["catched / can't","caught / couldn't","caught / weren't","were catch / didn't"],
            "answer" : "caught / couldn't"
        },    
        {
            "id": 7,
            "question": "The firefighter _____ for the little boy in the rooms and he _____ him.",
            "Choices" : ["looked / found","was looked / was found","did look / did find","looked / was find"],
            "answer" : "looked / found"
        },
        {
            "id": 8,
            "question": "He _____ buy anything to eat because he _____ his wallet.",
            "Choices" : ["didn't / lost","can't / lose","wasn't / lost", "didn't / was lose"],
            "answer" : "didn't / lost"
        },
        {
            "id": 9,
            "question": "They _____ play football because there _____ enough players.",
            "Choices" : ["weren't / weren't","didn't / weren't","aren't / aren't","didn't / wasn't"],
            "answer" : "didn't / weren't"
        },
        {
            "id": 10,
            "question": "The young lady _____ me a cup of tea but I _____ drink it because it _____ hot enough. I _____ it on the table.",
            "Choices" : ["brought / wasn't / wasn't / left","was bring / didn't / was / left","brought / didn't / wasn't / left","bring / didn't / wasn't / leave"],
            "answer" : "brought / didn't / wasn't / left"
        }, 
    ]
}
// const randomQuestion = Data.Choices.map(answer => ({sort: Math.random(), value: answer})).sort((a,b) => a.sort - b.sort).map(obj => obj.value)

export const randomQuestions = Data.presentTense.slice(0, 10).map((item, i) => {
        return {
            "id": i + 1,
            "question": item.question,
            "Choices" : item.Choices.map(answer => ({sort: Math.random(), value: answer})).sort((a,b) => a.sort - b.sort).map(obj => obj.value),
            "answer" : item.answer
        }
        
})
export const pastTenseQuestions = Data.pastTense.slice(0, 10).map((item, i) => {
    return {
        "id": i + 1,
        "question": item.question,
        "Choices" : item.Choices.map(answer => ({sort: Math.random(), value: answer})).sort((a,b) => a.sort - b.sort).map(obj => obj.value),
        "answer" : item.answer
    }
    
})