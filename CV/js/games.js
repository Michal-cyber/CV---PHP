
/**
 * ONLY RUN ONCE !
 */

let snakeGame = true;
let game2048 = true;

/*
* GAME SNAKE
*/

$('.Snake').on('click', function() {
	if(snakeGame) {
		snakeGame = false;
			let snakeArea = $('#Snake-area'),
			maxSnakeArea = 20;

		let snakePlayerLength = 1,
			snakePlayerPos = {"tr": 9, "td": 9},
			snakePlayerDir = {
				"up": 1,
				"right": 2,
				"down": 3,
				"left": 4
			},


	snakePointPosX = Math.floor(Math.random() *19 ) + 0,
	snakePointPosY = Math.floor(Math.random() *19 ) + 0;

	let snakePointsPos = {
		"posX" : snakePointPosX,
		"posY" : snakePointPosY
	};

	snakeCurrentPlayerDir = snakePlayerDir["left"],

	snakeFrameCount = 0,
	snakeScore = 0,
	snakeSpeed = 150;

	//checking player alive
	let playerOfSnakeIsDeath = false;
	function drawSnakeArea() {
		for(let i = 0; i < maxSnakeArea; i++) {

			snakeArea.append("<tr class='tr" + i + "'></tr>");

			thisTr = $(".tr" + i);

			for(let j = 0; j < maxSnakeArea; j++) {
				thisTr.append("<td class='tr" + i + "td" + j + "'></td>");
			}
		}
	}

	drawSnakeArea();

	document.addEventListener("keydown", function(event) {

		if(event.which == 73) {
			snakeCurrentPlayerDir = snakePlayerDir["up"];
		} else if(event.which == 76) {
			snakeCurrentPlayerDir = snakePlayerDir["right"];
		} else if(event.which == 75) {
			snakeCurrentPlayerDir = snakePlayerDir["down"];
		} else if(event.which == 74) {
			snakeCurrentPlayerDir = snakePlayerDir["left"];
		} 
	});

	function drawPoint() {
		let setPointPos = $(".tr" + snakePointsPos["posX"] + "td" + snakePointsPos["posY"]);

		setPointPos.addClass('draw-point');
	}

	drawPoint();



	function EatPoint() {
		let setPointPos = $(".tr" + snakePointsPos["posX"] + "td" + snakePointsPos["posY"]);

		setPointPos.removeClass('draw-point');

		snakePointPosX = Math.floor(Math.random() *19 ) + 0;
		snakePointPosY = Math.floor(Math.random() *19 ) + 0;

		snakePointsPos = {
			"posX" : snakePointPosX,
			"posY" : snakePointPosY
		};

		setPointPos = $(".tr" + snakePointsPos["posX"] + "td" + snakePointsPos["posY"]);

		setPointPos.addClass('draw-point');
		snakeScore++;
		snakeSpeed--;
		snakePlayerLength++;

		$('#snake-score').html(snakeScore);

	
	}

	function drawPlayer() {
		snakeFrameCount++;
		let getPlayerPos; 

		switch(snakeCurrentPlayerDir) {
			case 1:

				snakePlayerPos["tr"] -= 1;
				getPlayerPos =$(".tr" + snakePlayerPos["tr"] + "td" + snakePlayerPos["td"]);
				getPlayerPos.addClass("draw-player snakeFrameCount" + snakeFrameCount);

				break;
			case 2:

				snakePlayerPos["td"] += 1;
				getPlayerPos =$(".tr" + snakePlayerPos["tr"] + "td" + snakePlayerPos["td"]);
				getPlayerPos.addClass("draw-player snakeFrameCount" + snakeFrameCount);

				break;
			case 3:

				snakePlayerPos["tr"] += 1;
				getPlayerPos =$(".tr" + snakePlayerPos["tr"] + "td" + snakePlayerPos["td"]);
				getPlayerPos.addClass("draw-player snakeFrameCount" + snakeFrameCount);

				break;
			case 4:

				snakePlayerPos["td"] -= 1;
				getPlayerPos =$(".tr" + snakePlayerPos["tr"] + "td" + snakePlayerPos["td"]);
				getPlayerPos.addClass("draw-player snakeFrameCount" + snakeFrameCount);

				break;
			default:
				alert('There is a small issue, having a problem with drawing');
				break;				
		}

		let calcPLayerTailPos = snakeFrameCount - snakePlayerLength,
			getPLayerTailPos = $(".snakeFrameCount" + calcPLayerTailPos);

			getPLayerTailPos.removeClass("draw-player snakeFrameCount" + snakeFrameCount);
	}

	


		$('.snake-butt').on('click', function() {
			$('.snake-butt').hide();
			
			function deathHandler() {
				$("#snake-status").html('You are DEAD');
				playerOfSnakeIsDeath = true;
				clearInterval( snakeInterval );
			}

			const snakeInterval = setInterval( () => {
				let checkNextPLayerPositionX = snakePlayerPos['tr'];
				let checkNextPLayerPositionY = snakePlayerPos['td'];
				console.log(snakeSpeed);
				switch(snakeCurrentPlayerDir) {
					case 1:
						checkNextPLayerPositionX -=1
						break;
					case 2:
						checkNextPLayerPositionY +=1
						break;
					case 3:
						checkNextPLayerPositionX +=1
						break;
					case 4:
						checkNextPLayerPositionY -=1
						break;
					default:
						alert('There is a small issue, having a problem with Player');
						break;
				}

				//snake Speed
			

				// death by wall
					if(snakePlayerPos["tr"] == 19 || snakePlayerPos["td"] == 19 || snakePlayerPos["tr"] == -1 || snakePlayerPos["td"] == -1) {
						deathHandler();
					} 
					//death by eating himsels
					else if($('.tr' + checkNextPLayerPositionX + "td" + checkNextPLayerPositionY).hasClass("draw-player")) {
						deathHandler();		
					} 
					//eating candy
					else if ( (snakePlayerPos["tr"]) == snakePointsPos["posX"] && (snakePlayerPos["td"]) == snakePointsPos["posY"] && playerOfSnakeIsDeath == false ) {
						EatPoint();
						drawPlayer();
					} else if (playerOfSnakeIsDeath == false) drawPlayer();
				}, snakeSpeed);
		})
	}
})
	
