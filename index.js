let actor=document.getElementById('actor')
let food=document.getElementById('food')
let animal=document.getElementById('animal')
let adjective=document.getElementById('adjective')

let result=document.getElementById('result')

function createStory(){
    if(actor.value==''||food.value==''||animal.value==''||adjective.value==''){
        result.innerHTML='Please fill in all the information'
        return
    }


 
     let stories=[`Once opon a time, there was a boy named ${actor.value}, and he loved ${food.value} but one day, he realized that his ${food.value} was not staying in his hands.  it fell on the 
        floor.  Then the ${animal.value}would eat all of the ${food.value}.
        Then, he realized, it might be nice to just let the ${animal.value} wat the food and from then on, he was happy when the ${food.value} fell on the floor`]
    let num=randomInteger(0,stories.length-1)

    result.innerHTML=stories[num]
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}