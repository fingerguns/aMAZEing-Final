let dude1
let start = true
let stage1 = false
let stage2 = false
let stage3 = false
let stage4 = false
let stage5 = false
let stage6 = false
let stage7 = false
let stage8 = false
let stage9 = false
let stage10 = false
let coins=0
let health=100
let buying=false
let inventory=false
let healthpotions = 0
let s1dialogue=true
let sidespeed = 0
let vertspeed = 0
let dx,dy,hypotenuse
let timer,hittimer,guardhittimer,guardanimationtimer,guardhitting
let triggered = true
let triggered2 = false
let minotaur1moving=false
let attackDamage=1
let allowedHit=true
let rotated=false
let armorValue=0
let moveable=true
let guard1Choosing=false
let allowedImpale=true
let guard1Alive=true
let rotatedAxe=false
let guard1Health=20
let fightingGuard1=false
let finished=false
let facingRight,facingLeft
let fading = false
let fadetimer, fadetimer1, fadeintimer,fadeintimer1, finalfadetimer,finalfadeintimer
let fading1 = false
let fadingin=false
let fadingin1=false
let finalfading=false
let finalfadingin=false
let threshold,piletimer, winTimer
let animation=false
let Coins = [];
let cursor=false
let easterEgg = false
let easterEntered=false
function setup() {
  noCursor()
  rectMode(CENTER)
  createCanvas(windowWidth,windowHeight)
  // background(30, 100, 48)
  dude1= new Dude (400,600,6)
  s1wall1 = new Wall (625,100,350,200)
  s1wall2 = new Wall (175,100,350,200)
  s1wall3 = new Wall (175,550,350,200)
  s1wall4 = new Wall (625,550,350,200)
  s1wall5 = new Wall (125,237.5,250,100)
  s1wall6 = new Wall (125,412.5,250,100)
  s1wall7 = new Wall (675,237.5,250,100)
  s1wall8 = new Wall (675,412.5,250,100)
  s1moneybag1 = new Moneybag (535,220,20,true)
  s2wall1 = new Wall (275,137.5,550,295)
  s2wall2 = new Wall (275,507.5,550,285)
  s2wall3 = new Wall (775,325,50,650)
  s2wall4 = new Wall (650,97.5,200,195)
  s2wall5 = new Wall (650,552.5,200,195)
  s3wall1 = new Wall (400,25,800,50)
  s3wall2 = new Wall (25,150,50,300)
  s3wall3 = new Wall (25,525,50,250 )
  s3wall4 = new Wall (775,325,50,650)
  s3wall5 = new Wall (175,625,350,50)
  s3wall6 = new Wall (625,625,350,50)
  s3gatebottom = new Wall (400,625,100,50)
  s3gateleft = new Wall (25,350 ,50,100)
  s3minotaur = new Minotaur (150,450,50,true)
  s4wall1 = new Wall (400,507.5,800,285)
  s4wall2 = new Wall (625,42.5,350,85)
  s4wall3 = new Wall (400,235,800,100)
  s4wall4 = new Wall (175,42.5,350,85)
  s4wall5 = new Wall (625,180,350,10)
  s5wall1 = new Wall (400,150,800,300)
  s5wall2 = new Wall (175,525,350,250)
  s5wall3 = new Wall (625,525,350,250)
  s6wall1 = new Wall (400,150,800,300)
  s6wall2 = new Wall (625,525,350,250)
  s6wall3 = new Wall (175,475,350,350)
  s7wall1 = new Wall (625,507.5,350,285)
  s7wall2 = new Wall (625,235,350,100)
  s7wall3 = new Wall (625,42.5,350,85)
  s7wall4 = new Wall (500,135,100,100)
  s7wall5 = new Wall (175,87.5,350,175)
  s7wall6 = new Wall (175,562.5,350,175)
  s7wall7 = new Wall (37.5,325,75,300)
  s7wall8 = new Wall (312.5,325,75,300)
  sword1 = new Sword (700,100,7,true,false)
  minotaur1loot1 = new Moneybag (400,325,30,true)
  minotaur1loot2 = new Moneybag (370,350,30,true)
  armorLoot1 = new Armor (420,375,true,false,20,50)
  s8wall1 = new Wall (175,325,350,650)
  s8wall2 = new Wall (575,625,450,50)
  s8wall3 = new Wall (625,225,350,450)
  s8wall4 = new Wall (750,475,100,50)
  s9wall1 = new Wall (400,625,800,50)
  s9wall2 = new Wall (400,475,800,50)
  s9wall3 = new Wall (137.5,350,275,200)
  s9wall4 = new Wall (662.5,350,275,200)
  s9wall5 = new Wall (175,125,350,250)
  s9wall6 = new Wall (625,125,350,250)
  finalKey = new Key (175,400,0.5,true,false)
  guard1gate = new Wall (510,550,25,200)
  s10wall1 = new Wall (400,625,800,50)
  s10wall2 = new Wall (400,250,800,500)
  s10wall3 = new Wall (750,550,100,100)
}
function draw() {
background(230,230,250)
  if (start==true) {
    noStroke()
    fill(70,127,0)
    rect (400, 325,800, 650)
    fill (56, 102, 0)
    ellipse (400,250,300,150)
    chest(400,220)
    dude1.drawDude();
    dude1.moveDude(37,38,39,40);
    trap1()
    if (finished==true){
      if (finalfadingin==true){
        fill(0,0,0,(270-(frameCount-finalfadeintimer)*2))
        rect(400,325,800,650)
        if ((270-(frameCount-finalfadeintimer)*2)<=0){
        finalfadingin=false
        moveable=true
        }
      }
    }
  }
if (stage1==true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  s1moneybag1.drawmoneybag();
  s1moneybag1.collect();
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  s1wall1.drawWall();
  s1wall1.blockDude();
  s1wall2.drawWall();
  s1wall2.blockDude();
  s1wall3.drawWall();
  s1wall3.blockDude();
  s1wall4.drawWall();
  s1wall4.blockDude();
  s1wall5.drawWall();
  s1wall5.blockDude();
  s1wall6.drawWall();
  s1wall6.blockDude();
  s1wall7.drawWall();
  s1wall7.blockDude();
  s1wall8.drawWall();
  s1wall8.blockDude();
  dialogue1()
  leaveStage1();
}
if (stage2==true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  s2wall1.drawWall();
  s2wall1.blockDude();
  s2wall2.drawWall();
  s2wall2.blockDude();
  s2wall3.drawWall();
  s2wall3.blockDude();
  s2wall4.drawWall();
  s2wall4.blockDude();
  s2wall5.drawWall();
  s2wall5.blockDude();
  merchant(650,325);
  merchantMenu();
  leaveStage2();

}
if (stage3 == true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  s3minotaur.drawMinotaur();
  s3minotaur.moveMinotaur();
  s3minotaur.dead()
  s3minotaur.hitdude();
  s3wall1.drawWall();
  s3wall1.blockDude();
  s3wall1.blockMinotaur();
  s3wall2.drawWall();
  s3wall2.blockDude();
  s3wall2.blockMinotaur();
  s3wall3.drawWall();
  s3wall3.blockDude();
  s3wall3.blockMinotaur();
  s3wall4.drawWall();
  s3wall4.blockDude();
  s3wall4.blockMinotaur();
  s3wall5.drawWall();
  s3wall5.blockDude();
  s3wall5.blockMinotaur();
  s3wall6.drawWall();
  s3wall6.blockDude();
  s3wall6.blockMinotaur();
  sword1.drawSword();
  sword1.collect();
  if (s3minotaur.alive==false){
    minotaur1loot1.drawmoneybag();
    minotaur1loot1.collect()
    minotaur1loot2.drawmoneybag()
    minotaur1loot2.collect()
    armorLoot1.drawArmor()
    armorLoot1.collect()
  }
  leaveStage3();
  triggerMinotaurs3()
}
if (stage4 ==true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  s4wall1.drawWall();
  s4wall1.blockDude();
  s4wall2.drawWall();
  s4wall2.blockDude();
  s4wall3.drawWall();
  s4wall3.blockDude();
  s4wall4.drawWall();
  s4wall4.blockDude();
  s4wall5.drawWall();
  s4wall5.blockDude();
  fill(64,69,79)
  rect(625,100,350,350)
  noFill()
  leaveStage4();
}
if (stage5 == true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  s5wall1.drawWall();
  s5wall1.blockDude();
  s5wall2.drawWall();
  s5wall2.blockDude();
  s5wall3.drawWall();
  s5wall3.blockDude();
  leaveStage5();
}
if (stage6 == true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  s6wall1.drawWall();
  s6wall1.blockDude();
  s6wall2.drawWall();
  s6wall2.blockDude();
  s6wall3.drawWall();
  s6wall3.blockDude();
  leaveStage6();
}
if (stage7 == true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  noStroke()
  fill(0,0,0,75)
  rect(175,212.5,200,75)
  rect(175,200,200,50)
  rect(175,187.5,200,25)
  fill(45,50,60)
  triangle(75,250,75,175,90,175)
  triangle(275,250,275,175,260,175)
  s7wall1.drawWall();
  s7wall1.blockDude();
  s7wall2.drawWall();
  s7wall2.blockDude();
  s7wall3.drawWall();
  s7wall3.blockDude();
  s7wall4.drawWall();
  s7wall4.blockDude();
  s7wall5.drawWall();
  s7wall5.blockDude();
  s7wall6.drawWall();
  s7wall6.blockDude();
  s7wall7.drawWall();
  s7wall7.blockDude();
  s7wall8.drawWall();
  s7wall8.blockDude();
  finalKey.drawKey();
  finalKey.collect();
lavapit();
  if (fadingin==true&&dude1.x<=340&&dude1.y>=210){
    fill(0,0,0,(270-(frameCount-fadeintimer)*2))
    rect(400,325,800,650)
    if ((270-(frameCount-fadeintimer)*2)<=0){
    fadingin=false
    }
  }
  if (dude1.x<=340&&dude1.y<=210&&fading1==false){
    fadetimer1=frameCount
    fading1=true
  }
  if (dude1.x<=340&&dude1.y>=210){
      fadetimer1=frameCount
      fading=false
    }
  if (fading1==true){
    fill(0,0,0,((frameCount-fadetimer1)*2))
    rect(400,325,800,650)
    if (((frameCount-fadetimer1)*2)>=270){
      stage7=false
      stage10=true
      dude1.x=620
      dude1.y=550
      fading1=false
      fadingin1=true
      fadeintimer1=frameCount
    }
  }
  leaveStage7();
}
if(stage8==true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  s8wall1.drawWall();
  s8wall1.blockDude();
  s8wall2.drawWall();
  s8wall2.blockDude();
  s8wall3.drawWall();
  s8wall3.blockDude();
  s8wall4.drawWall();
  s8wall4.blockDude();
if(guard1Alive==true){
  guard1gate.drawWall();
  guard1gate.blockDude();
  guard1(470,550)
}
  leaveStage8();
}
if (animation==true){
  let b = new GoldCoin(random(0,800),0,6,true)
  Coins.push(b);
  for (let i = 0; i < Coins.length; i++) {
    Coins[i].drawCoin();
              Coins[i].dropCoin();
                  Coins[i].buildPile();
}
    threshold=650-((frameCount-piletimer)/10)
}
if (stage9 == true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  s9wall1.drawWall();
  s9wall1.blockDude();
  s9wall2.drawWall();
  s9wall2.blockDude();
  s9wall3.drawWall();
  s9wall3.blockDude();
  s9wall4.drawWall();
  s9wall4.blockDude();
  s9wall5.drawWall();
  s9wall5.blockDude();
  s9wall6.drawWall();
  s9wall6.blockDude();
  finalGate(400,418,1)
  if(dude1.y>=410&&dude1.y<=500&&stage9==true&&finalKey.owned==true&&finalfading==false){
    finalfadetimer=frameCount
    finalfading=true
    moveable=false
  }
  if (finalfading==true){
    fill(0,0,0,((frameCount-finalfadetimer)*2))
    rect(400,325,800,650)
    if (((frameCount-finalfadetimer)*2)>=275){
      stage9=false
      start=true
      dude1.y=4
      finished=true
      finalfading=false
      finalfadingin=true
      finalfadeintimer=frameCount
    }
  }
  leaveStage9();
}
if (stage10 == true){
  fill(31, 89, 78)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude(37,38,39,40);
  noStroke()
  fill(0,0,0,75)
  rect(662.5,550,75,100)
  rect(675,550,50,100)
  rect(687.5,550,25,100)
  fill(45,50,60)
  triangle(625,500,700,500,700,512)
  triangle(625,600,700,600,700,588)
  s10wall1.drawWall();
  s10wall1.blockDude();
  s10wall2.drawWall();
  s10wall2.blockDude();
  s10wall3.drawWall();
  s10wall3.blockDude();
  if (dude1.x>=630&&fading==false){
    fadetimer=frameCount
    fading=true
  }
  if (dude1.x<=630){
      fadetimer=frameCount
      fading=false
    }
    if (fadingin1==true&&dude1.x<=630){
      fill(0,0,0,(270-(frameCount-fadeintimer1)*2))
      rect(400,325,800,650)
      if ((270-(frameCount-fadeintimer1)*2)<=0){
      fadingin1=false
      }
    }
  if (fading==true){
    fill(0,0,0,((frameCount-fadetimer)*2))
    rect(400,325,800,650)
    if (((frameCount-fadetimer)*2)>=275){
      stage10=false
      stage7=true
      dude1.x=175
      dude1.y=220
      fading=false
      fadingin=true
      fadeintimer=frameCount

    }
  }
  leaveStage10( )
}
if (easterEgg==true){
  fill(74, 153, 191)
  rect(400,325,800,650)
  dude1.drawDude();
  dude1.moveDude();
  fill(0)
  textFont("cursive")
  textAlign(CENTER)
  textSize(30)
  text("You Found The Easter Egg!",400,100)
  text("thank you for playing my game!:)",400,500)
  guardHelm(200,200,2)
  swordIcon(600,300,2.5)
  textAlign(LEFT)
}
stats()
personalinventory()
death();
hitdelay();
fancyCursor()
controls()
}
class Dude {
	constructor(x,y,speed){ //every avatar needs an x value, a y value, and a speed
		    this.x = x;
    		this.y = y;
        this.speed=speed
	}
	drawDude(){  // draw the running person
    if (armorLoot1.owned==true){
      stroke(8,146,208)
      strokeWeight(2)
      fill(8,146,208,150)
      ellipse(this.x,this.y,30,60)
      noStroke()
    }
    mainCharacter(this.x,this.y,(2/3))
    if (sword1.owned==true&&rotated==false){
    if (facingRight==true){
      swordIcon(this.x+15,this.y,(1/3))
    }
    if (facingLeft==true){
      swordIcon(this.x-15,this.y,(1/3))
    }
  }
    if (sword1.owned==true&&keyIsDown(16)){
      rotated=true
    if (facingRight==true){
    rotatedSwordRight(this.x+15,this.y,(1/3))
  }
    if (facingLeft==true){
    rotatedSwordLeft(this.x-15,this.y,(1/3))
    }
}
  else{
    rotated=false
  }
	}
	moveDude(leftkey,upkey,rightkey,downkey){
    if (keyIsDown(upkey)&&moveable==true) { //if you hold the up arrow, move up by speed
       this.y -= this.speed;
    }
    if (keyIsDown(downkey)&&moveable==true) { // if you hold the down arrow, move down by speed
        this.y += this.speed;
    }
    if (keyIsDown(leftkey)&&moveable==true) {
      this.x-=this.speed;
    }
    if (keyIsDown(rightkey)&&moveable==true) {
      this.x+=this.speed;
    }
    if (start==true){
    if (this.x>=800){
      this.x-=6
    }
    if(this.x<=-0){
      this.x+=6
    }
    if (this.y>=650){
      this.y-=6
    }
    if (this.y<=-0) {
      this.y+=6
    }
  }
  }
}
class Wall {
  constructor (x,y,width,height){
    this.x = x
    this.y = y
    this.height = height
    this.width = width
  }
  drawWall() {
    noStroke()
    fill(64,69,79)
    rect (this.x,this.y,this.width,this.height)
  }
    blockDude() {
      if (dude1.y<=this.y+24+(this.height/2)&&dude1.y>=this.y-((this.height/2)+24)&&dude1.x<=this.x+7+(this.width/2)&&dude1.x>=this.x-((this.width/2)+7)&&keyIsDown(40)) {
    dude1.y=dude1.y-6
    }
    if (dude1.y<=this.y+24+(this.height/2)&&dude1.y>=this.y-((this.height/2)+24)&&dude1.x<=this.x+7+(this.width/2)&&dude1.x>=this.x-((this.width/2)+7)&&keyIsDown(38)) {
  dude1.y=dude1.y+6
  }
  if (dude1.y<=this.y+24+(this.height/2)&&dude1.y>=this.y-((this.height/2)+24)&&dude1.x<=this.x+7+(this.width/2)&&dude1.x>=this.x-((this.width/2)+7)&&keyIsDown(37)) {
dude1.x=dude1.x+6
}
if (dude1.y<=this.y+24+(this.height/2)&&dude1.y>=this.y-((this.height/2)+24)&&dude1.x<=this.x+7+(this.width/2)&&dude1.x>=this.x-((this.width/2)+7)&&keyIsDown(39)) {
dude1.x=dude1.x-6
}
}
  blockMinotaur(){
if (s3minotaur.y<=this.y+5+(this.height/2)&&s3minotaur.y>=this.y-((this.height/2)+5)&&s3minotaur.x<=this.x+5+(this.width/2)&&s3minotaur.x>=this.x-((this.width/2)+5)) {
s3minotaur.x-=sidespeed
s3minotaur.y-=vertspeed
sidespeed=0
vertspeed=0
minotaur1moving=false
timer = frameCount
}
if(frameCount==timer+180){
  updateMinotaurs3();
}
}
}
function chest(x,y){
fill(130, 82, 1)
rect (x,y,50,30)
if (animation==false){
arc (x,y-15,50,40,radians(180),radians(0))
fill(0,0,0)
stroke(1)
line(x-25,y-15,x+25,y-15)
fill (255,215,0)
rect(x,y-13,10,15)
}
if (animation ==true){
  fill(0,0,0,150)
  rect(x,y-20,50,10)
  fill(130,82,1)
  arc(x,y-25,50,30,radians(180),radians(0));
  fill(255,215,0)
  rect(x,y-23,10,7)

}
}
function trap1 (){
if (dude1.y<=270&&finished==false){
  start=false
  stage1=true
  dude1.x=400;
  dude1.y=325
  health=health-(10-armorValue)
}
if (dude1.y>=250&&finished==true&&animation==false){
  piletimer=frameCount
  animation=true
  moveable=false
  winTimer=frameCount
}
if (frameCount>=winTimer+120){
  fill(133,133,132)
  textAlign(CENTER)
  stroke(0)
  strokeWeight(5)
  textSize(50)
  text("You Win!",400,325)
  textAlign(LEFT)
}
}
class Moneybag {
  constructor(x,y,value,exist){
    this.x = x;
    this.y = y;
    this.value = value;
    this.exists=exist
  }
  drawmoneybag(){
  if (this.exists==true){
  fill (183,165,122);
  beginShape()
  curveVertex(this.x-10,this.y-20)
  curveVertex(this.x+10,this.y-20)
  curveVertex(this.x+5,this.y-10)
  curveVertex(this.x+10,this.y)
  curveVertex(this.x+10,this.y+10)
  curveVertex(this.x,this.y+14)
  curveVertex(this.x-10,this.y+10)
  curveVertex(this.x-10,this.y)
  curveVertex(this.x-5,this.y-10)
  endShape(CLOSE)
  fill (0);
  textSize (15)
  textFont("times");
  text("$",this.x-3,this.y+4);
}
}
collect(){
  if (dude1.x<=this.x+10&&dude1.x>=this.x-10&&dude1.y<=this.y+10&&dude1.y>=this.y-10&&this.exists==true){
  coins = coins + this.value;
  this.exists = false
}
}
}
class Sword {
  constructor(x,y,value,exist,owned){
    this.x = x;
    this.y = y;
    this.value = value;
    this.exists=exist
    this.owned=owned
  }
  drawSword(){
if (this.exists==true){
    fill(130, 82, 1)
    rect(this.x,this.y+10,6,26)
    fill(255,215,0)
    ellipse(this.x,this.y+25,10,10)
    triangle(this.x-15,this.y-7,this.x+15,this.y-7,this.x,this.y)
    fill(133,133,132)
    beginShape()
    vertex(this.x-6,this.y-7)
    vertex(this.x-6,this.y-45)
    vertex(this.x,this.y-58)
    vertex(this.x+6,this.y-45)
    vertex(this.x+6,this.y-7)
    endShape(CLOSE)
}
}
  collect(){
  if (dude1.x<=this.x+10&&dude1.x>=this.x-10&&dude1.y<=this.y+50&&dude1.y>=this.y-50&&this.exists==true){
  attackDamage = this.value;
  this.exists = false
  this.owned=true
}
}
}
class Key {
  constructor(x,y,s,exist,owned){
    this.x = x;
    this.y = y;
    this.size = s;
    this.exists=exist
    this.owned=owned
  }
  drawKey(){
if (this.exists==true){
  keyIcon(this.x,this.y,this.size)
}
}
  collect(){
  if (dude1.x<=this.x+30&&dude1.x>=this.x-30&&dude1.y<=this.y+50&&dude1.y>=this.y-150&&this.exists==true){
  this.exists = false
  this.owned=true
}
}
}
class Minotaur {
  constructor(x,y,h,alive){
    this.x = x
    this.y = y
    this.health=h
    this.alive=alive
}
  drawMinotaur(){
if (this.alive==true){
  mainCharacter(this.x,this.y,(2/3))
  minotaurIcon(this.x,this.y-20,(2/9))
}
}
  moveMinotaur(){
if (this.alive == true){
      this.x=this.x+sidespeed
      this.y=this.y+vertspeed
  }
}
  dead(){
    if (this.alive==true&&this.health<=0)
    this.alive=false
  }
  hitdude(){
    if (stage3==true&&dude1.x<=s3minotaur.x+10&&dude1.x>=s3minotaur.x-10&&dude1.y<=s3minotaur.y+26&&dude1.y>=s3minotaur.y-30&&minotaur1moving==true&&allowedImpale==true){
      health-=(40-armorValue)
      if(armorLoot1.owned==true){
        armorLoot1.durability-=20
      }
      allowedImpale=false
    }
  }
}
class Armor {
  constructor(x,y,exist,owned,value,durability){
    this.x = x;
    this.y = y;
    this.exists=exist
    this.owned=owned
    this.value=value
    this.durability=durability
  }
  drawArmor(){
if (this.exists==true){
  stroke(8,146,208)
  strokeWeight(2)
  fill(8,146,208,150)
  ellipse(this.x,this.y,40,40)
  noStroke()
}
}
  collect(){
  if (dude1.x<=this.x+30&&dude1.x>=this.x-30&&dude1.y<=this.y+30&&dude1.y>=this.y-30&&this.exists==true){
  this.exists = false
  this.owned=true
  armorValue+=this.value
}
}
}
class GoldCoin {
	constructor(x,y,speed,exists){
		this.x = x;
    		this.y = y;
          this.speed = speed;
          this.exists=exists
	}
	drawCoin(){
      if (this.exists==true){
      	stroke(1);
        	strokeWeight(1);
    		fill(255,215,0);
		ellipse(this.x,this.y,10,10);
  }
	}
	dropCoin(){
    if (this.exists==true){
		this.y = this.y + this.speed;
	}
}
  buildPile(){
    if (this.exists==true&&this.y>=random(threshold,threshold+10)){
      this.speed=0
    }
  }
}
function stats(){
  fill (255)
  textFont('times')
  textSize(20)
  text ("coins:"+coins,690,50)
  text ("health:"+health,690,70)
  if (sword1.owned==true){
    fill(255)
    ellipse(40,610,50,50)
    swordIcon(40,615,(1/2))
  }
  if(armorLoot1.owned==true){
    fill(255)
    ellipse(95,610,50,50)
    stroke(8,146,208)
    strokeWeight(2)
    fill(8,146,208,150)
    ellipse(95,610,15,30)
    noStroke()
    fill(255)
    text (armorLoot1.durability,88,580)
    if(armorLoot1.durability<=0){
      armorLoot1.owned=false
      armorValue-=armorLoot1.value
    }
  }
}
function dialogue1 (){
if (s1dialogue==true){
  fill (0,0,0,60)
  rect (400,600,800,100)
  fill (255)
  textSize(17.5)
  textFont('times')
  text ("OH NO! You've fallen into a trap. It looks like your stuck in a labrynth. You're gonna have to find your way out!", 10,600)
}
}
function leaveStage1(){
  if (dude1.x>=800&& stage1==true){
  stage1 = false
  stage2 = true
  dude1.x = 2
  s1dialogue=false
  print("Stage2")
}
  if (dude1.y<=0&& stage1==true){
    stage1 = false
    stage3 = true
    dude1.y = 646
  s1dialogue=false
  print("stage3")
  }
  if (dude1.x<=0 && stage1==true){
  stage1 = false
  stage4 = true
  dude1.x=796
  s1dialogue=false
  print("stage4")
}
if (dude1.y>=650&&stage1==true){
  stage1 = false
  stage9 = true
  dude1.y = 4
  s1dialogue=false
  print("stage9")
}
}
function leaveStage2(){
  if (dude1.x<=0 && stage2 == true){
    stage2=false
    stage1=true
    dude1.x=796
    s1dialogue = false
    print("stage1")
  }
}
function leaveStage3(){
  if (dude1.y>=650 && stage3 == true){
  stage3 = false
  stage1 = true
  dude1.y=4
  print("stage1")
}
  if (dude1.x<=0 && stage3 == true){
    stage3 = false
    stage5 = true
    dude1.x = 796
    print("stage5")
  }
}
function leaveStage4(){
  if (dude1.x>=800&&stage4 == true){
    stage4 = false
    stage1 = true
    dude1.x = 4
    print("stage1")
  }
  if (dude1.y<=0&&stage4 == true){
    stage4 = false
    stage5 = true
    dude1.y = 646
    print("stage5")
  }
  if (dude1.x<=0&&stage4==true){
    stage4 = false
    stage7 = true
    dude1.x = 796
    print("stage7")
  }
  if (dude1.y<=185&&dude1.x>=650&&stage4 == true){
    easterEgg=true
    stage4== false
    dude1.x=400
    dude1.y=325
    moveable=false
if (easterEntered==false){
    coins+=50
    }
    easterEntered=true
  }
}
function leaveStage5(){
  if (dude1.x>=800&&stage5==true){
    stage5 = false
    stage3 = true
    dude1.x = 4
    print("stage3")
  }
  if (dude1.y>=650&&stage5==true){
    stage5 = false
    stage4 = true
    dude1.y = 4
    print("stage4")
  }
  if (dude1.x<=0&&stage5==true){
    stage5 = false
    stage6 = true
    dude1.x = 796
    print("stage6")
  }
}
function leaveStage6(){
  if (dude1.x>=800&&stage6==true){
    stage6=false
    stage5=true
    dude1.x = 4
    print("stage5")
  }
  if (dude1.y>=650&&stage6==true){
    stage6=false
    stage7=true
    dude1.y=4
    print("stage7")
  }
}
function leaveStage7(){
  if (dude1.y<=0&&stage7==true){
  stage7=false
  stage6=true
  dude1.y = 646
  print("stage6")
}
if (dude1.x>=800&&stage7==true){
  stage7=false
  stage4=true
  dude1.x = 4
  print("stage4")
}
if (dude1.y>=650&&stage7==true){
  stage7=false
  stage8=true
  dude1.y=4
  print("stage8")
}
}
function leaveStage8(){
  if(dude1.y<=0&&stage8==true){
    stage8=false
    stage7=true
    dude1.y=646
    print("stage7")
  }
  if(dude1.x>=800&&stage8==true){
    stage8=false
    stage9=true
    dude1.x=4
    print("stage9")
  }
}
function leaveStage9(){
  if(dude1.y<=0&&stage9==true){
    stage9 = false
    stage1 = true
    dude1.y=646
    print("stage1")
  }
  if(dude1.x<=0&&stage9==true){
    stage9 = false
    stage8 = true
    dude1.x = 796
    print("stage8")
  }
  if(dude1.x>=800&&stage9==true){
    stage9 = false
    stage10 = true
    dude1.x=4
    print("stage10")
  }
}
  function leaveStage10(){
  if(dude1.x<=0&&stage10==true){
    stage10=false
    stage9=true
    dude1.x=796
  }
}
function merchant(x,y){
fill(68, 55, 36)
rect (x,y,30,40,10)
fill(255)
triangle(x-7,y-20,x+7,y-20,x,y+15)
fill (198,134,66)
ellipse(x,y-33,25,30)
fill(130, 82, 1)
rect (x,y+30,100,40)
}
function merchantMenu(){
if (dude1.x>=560&&buying==false){
  buying=true
  moveable=false
  cursor=true
}
if (buying==true){
  fill(0,0,0,160)
  rect(400,325,800,650)
  textSize(25)
  fill(255)
  text("Merchant Menu",300,30)
  fill(255)
  ellipse(100,100,50,50)
  healthpotionicon(100,100)
  textSize(15)
  fill(255)
  text ("Health:$20",140,105)
}
}
function mouseClicked(){
if (buying==true&&coins>=20&&mouseX>=50&&mouseX<=150&&mouseY>=50&&mouseY<=150){
  healthpotions=healthpotions+1
  coins=coins-20
}
if (inventory==true&&mouseX>=50&&mouseX<=150&&mouseY>=50&&mouseY<=150&&health<=100&&healthpotions>=1){
  healthpotions=healthpotions-1
  health=health+10
}
if(stage8==true&&guard1Choosing==true&&mouseX>=195&&mouseX<=345&&mouseY>=587.5&&mouseY<=612.5&&coins>=60){
  guard1Choosing=false
  coins-=60
  moveable=true
  guard1Alive=false
}
if(stage8==true&&guard1Choosing==true&&mouseX>=75&&mouseX<=125&&mouseY>=587.5&&mouseY<=612.5){
  dude1.x-=25
  moveable=true
  guard1Choosing=false
  cursor=false
}
if(stage8==true&&guard1Choosing==true&&mouseX>=455&&mouseX<=605&&mouseY>=587.5&&mouseY<=612.5){
  moveable=true
  guard1Choosing=false
  cursor=false
  fightingGuard1=true
  guardhittimer=frameCount-50
}
}
function keyPressed(){
  if (easterEgg==true&&keyIsDown(27)){
    easterEgg=false
    stage4=true
    moveable=true
    dude1.y=150
  }
  if (buying==true&&keyIsDown(27)){
  buying=false
  cursor=false
  cursor=false
  moveable=true
  dude1.x-=5
}
  if (buying==false&&keyIsDown(73)){
    inventory=true
    moveable=false
    cursor=true
  }
  if (inventory==true&&keyIsDown(27)){
    inventory=false
    moveable=true
    cursor=false
  }
  if (stage3==true&&facingRight==true&&dude1.x+20<=s3minotaur.x+17&&dude1.x+20>=s3minotaur.x-17&&dude1.y<=s3minotaur.y+27&&dude1.y>=s3minotaur.y-27&&keyIsDown(16)&&minotaur1moving==false&&allowedHit==true){
    allowedHit=false
    hittimer = frameCount
    s3minotaur.health-=attackDamage
  }
  if (stage3==true&&facingLeft==true&&dude1.x-20<=s3minotaur.x+17&&dude1.x-20>=s3minotaur.x-17&&dude1.y<=s3minotaur.y+25&&dude1.y>=s3minotaur.y-35&&keyIsDown(16)&&minotaur1moving==false&&allowedHit==true){
    allowedHit=false
    hittimer = frameCount
    s3minotaur.health-=attackDamage
  }
  if (stage8==true&&fightingGuard1==true&&facingRight==true&&dude1.x+17>=450&&dude1.x+17<=480&&keyIsDown(16)&&allowedHit==true){
    allowedHit=false
    hittimer = frameCount
    guard1Health-=attackDamage
  }
  if (stage8==true&&fightingGuard1==true&&facingLeft==true&&dude1.x-17>=450&&dude1.x-17<=480&&keyIsDown(16)&&allowedHit==true){
    allowedHit=false
    hittimer = frameCount
    guard1Health-=attackDamage
  }
  if (keyIsDown(39)){
    facingRight=true
    facingLeft=false
  }
  if(keyIsDown(37)){
    facingRight=false
    facingLeft=true
  }
}
function personalinventory(){
  if (inventory==true){
    fill(0,0,0,160)
    rect(400,325,800,650)
    textSize(25)
    fill(255)
    text("Inventory",300,30)
    fill(255)
    ellipse(100,100,50,50)
    healthpotionicon(100,100)
    textSize(15)
    fill(255)
    text ("Health Potions:"+healthpotions,140,105)
    if (sword1.owned==true){
      fill(255)
      ellipse(100,200,50,50)
      swordIcon(100,205,(1/2))
    }
    if(armorLoot1.owned==true){
      fill(255)
      ellipse(100,300,50,50)
      stroke(8,146,208)
      strokeWeight(2)
      fill(8,146,208,150)
      ellipse(100,300,15,30)
      noStroke()
      fill(255)
      text (armorLoot1.durability,130,290)
      if(armorLoot1.durability<=0){
        armorLoot1.owned=false
        armorValue-=armorLoot1.value
      }
    }
  }
}
function healthpotionicon(x,y){
  fill("red")
  beginShape()
  vertex(x-5,y-15)
  vertex(x+5,y-15)
  vertex(x+5,y-10)
  vertex(x+10,y-5)
  vertex(x+10,y+15)
  vertex(x-10,y+15)
  vertex(x-10,y-5)
  vertex(x-5,y-10)
  vertex(x-5,y-15)
  endShape(CLOSE)
  textFont("times")
  textSize(10)
  fill(0)
  text ("+10",x-7,y+3)
}
function death (){
if (health<=0){
  fill(178, 29, 3)
  rect(400,325,800,650)
  textFont("times")
  fill(0)
  textSize(40)
  text ("Game Over",300,300)
}
}
function lavapit(){
  fill (178, 29, 3)
  rect (675,180,250,50)
  if (stage7==true&&dude1.x>=556&&dude1.x<=730&&dude1.y<=178&&dude1.y>=94){
    stage7 = false
    health=0
    textSize(25)
  }
}
function Hypotenuse(){
 hypotenuse= Math.sqrt(dx*dx+dy*dy);
  print (hypotenuse)
}
function updateMinotaurs3(){
  minotaur1moving = true
  dx = s3minotaur.x-dude1.x;
  dy = s3minotaur.y-dude1.y;
  Hypotenuse();
  sidespeed = -20*(dx/hypotenuse)
  vertspeed = -20*(dy/hypotenuse)
  allowedImpale=true
}
function triggerMinotaurs3(){
  if (stage3==true&&dude1.y<=575&&dude1.x>=75){
    triggered2=true
    if (triggered==true){
      updateMinotaurs3();
      triggered=false
    }
  }
  if (triggered2==true&&s3minotaur.alive==true){
    s3gatebottom.drawWall();
    s3gatebottom.blockDude();
    s3gatebottom.blockMinotaur()
    s3gateleft.drawWall();
    s3gateleft.blockDude();
    s3gateleft.blockMinotaur();
    fill(255);
    textSize(20)
    text("OH NO! It's a Minotaur!",330,25)
    text("Health:"+s3minotaur.health,380,45 )
  }
}
function hitdelay(){
  if (allowedHit==false&&frameCount==hittimer+60){
    allowedHit=true
  }
}
function swordIcon(x,y,s){
  fill(130, 82, 1)
  rect(x,y+(s*10),(s*6),(s*26))
  fill(255,215,0)
  ellipse(x,y+(s*25),(s*10),(s*10))
  triangle(x-(s*15),y-(s*7),x+(s*15),y-(s*7),x,y)
  fill(133,133,132)
  beginShape()
  vertex(x-(s*6),y-(s*7))
  vertex(x-(s*6),y-(s*45))
  vertex(x,y-(s*58))
  vertex(x+(s*6),y-(s*45))
  vertex(x+(s*6),y-(s*7))
  endShape(CLOSE)
}
function rotatedSwordRight(x,y,s){
  fill(130, 82, 1)
  rect(x-(s*10),y,(s*26),(s*6))
  fill(255,215,0)
  ellipse(x-(s*25),y,(s*10),(s*10))
  triangle(x+(s*7),y+(s*15),x+(s*7),y-(s*15),x,y)
  fill(133,133,132)
  beginShape()
  vertex(x+(s*7),y+(s*6))
  vertex(x+(s*45),y+(s*6))
  vertex(x+(s*58),y)
  vertex(x+(s*45),y-(s*6))
  vertex(x+(s*7),y-(s*6))
  endShape(CLOSE)
}
function rotatedSwordLeft(x,y,s){
  fill(130, 82, 1)
  rect(x+(s*10),y,(s*26),(s*6))
  fill(255,215,0)
  ellipse(x+(s*25),y,(s*10),(s*10))
  triangle(x-(s*7),y+(s*15),x-(s*7),y-(s*15),x,y)
  fill(133,133,132)
  beginShape()
  vertex(x-(s*7),y+(s*6))
  vertex(x-(s*45),y+(s*6))
  vertex(x-(s*58),y)
  vertex(x-(s*45),y-(s*6))
  vertex(x-(s*7),y-(s*6))
  endShape(CLOSE)
}
function keyIcon(x,y,s){
  fill(255,215,0)
  ellipse(x,y,(s*75),(s*75))
  rect(x,y-(s*100),(s*30),(s*150),(s*10))
  rect(x+(s*25),y-(s*160),(s*50),(s*20),(s*5))
  rect(x+(s*25),y-(s*120),(s*50),(s*20),(s*5))
  fill(31,89,78)
  ellipse(x,y,(s*45),(s*45))
}
function guard1(x,y){
if(guard1Alive==true){
  battleAxeIcon(x-20,y-10 ,1.5)
  mainCharacter(x,y,1)
  guardHelm(x,y-30,(1/4))
  if(dude1.x>=450&&stage8==true&&fightingGuard1==false){
    guard1Choosing=true
    cursor=true
  }
  if(guard1Choosing==true){
    moveable=false
    decision1()
  }
  guardAttack()
}
if(guard1Health<=0){
  guard1Alive=false
}
if(fightingGuard1==true){
  text("Health: "+guard1Health,100,325)
}
}
function decision1(){
  fill (0,0,0,60)
  rect (400,600,800,100)
  line(200,575,200,625)
  stroke(255)
  strokeWeight(1)
  noFill()
  rect(270,600,150,25)
  rect(530,600,150,25)
  rect(100,600,50,25)
  fill(255)
  textSize(15)
  textFont("times")
  text("Bribe the guard($60)",200,602)
  text("Fight the guard",460,602)
  text("<-leave",75,602)
}
function mainCharacter(x,y,s){
  noStroke()
  fill (131, 204, 226)
  ellipse(x,y-(30*s),(17*s),(17*s))
  fill(107,142,35)
  rect(x,y-(13*s),(27*s),(13*s),(5*s))
  rect(x-(10*s),y-(3*s),(7*s),(25*s),(5*s))
  rect(x+(10*s),y-(3*s),(7*s),(25*s),(5*s))
  rect(x,y,(11*s),(20*s))
  fill(128,128,0)
  rect(x,y+(13*s),(12*s),(6*s))
  beginShape()
  vertex(x-(6*s),y+(16*s))
  vertex(x-(7*s),y+(39*s))
  vertex(x-(1*s),y+(39*s))
  vertex(x-(1*s),y+(16*s))
  endShape(CLOSE)
  beginShape()
  vertex(x+(6*s),y+(16*s))
  vertex(x+(7*s),y+(39*s))
  vertex(x+(1*s),y+(39*s))
  vertex(x+(1*s),y+(16*s))
  endShape(CLOSE)
}
function minotaurIcon(x,y,s){
    fill(255)
     beginShape();
     vertex(x-(32.5*s), y-(40*s)); // first point
     bezierVertex(x-(72.5*s), y-(50*s), x-(52.5*s), y-(70*s), x-(82.5*s), y-(100*s));
     bezierVertex(x-(82.5*s), y-(70*s), x-(92.5*s), y-(30*s), x-(32.5*s), y-(10*s));
     endShape();
     beginShape();
     vertex(x+(32.5*s), y-(40*s)); // first point
     bezierVertex(x+(72.5*s), y-(50*s), x+(52.5*s), y-(70*s), x+(82.5*s), y-(100*s));
     bezierVertex(x+(82.5*s), y-(70*s), x+(92.5*s), y-(30*s), x+(32.5*s), y-(10*s));
     endShape();
     fill(124, 74, 8)
     beginShape();
     curveVertex(x+(32.5*s),y-(40*s))
     curveVertex(x-(32*s),y-(40*s))
     curveVertex(x-(27.5*s),y+(5*s))
     curveVertex(x-(20.5*s),y+(20*s))
     curveVertex(x-(15.5*s),y+(40*s))
     curveVertex(x+(15.5*s),y+(40*s))
     curveVertex(x+(20.5*s),y+(20*s))
     curveVertex(x+(27.5*s),y+(5*s))
     endShape(CLOSE)
     fill (255,0,0)
     arc(x-(17.5*s),y-(20*s),(18*s),(18*s),radians(20),radians(200))
     arc(x+(17.5*s),y-(20*s),(18*s),(18*s),radians(340),radians(160))
     noFill()
     strokeWeight((4*s))
     stroke(255, 204, 0)
     arc(x,y+(40*s),(20*s),(20*s),radians(310),radians(230))
}