/* GAME 2048 */

$('.2048').on('click', function() {
	if(game2048) {
		game2048 = false;
	const gridDisplay = $('.game2048'),
		  scoreDisplay = $('#score'),
		  resultDisplay = $('.result'),
		  width = 4;
	let squares = [],
		score = 0;

	//playground
	function createBoard() {
		for (let i = 0; i < width*width; i++) {
			let square = $('<div> </div>').html('0');
			gridDisplay.append(square);
			squares.push(square);
		}
		generate();
		generate();
	}
	// end
	createBoard();

	//generate random number
	function generate() {
		let	randomNumber = Math.floor(Math.random()*squares.length);
		if ( squares[randomNumber].html() === '0' ) {
			squares[randomNumber].html('2');
			checkForGameOver();
		} else generate();
	}
	// end

	 //combine rows
	function combineRow() {
		for (let i = 0; i < 15; i++) {
			//if true need combine
			if (squares[i].html() === squares[i+1].html()) {
				let combineTotal = parseInt( squares[i].html() ) + parseInt( squares[i+1].html() );
				squares[i].html(combineTotal);
				squares[i+1].html('0');
				score += combineTotal;
				scoreDisplay.html(score);

			}
		}
		checkForWin();
	}

	// combine column
	 function combineColumn() {
		for (let i = 0; i < 12; i++) {
			//if true need combine
			if (squares[i].html() === squares[i+width].html()) {
				let combineTotal = parseInt( squares[i].html() ) + parseInt( squares[i+width].html() );
				squares[i].html(combineTotal);
				squares[i+width].html('0');
				score += combineTotal;
				scoreDisplay.html(score);
			}
		}
		checkForWin();
	}

	//swipe right
	function moveRight() {
		for (let i = 0; i < 16; i++) {
			if (i % 4 === 0 ) {
				let totalOne = squares[i].html(),
					totalTwo = squares[i+1].html(),
					totalThree = squares[i+2].html(),
					totalFour = squares[i+3].html(),
					row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

					//lets filter
				let filteredRow = row.filter(num => num),
					missing = 4 - filteredRow.length,
					zeros = Array(missing).fill(0),
					newRow = zeros.concat(filteredRow);

					//add to square
					squares[i].html(newRow[0]);
					squares[i+1].html(newRow[1]);
					squares[i+2].html(newRow[2]);
					squares[i+3].html(newRow[3]);
			}
		}
	}


//swipe left
	function moveLeft() {
		for (let i = 0; i < 16; i++) {
			if (i % 4 === 0 ) {
				let totalOne = squares[i].html(),
					totalTwo = squares[i+1].html(),
					totalThree = squares[i+2].html(),
					totalFour = squares[i+3].html(),
					row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];
				//lets filter
				let filteredRow = row.filter(num => num),
					missing = 4 - filteredRow.length,
					zeros = Array(missing).fill(0),
					newRow = filteredRow.concat(zeros);

					//add to square
					squares[i].html(newRow[0])
					squares[i+1].html(newRow[1])
					squares[i+2].html(newRow[2])
					squares[i+3].html(newRow[3])
			}
		}
	}



	// swipe down
	function moveDown() {
		for (let i = 0; i < 4; i++) {
			let totalOne = squares[i].html(),
				totalTwo = squares[i+width].html(),
				totalThree = squares[i+(width*2)].html(),
				totalFour = squares[i+(width*3)].html(),
				column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

				let filteredColumn = column.filter(num => num),
					missing = 4 - filteredColumn.length,
					zeros = Array(missing).fill(0),
					newColumn = zeros.concat(filteredColumn);

				squares[i].html(newColumn[0]);
				squares[i+width].html(newColumn[1]);
				squares[i+(width*2)].html(newColumn[2]);
				squares[i+(width*3)].html(newColumn[3]);

		}
	}

	// swipe up
	function moveUp() {
		for (let i = 0; i < 4; i++) {
			let totalOne = squares[i].html(),
				totalTwo = squares[i+width].html(),
				totalThree = squares[i+(width*2)].html(),
				totalFour = squares[i+(width*3)].html(),
				column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)];

				let filteredColumn = column.filter(num => num),
					missing = 4 - filteredColumn.length,
					zeros = Array(missing).fill(0),
					newColumn = filteredColumn.concat(zeros);

				squares[i].html(newColumn[0]);
				squares[i+width].html(newColumn[1]);
				squares[i+(width*2)].html(newColumn[2]);
				squares[i+(width*3)].html(newColumn[3])	;

		}
	}

	//keycodes
	$(document).on('keyup', function(event) {
		switch (event.which) {
			case 87://W
				keyUp();
				break;
			case 83://S
				keyDown();
				break;
			case 65://A
				keyLeft();
				break;
			case 68://D
				keyRight();
				break;
		}
	});

	function keyRight() {
		moveRight();
		combineRow();
		moveRight();
		generate();
	}

	function keyLeft() {
		moveLeft();
		combineRow();
		moveLeft();
		generate();
	}

	function keyUp() {
		moveUp();
		combineColumn();
		moveUp();
		generate();
	}

	function keyDown() {
		moveDown();
		combineColumn();
		moveDown();
		generate();
	}

	//check for win
	function checkForWin() {
		for (var i = 0; i < squares.length; i++) {
			if (squares[i].html() === '2048') {
				resultDisplay.html('You WIN');
			}
		}
	}

	//check if there are no zeros
	function checkForGameOver() {
		let zeros = '0';
		for (let i = 0; i < squares.length; i++) {
			if (squares[i].html() === '0') {
				zeros++;
			}
			if (zeros !== 0) {
				resultDisplay.html('');
			}
			if (zeros == 0) {
				resultDisplay.html('You lost!');
			}
		}
	}
};

});