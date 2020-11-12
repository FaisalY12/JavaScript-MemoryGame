document.addEventListener('DOMContentLoaded', () => {

    //cardoptions
    const cardArray =[
        {
            name :"byakugan",
            img :"images/byakugan.jpg"
        },
        {
            name :"byakugan",
            img :"images/byakugan.jpg"
        },
        {
            name: "rinnegan",
            img: "images/rinnegan.jpg"
        },
        {
            name: "rinnegan",
            img: "images/rinnegan.jpg"
        },
        {
            name: "rinnesharingan",
            img: "images/rinnesharingan.jpg"
        },
        {
            name: "rinnesharingan",
            img: "images/rinnesharingan.jpg"
        },
        {
            name: "mangekyou",
            img: "images/mangekyou.png"
        },
        {
            name: "mangekyou",
            img: "images/mangekyou.png"
        },
        {
            name: "sharingan",
            img: "images/sharingan.jpg"
        },
        {
            name: "sharingan",
            img: "images/sharingan.jpg"
        },
        {
            name: "sagepath.jpg",
            img: "images/sagepath.jpg"
        },
        {
            name: "sagepath.jpg",
            img: "images/sagepath.jpg"
        }




    ]
shuffleArray(cardArray)

const grid = document.querySelector(".grid");

let cardsChosenId = []
let cardsChosen =[]
let score = 0


function createBoard() {
    for (let i = 0; i < cardArray.length; i++){
        let card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute("data-id", i)
        card.addEventListener('click',flipcard)
        grid.appendChild(card)
    }
}



function flipcard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if(cardsChosen.length == 2){
        setTimeout(checkForMatch,500)
    }
}

function checkForMatch(){

    if (cardsChosenId[0] == cardsChosenId[1]){
        alert("You clicked the same card! Select another card");
        cardsChosen.length = 1
        cardsChosenId.length = 1

    } else if(cardsChosen[0] === cardsChosen[1]){
        alert("Thats a match!")
        //add score
        let cardImageList = document.getElementsByTagName('img')
        cardImageList[cardsChosenId[0]].setAttribute('src' , 'images/white.png')
        cardImageList[cardsChosenId[0]].removeEventListener('click', flipcard)
        cardImageList[cardsChosenId[1]].setAttribute('src' , 'images/white.png')
        cardImageList[cardsChosenId[1]].removeEventListener('click', flipcard)
        cardsChosenId = [];
        cardsChosen =[];
        addScore()

    } else{
        alert("No match! try again")
        let cardImageList = document.getElementsByTagName('img')
        cardImageList[cardsChosenId[0]].setAttribute('src', 'images/blank.png')
        cardImageList[cardsChosenId[1]].setAttribute('src', 'images/blank.png')
        cardsChosen.length = 0
        cardsChosenId.length =0
        takeLife()
       
    }

}

function addScore() {
    score += 1
    document.querySelector('span').innerHTML= score
    if (score == 6) {
        alert("Congratulations you've won")
        location.reload()
    }
}


function shuffleArray(arr){
    for(let i = 0; i < arr.length-1; i++){
        let randomNumber = Math.floor(Math.random() * Math.floor(arr.length))
        let container = arr[i]
        arr[i]= arr[randomNumber]
        arr[randomNumber] = container
    }

}

//function which sets and displays lives represented by images
const lifebar = document.querySelector("#lifebar")
let lifes ;

function setLives(a){
    lifes = a;
    for (let i = 0; i <= lifes-1; i++) {
        let life = document.createElement('img')
        life.setAttribute('src', 'images/life.png')
        life.setAttribute('id', i+1)
        lifebar.appendChild(life)
    }
}

//function below tracks lives remaining and removes life icons accordingly
function takeLife() {
    if(lifes >= 2){
        document.getElementById(`${lifes}`).remove();
        lifes -=1
    } else {
        document.getElementById(`${lifes}`).remove()
        alert("Game over!")
        location.reload();
    }
}

createBoard()
setLives(5)

})