function battleAxeIcon(x,y,s){
  if(rotatedAxe==false){
    fill(150)
    arc(x-(3*s),y-(10*s),20*s,20*s,radians(115),radians(215))
    stroke(130, 82, 1)
    strokeWeight(3.5*s)
    line(x+(3*s),y+(13*s),x-(3*s),y-(12*s))
  }
  if(rotatedAxe==true){
    fill(150)
    arc(x-(10*s),y,20*s,18*s,radians(40),radians(140))
    fill(130, 82, 1)
    rect(x,y,25*s,3.5*s,2*s,2*s)
  }
  noStroke()
}
function guardHelm(x,y,s){
  stroke(0)
  strokeWeight(s)
  fill(133,133,132)
  beginShape();
  vertex(x+(25*s), y+(45*s)); // first point
  bezierVertex(x+(40*s), y+(55*s), x+(45*s), y+(65*s),x+(45*s),y+(85*s));
  bezierVertex(x+(25*s),y+(55*s), x-(25*s), y+(75*s), x-(45*s), y+(105*s));
  bezierVertex(x-(55*s),y+(75*s), x-(35*s), y+(55*s), x-(25*s), y+(45*s));
  endShape();
  rect(x,y+(15*s),(40*s),(60*s))
  rect(x,y+(45*s),(60*s),(10*s),(10*s))
  arc(x,y,(80*s),(80*s) ,radians(120),radians(60))
  triangle(x-(5*s),y+(5*s),x-(55*s),y+(5*s),x-(35*s),y+(25*s))
  beginShape()
  vertex(x-(5*s),y+(5*s))
  bezierVertex(x-(15*s),y+(5*s),x-(35*s),y-(15*s),x-(30*s),y-(30*s))
  bezierVertex(x-(45*s),y-(20*s),x-(55*s),y-(10*s),x-(55*s),y+(5*s))
  endShape()
  ellipse(x-(5*s),y+(5*s),(10*s),(10*s))
  strokeWeight(2*s)
  curve(x-(20*s),y+(15*s),x-(50*s),y+(3*s),x-(34*s),y-(24*s),x-(22*s),y-(26*s))
  curve(x-(30*s),y+(15*s),x-(43*s),y+(s),x-(34*s),y-(14*s),x-(12*s),y-(26*s))
  curve(x-(25*s),y+(25*s),x-(37*s),y+(s),x-(31*s),y-(10*s),x-(25*s),y-(26*s))
  noStroke()
}
function guardAttack(){
  if(stage8==true&&fightingGuard1==true){
    if (rotatedAxe==false&&frameCount>=guardhittimer+random(75,275)){
      rotatedAxe=true
      guardanimationtimer=frameCount
      guardhittimer=frameCount
      if(dude1.x>=420&&dude1.x<=480){
        health-=(60-armorValue)
        if(armorLoot1.owned==true){
        armorLoot1.durability-=20
  }
}
}
if(frameCount>=guardanimationtimer+30){
  rotatedAxe=false
}
}
}

