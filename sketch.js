var playerCross;
var playerCircle;

var turns = 0

var play1, play2, play3, play4, play5, play6, play7, play8, play9;

var played1cross = false, played1circle = false;
var played2cross = false, played2circle = false;
var played3cross = false, played3circle = false;
var played4cross = false, played4circle = false;
var played5cross = false, played5circle = false;
var played6cross = false, played6circle = false;
var played7cross = false, played7circle = false;
var played8cross = false, played8circle = false;
var played9cross = false, played9circle = false;

var winningWaysX = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

var winningWaysO = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7]
]

var playedMoves = [
  [],
  []
]



function setup() {
  createCanvas(1000, 1000);

  play1 = createButton("")
  play1.position(100, 100)
  play1.mousePressed(played1)

  play2 = createButton("")
  play2.position(235, 90)
  play2.mousePressed(played2)

  play3 = createButton("")
  play3.position(380, 90)
  play3.mousePressed(played3)


  play4 = createButton("");
  play4.position(90, 235);
  play4.mousePressed(played4);


  play5 = createButton("");
  play5.position(235, 235);
  play5.mousePressed(played5);


  play6 = createButton("");
  play6.position(380, 235);
  play6.mousePressed(played6);


  play7 = createButton("");
  play7.position(90, 380);
  play7.mousePressed(played7);


  play8 = createButton("");
  play8.position(235, 380);
  play8.mousePressed(played8);


  play9 = createButton("");
  play9.position(380, 380);
  play9.mousePressed(played9);

}

function draw() {
  
  background(0, 125, 255);

  

  play1.style('background-color', rgb(0, 125, 255))
  play1.style('padding', '60px')
  play1.style('border', 'none')

  play2.style('background-color', rgb(0, 125, 255))
  play2.style('padding', '65px')
  play2.style('border', 'none')

  play3.style('background-color', rgb(0, 125, 255))
  play3.style('padding', '65px')
  play3.style('border', 'none')

  play4.style('background-color', rgb(0, 125, 255))
  play4.style('padding', '65px')
  play4.style('border', 'none')

  play5.style('background-color', rgb(0, 125, 255))
  play5.style('padding', '65px')
  play5.style('border', 'none')

  play6.style('background-color', rgb(0, 125, 255))
  play6.style('padding', '65px')
  play6.style('border', 'none')

  play7.style('background-color', rgb(0, 125, 255))
  play7.style('padding', '65px')
  play7.style('border', 'none')

  play8.style('background-color', rgb(0, 125, 255))
  play8.style('padding', '65px')
  play8.style('border', 'none')

  play9.style('background-color', rgb(0, 125, 255))
  play9.style('padding', '65px')
  play9.style('border', 'none')

  strokeWeight(7)

  line(225, 100, 225, 500)
  line(375, 100, 375, 500)

  line(100, 225, 500, 225)
  line(100, 375, 500, 375)


  noFill()

  if(played1circle){
    ellipse(150, 150, 100, 100)
    playedMoves[0].push(1)
  }else if(played1cross){
    line(100, 100, 200, 200)
    line(200, 100, 100, 200)
    playedMoves[1].push(1)
  }
  
  if(played2circle){
    ellipse(300, 150, 100, 100)
    playedMoves[0].push(2)
  }else if(played2cross){
    line(250, 100, 350, 200)
    line(350, 100, 250, 200)
  }

  if(played3circle){
    ellipse(450, 150, 100, 100)
    playedMoves[0].push(3)
  }else if(played3cross){
    line(400, 100, 500, 200)
    line(500, 100, 400, 200)
  }

  if(played4circle){
    ellipse(150, 300, 100, 100)
    playedMoves[0].push(4)
  }else if(played4cross){
    line(100, 250, 200, 350)
    line(100, 350, 200, 250)
  }

  if(played5circle){
    ellipse(300, 300, 100, 100)
    playedMoves[0].push(5)
  }else if(played5cross){
    line(250, 250, 350, 350)
    line(250, 350, 350, 250)
  }

  if(played6circle){
    ellipse(450, 300, 100, 100)
    playedMoves[0].push(6)
  }else if(played6cross){
    line(400, 250, 500, 350)
    line(500, 250, 400, 350)
  }

  if(played7circle){
    ellipse(150, 450, 100, 100)
    playedMoves[0].push(7)
  }else if(played7cross){
    line(100, 500, 200, 400)
    line(100, 400, 200, 500)
  }


  if(played8circle){
    ellipse(300, 450, 100, 100)
    playedMoves[0].push(8)
  }else if(played8cross){
    line(250, 400, 350, 500)
    line(350, 400, 250, 500)
  }

  if(played9circle){
    ellipse(450, 450, 100, 100)
    playedMoves[0].push(9)
  }else if(played9cross){
    line(400, 400, 500, 500)
    line(500, 400, 400, 500)
  }

  if(playedMoves[0].includes(1)){

  }
}

function mousePressed(){
  if(turns == 0 && mouseX > 100 && mouseX < 225 && mouseY < 100 && mouseY < 225){
    playerCross.play1 = 1
  }
}

function played1(){

  if(turns == 0){
    play1.hide()
    played1cross = true
    turns = 1
  } else if(turns == 1){
    play1.hide()
    played1circle = true;
    turns = 0
  }
}

function played2(){

  if(turns == 0){
    play2.hide()
    played2cross = true
    turns = 1
  } else if(turns == 1){
    play2.hide()
    played2circle = true;
    turns = 0
  }
}

function played3(){

  if(turns == 0){
    play3.hide()
    played3cross = true
    turns = 1
  } else if(turns == 1){
    play3.hide()
    played3circle = true;
    turns = 0
  }
}

function played4(){

  if(turns == 0){
    play4.hide()
    played4cross = true
    turns = 1
  } else if(turns == 1){
    play4.hide()
    played4circle = true;
    turns = 0
  }
}

function played5(){

  if(turns == 0){
    play5.hide()
    played5cross = true
    turns = 1
  } else if(turns == 1){
    play5.hide()
    played5circle = true;
    turns = 0
  }
}

function played6(){

  if(turns == 0){
    play6.hide()
    played6cross = true
    turns = 1
  } else if(turns == 1){
    play6.hide()
    played6circle = true;
    turns = 0
  }
}
function played7(){

  if(turns == 0){
    play7.hide()
    played7cross = true
    turns = 1
  } else if(turns == 1){
    play7.hide()
    played7circle = true;
    turns = 0
  }
}
function played8(){

  if(turns == 0){
    play8.hide()
    played8cross = true
    turns = 1
  } else if(turns == 1){
    play8.hide()
    played8circle = true;
    turns = 0
  }
}
function played9(){

  if(turns == 0){
    play9.hide()
    played9cross = true
    turns = 1
  } else if(turns == 1){
    play9.hide()
    played9circle = true;
    turns = 0
  }
}

