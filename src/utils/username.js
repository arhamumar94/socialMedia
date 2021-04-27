

const ADJECTIVES=[
    'boundless',
    'plausible',
    'sleepy',
    'electronic',
    'dangerous',
    'SequelizeMethodpurple'

]
const OBJECTS=[
    'puddle',
    'piano',
    'window',
    'bowl',
    'socks',
    'brocolli',
    'chalk'
]
function genRandomUserName(){
    const adj= ADJECTIVES[Math.floor(Math.random()*7)]
    const obj=OBJECTS[Math.floor(Math.random()*7)]
    return  `${adj}-${obj}`
}
module.exports={
    genRandomUserName
}


