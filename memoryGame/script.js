document.addEventListener('DOMContentLoaded', () => {



	//card options
	const cardArray1 = [
		{
			name: 'burger',
			img: 'images/burger.png'
		},
		{
			name: 'burger',
			img: 'images/burger.png'
		},

		{
			name: 'fullburger',
			img: 'images/fullburger.png'
		},
		{
			name: 'fullburger',
			img: 'images/fullburger.png'
		},

		{
			name: 'sandwitch',
			img: 'images/sandwitch.png'
		},

		{
			name: 'sandwitch',
			img: 'images/sandwitch.png'
		},

		{
			name: 'pizza',
			img: 'images/pizza.jpg'
		},
		{
			name: 'pizza',
			img: 'images/pizza.jpg'
		},

		{
			name: 'cupcake',
			img: 'images/cupcake.jpg'
		},
		{
			name: 'cupcake',
			img: 'images/cupcake.jpg'
		},

		{
			name: 'chicken',
			img: 'images/chicken1.jpg'
		},
		{
			name: 'chicken',
			img: 'images/chicken1.jpg'
		},

		{
			name: 'burger_2',
			img: 'images/burger_2.png'
		},
		{
			name: 'burger_2',
			img: 'images/burger_2.png'
		},

		{
			name: 'fullburger_2',
			img: 'images/fullburger_2.png'
		},
		{
			name: 'fullburger_2',
			img: 'images/fullburger_2.png'
		},

		{
			name: 'pizza_2',
			img: 'images/pizza_2.jpg'
		},
		{
			name: 'pizza_2',
			img: 'images/pizza_2.jpg'
		},

		{
			name: 'cupcake_2',
			img: 'images/cupcake_2.jpg'
		},
		{
			name: 'cupcake_2',
			img: 'images/cupcake_2.jpg'
		}


	];















	const cardArray2 = [
		{
			name: 'circle',
			img: 'images/circle.png'
		},
		{
			name: 'circle',
			img: 'images/circle.png'
		},

		{
			name: 'ellipse',
			img: 'images/ellipse.png'
		},
		{
			name: 'ellipse',
			img: 'images/ellipse.png'
		},

		{
			name: 'eqtriangle',
			img: 'images/eqtriangle.png'
		},

		{
			name: 'eqtriangle',
			img: 'images/eqtriangle.png'
		},

		{
			name: 'hexagon',
			img: 'images/hexagon.png'
		},
		{
			name: 'hexagon',
			img: 'images/hexagon.png'
		},

		{
			name: 'octagon',
			img: 'images/octagon.png'
		},
		{
			name: 'octagon',
			img: 'images/octagon.png'
		},

		{
			name: 'parallelogram',
			img: 'images/parallelogram.png'
		},
		{
			name: 'parallelogram',
			img: 'images/parallelogram.png'
		},

		{
			name: 'pentagon',
			img: 'images/pentagon.png'
		},
		{
			name: 'pentagon',
			img: 'images/pentagon.png'
		},

		{
			name: 'rectangle',
			img: 'images/rectangle.png'
		},
		{
			name: 'rectangle',
			img: 'images/rectangle.png'
		},

		{
			name: 'rhombus',
			img: 'images/rhombus.png'
		},
		{
			name: 'rhombus',
			img: 'images/rhombus.png'
		},

		{
			name: 'ritriangle',
			img: 'images/ritriangle.png'
		},
		{
			name: 'ritriangle',
			img: 'images/ritriangle.png'
		}


	];

















	const cardArray3 = [
		{
			name: 'absurd2',
			img: 'images/absurd2.jpg'
		},
		{
			name: 'absurd2',
			img: 'images/absurd2.jpg'
		},

		{
			name: 'agitated2',
			img: 'images/agitated2.jpg'
		},
		{
			name: 'agitated2',
			img: 'images/agitated2.jpg'
		},

		{
			name: 'close2',
			img: 'images/close2.jpg'
		},

		{
			name: 'close2',
			img: 'images/close2.jpg'
		},

		{
			name: 'cover2',
			img: 'images/cover2.jpg'
		},
		{
			name: 'cover2',
			img: 'images/cover2.jpg'
		},

		{
			name: 'defrost2',
			img: 'images/defrost2.jpg'
		},
		{
			name: 'defrost2',
			img: 'images/defrost2.jpg'
		},

		{
			name: 'delicate2',
			img: 'images/delicate2.jpg'
		},
		{
			name: 'delicate2',
			img: 'images/delicate2.jpg'
		},



		{
			name: 'health2',
			img: 'images/health2.jpg'
		},
		{
			name: 'health2',
			img: 'images/health2.jpg'
		},

		{
			name: 'light2',
			img: 'images/light2.jpg'
		},
		{
			name: 'light2',
			img: 'images/light2.jpg'
		},

		{
			name: 'love2',
			img: 'images/love2.jpg'
		},
		{
			name: 'love2',
			img: 'images/love2.jpg'
		},

		{
			name: 'photogenic2',
			img: 'images/photogenic2.jpg'
		},
		{
			name: 'photogenic2',
			img: 'images/photogenic2.jpg'
		}


	];

	var cardArray =[]
	


	const grid = document.querySelector('.grid')
	const startprompt = document.querySelector('[start-prompt-txt]');
	const startpromptElement = document.getElementById('startprompt');
	const bttn = document.getElementById('start-btn');
	const nxtLevelBtn =document.getElementById('nxtLevelBtn');
	const winMsg = document.querySelector('[data-win-msg-txt]');
	const winMsgElement = document.getElementById('winMsg');
	let chances = document.getElementById('chances');
	var cardsChosen =[]
	var cardsChosenId =[]
	var cardsWon =[]
	var res = 0
	var lossCount = 3
	let closeCardTimer = 5000
	let level = 1
	let lastLevel = 3
	
	
	//clears the previous level's board
	function clear(){
		while(grid.hasChildNodes()){
			grid.removeChild(grid.firstChild);
		}
	}


	nxtLevelBtn.onclick = function() {nxtLevel(level)}

	function createBoard(){
		startprompt.innerHTML = "START GAME";
		startpromptElement.classList.add('visible');
		bttn.addEventListener('click', startGame);
	};

	

	function startGame(){
		clear()
		startpromptElement.classList.remove('visible');
		document.getElementById('level').innerHTML = level
		if (level === 1) {
			cardArray = cardArray1
		}else if (level === 2) {
			cardArray = cardArray2
			closeCardTimer = 7000
		}else{
			cardArray = cardArray3
			closeCardTimer = 8000
		}

		cardArray.sort(() => 0.5 - Math.random())

		for (let i=0; i < cardArray.length; i++){
			var card = document.createElement('img')
			card.setAttribute('class', 'gridcard')
			card.setAttribute('data-id', i)
			card.addEventListener('click', flipCard)
			
			showCards(card)
			setTimeout(closeCards, closeCardTimer, card)
			
		};

	}

	function closeCards(card){
		card.setAttribute('src', 'images/blank.png')
		grid.appendChild(card)
	}


	function showCards(card){
		cardId = card.getAttribute('data-id')
		card.setAttribute('src', cardArray[cardId].img)
		grid.appendChild(card)
	}

	//check for matches
	function checkForMatch() {
		var cards = document.querySelectorAll('img')
		const optionOneId = cardsChosenId[0]
		const optionTwoId = cardsChosenId[1]
		if (cardsChosen[0] === cardsChosen[1]) {
			cards[optionOneId].setAttribute('src', 'images/black.png')
			cards[optionTwoId].setAttribute('src', 'images/black.png')
			cards[optionTwoId].classList.add('unclickable')
			cardsWon.push(optionOneId)
			cardsWon.push(optionTwoId)
			res += 1
			//if level statement to adjust
			if (level != 1 && lossCount < 3) {
				lossCount += 1
			}else{
				lossCount = 3
			}
			document.getElementById("result").innerHTML = res
		}else {
			cards[optionOneId].setAttribute('src', 'images/blank.png')
			cards[optionTwoId].setAttribute('src', 'images/blank.png')
			lossCount -= 1
			
		}

		if (lossCount < 0) {
			winMsg.innerHTML = "ahhh! you lost this round. Keep trying you'll improve."
			winMsgElement.classList.add('show');
		}
		chances.innerHTML = lossCount
	
		cardsChosen = []
		cardsChosenId = []
		if (cardsWon.length === cardArray.length) {
			console.log(cardsWon.length)
			console.log(cardArray.length)
			
			if(level === lastLevel){
				winMsg.innerHTML = 'YOU ARE A MEMORY GENIUS!! You have mastered all levels. Now go solve the global warming crisis'
				nxtLevelBtn.innerHTML = 'Keep playing?'
			}else{
				winMsg.innerHTML = 'Congratulations! You passed this level'
				level += 1
			}
			winMsgElement.classList.add('show');
		}
	}
	

	function nxtLevel(level){
		winMsgElement.classList.remove('show');
		cardsChosen =[]
		cardsChosenId =[]
		cardsWon =[]
		res = 0
		lossCount = 3
		level = level
		startGame()
	}

	


	//flip your card
	function flipCard() {
		var cardId = this.getAttribute('data-id')
		
		if (cardsWon.includes(cardId)){
			console.log('got it')
		}else if (cardsChosenId.includes(cardId)) {
			console.log('you already selected this card')
		}else {
			cardsChosen.push(cardArray[cardId].img)
			cardsChosenId.push(cardId)
			this.setAttribute('src', cardArray[cardId].img)
			
			if (cardsChosen.length === 2) {
				setTimeout(checkForMatch, 500)
			}

		}
			
		
	}


	

	


	createBoard()





})