let mic;

function setup() {
  createCanvas(windowWidth, windowHeight);
  mic = new p5.AudioIn();// 객체 생성
  mic.start();
}

function draw() {
      	if (getAudioContext().state !== 'running') {
        getAudioContext().resume();
    	 }
  background(220);
  smile(width*0.5,height*0.5,200);
  noStroke();
  fill("#291720");
  textSize(width*0.05);
  textAlign(CENTER,CENTER);
  text("COMING SOON", width/2,height/2+width*0.2);
}
function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}



function smile(x,y,size){
  noFill();
  stroke("#291720");
  strokeWeight(size*0.1);
  
  // 눈
  let s = mic.getLevel()*size;
  ellipse(x-size*0.3,y-size*0.1,size*0.25+s,size*0.25+s);
  ellipse(x+size*0.3,y-size*0.1,size*0.25,size*0.25);
  
  // 입
  arc(x,y-size*0.25,size*1.2,size*1.2,radians(45),radians(180-45));
}