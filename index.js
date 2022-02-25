document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'acryl',
            img: 'images/acryl.png',
        },
        {
            name: 'acryl',
            img: 'images/acryl.png',
        },
        {
            name: 'art',
            img: 'images/art.png',
        },
        {
            name: 'art',
            img: 'images/art.png',
        },
        {
            name: 'beach',
            img: 'images/beach.png',
        },
        {
            name: 'beach',
            img: 'images/beach.png',
        },
        {
            name: 'carpet',
            img: 'images/carpet.png',
        },
        {
            name: 'carpet',
            img: 'images/carpet.png',
        },
        {
            name: 'ceramic',
            img: 'images/ceramic.png'
        },
        {
            name: 'ceramic',
            img: 'images/ceramic.png',
        },
        {
            name: 'twister',
            img: 'images/twister.png',
        },
        {
            name: 'twister',
            img: 'images/twister.png',
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    //create your board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            let card = document.createElement('img');
            card.setAttribute('src', 'images/twister.png')
            card.setAttribute('data-id', i)
            card.setAttribute('width', '100px')
            card.setAttribute('height', '100px')
            card.addEventListener('click', flipcard())
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        let cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!'
        }
    }


    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard();

});