function finalGate(x,y,s){
  fill(130, 82, 1)
  strokeWeight(3)
  stroke(133,133,132)
  rect(x,y,(70*s),(60*s),(25*s),(25*s),0,0)
  stroke(0)
  line(x,y-(30*s),x,y+(30*s))
  fill(212, 175, 55)
  noStroke()
  ellipse(x-(15*s),y+(14*s),(7*s),(7*s))
  ellipse(x-(15*s),y-(3*s),(7*s),(7*s))
  ellipse(x-(15*s),y-(20*s),(7*s),(7*s))
  ellipse(x+(15*s),y+(14*s),(7*s),(7*s))
  ellipse(x+(15*s),y-(3*s),(7*s),(7*s))
  ellipse(x+(15*s),y-(20*s),(7*s),(7*s))
}
function fancyCursor(){
  if (cursor==true||mouseX>=800||mouseY>=650){
    noStroke()
    swordIcon(mouseX,mouseY,(1/3))
  }
}
window.addEventListener("keydown", function(e) {
    // space and arrow keys
    if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
        e.preventDefault();
    }
}, false);
function arrowKeys(x,y){
  noFill()
  strokeWeight(1.5)
  stroke(0)
  rect (x,y,35,35,7)
  rect (x-40,y,35,35,7)
  rect (x+40,y,35,35,7)
  rect (x,y-40,35,35,7)
  fill(0)
  triangle(x-6,y-4,x+6,y-4,x,y+5)
  triangle(x-6,y-36,x+6,y-36,x,y-45)
  triangle(x-36,y-6,x-36,y+6,x-45,y)
  triangle(x+36,y-6,x+36,y+6,x+45,y)
  noStroke()
}
function shiftKey(x,y){
  noFill()
  strokeWeight(1.5)
  stroke(0)
  rect(x,y,90,40,7)
  textAlign(CENTER)
  fill(0)
  textSize(20)
  text("Shift",x,y+5)
  noStroke()
  textAlign(LEFT)
}
function escKey(x,y){
  noFill()
  stroke(0)
  strokeWeight(1.5)
  rect(x,y,40,40,7)
  fill(0)
  textAlign(CENTER)
  text("Esc",x,y+5)
  textAlign(LEFT)
  noStroke()
}
function controls(){
  fill(0)
  textSize(30)
  text("Controls:",850,100)
  textSize(20)
  text("move:",850,130)
  text("attack:",1010,130)
  text("inventory:",1150,130)
  arrowKeys(900,200)
  shiftKey(1060,190)
  noFill()
  stroke(0)
  strokeWeight(1.5)
  rect(1175,190,40,40,7)
  fill(0)
  textAlign(CENTER)
  text("I",1175,195)
  textAlign(LEFT)
  noStroke()
  if (stage3==true){
    text("HINT:",900,300)
    text ("The minotaurs tough skin makes him very difficult",850,320)
    text("to kill. Trying to joust or stab him will do",850,345)
    text("NO DAMAGE. Instead, try a swift slice or thwack",850,370)
    text ("to the head. slices are much more affective ",850,395)
  }
if (inventory==true||buying==true||easterEgg==true){
textSize(20)
text ("Exit:",1010,240)
escKey(1030,270)
}
}
