let im1;
let im2;
let im3;
let im4;
let im5;
let im6;
let im7;



function preload() { 
im1 = loadImage('1.jpg');
im2 = loadImage('2.jpg');
im3 = loadImage('3.jpg');
im4 = loadImage('4.jpg');
im5 = loadImage('5.jpg');
im6 = loadImage('6.jpg');
im7 = loadImage('7.jpg');


}


function setup() {
createCanvas(400, 500);
//strokeWeight(4);
background(150);

//frameRate(30);

}

let n=0;
let m=0;

function draw() { 
  //let n=0;

/*if(mouseIsPressed===true && mouseX>0 && mouseY>0 && mouseX<200 && mouseY<250){
m--;}
if(mouseIsPressed===true && mouseX>200 && mouseY>0 && mouseX<400 && mouseY<250){
m++;}*/
       
//let n=0;
//rect(300,400,100,100);
//fill(0);
    //circle(200,250,100);
   //else{n=0;}

   //fill(0);
   // n=0;
  /*rect(190,440,20,20,5);
  rect(190,480,20,20,5);
  rect(170,460,20,20,5);
  rect(210,460,20,20,5);*/
  

  if(m===0){
    image(im1, 0, 0, 400, 500, 380+n, 350+n, 1530-(2*n), 1530-(2*n)); 
    //circle(200,250,100); 
    if(mouseIsPressed===true && mouseX>190 && mouseY>440 && mouseX<210 && mouseY<460){
    n+=3;}
    if(mouseIsPressed===true && mouseX>190 && mouseY>480 && mouseX<210 && mouseY<500){
    n-=3;}
    if(n>550){n=550;}
    if(n<0){n=0;}
    }

  if(m===1){
    image(im2, 0, 0, 400, 500, 50+n, 780+n, 1800-(2*n), 1800-(2*n));  
    if(mouseIsPressed===true && mouseX>190 && mouseY>440 && mouseX<210 && mouseY<460){
    n+=3;}
    if(mouseIsPressed===true && mouseX>190 && mouseY>480 && mouseX<210 && mouseY<500){
    n-=3;}
    if(n>600){n=600;}
    if(n<-50){n=-50;}
  } //else{n=0;} 

  if(m===2){
    image(im3, 0, 0, 400, 500, 60+n, 550+n, 1700-(2*n), 1700-(2*n));  
    if(mouseIsPressed===true && mouseX>190 && mouseY>440 && mouseX<210 && mouseY<460){
    n+=3;}
    if(mouseIsPressed===true && mouseX>190 && mouseY>480 && mouseX<210 && mouseY<500){
    n-=3;}
    if(n>600){n=600;}
    if(n<0){n=0;}  
  }

  if(m===3){
    image(im4, 0, 0, 400, 500, 160+n, 710+n, 2000-(2*n), 2000-(2*n));  
    if(mouseIsPressed===true && mouseX>190 && mouseY>440 && mouseX<210 && mouseY<460){
    n+=3;}
    if(mouseIsPressed===true && mouseX>190 && mouseY>480 && mouseX<210 && mouseY<500){
    n-=3;}
    if(n>700){n=700;}
    if(n<-100){n=-100;} 
  } 

  if(m===4){
    image(im5, 0, 0, 400, 500, n, n, 1700-(2*n), 1700-(2*n));  
    if(mouseIsPressed===true && mouseX>190 && mouseY>440 && mouseX<210 && mouseY<460){
    n+=3;}
    if(mouseIsPressed===true && mouseX>190 && mouseY>480 && mouseX<210 && mouseY<500){
    n-=3;}
    if(n>550){n=550;}
    if(n<0){n=0;}
  }

  if(m===5){
    image(im6, 0, 0, 400, 500, n, 700+n, 1800-(2*n), 1800-(2*n));  
    if(mouseIsPressed===true && mouseX>190 && mouseY>440 && mouseX<210 && mouseY<460){
    n+=3;}
    if(mouseIsPressed===true && mouseX>190 && mouseY>480 && mouseX<210 && mouseY<500){
    n-=3;}
    if(n>600){n=600;}
    if(n<0){n=0;}
  }

  if(m===6){
    image(im7, 0, 0, 400, 500, 100+n, 800+n, 1700-(2*n), 1700-(2*n));  
    if(mouseIsPressed===true && mouseX>190 && mouseY>440 && mouseX<210 && mouseY<460){
    n+=3;}
    if(mouseIsPressed===true && mouseX>190 && mouseY>480 && mouseX<210 && mouseY<500){
    n-=3;}
    if(n>600){n=600;}
    if(n<-10){n=-10;}
  }

 /* if(m===7){ 
    image(im8, 0, 0, 400, 500, n, 100+n, 2000-(2*n), 2000-(2*n));
    if(mouseIsPressed===true && mouseX>0 && mouseY>250 && mouseX<200 && mouseY<500){
    n+=3;}
    if(mouseIsPressed===true && mouseX>200 && mouseY>250 && mouseX<400 && mouseY<500){
    n-=3;}
    if(n>800){n=800;}
    if(n<300){n=300;}
  }*/

 

  if(m<0){m=6;}
  if(m>6){m=0;}
  
  fill(0);
  rect(190,440,20,20,5);
  rect(190,480,20,20,5);
  rect(170,460,20,20,5);
  rect(210,460,20,20,5);
  fill(255);
  triangle(195,455,200,444,205,455);
  triangle(185,465,174,470,185,475);
  triangle(215,465,226,470,215,475);
  triangle(195,485,200,496,205,485);

  //rect(0,0,400,500);
  //circle(200,250,100);
  //else{n=0;}

}

function mousePressed(){
  if(mouseX>170 && mouseY>460 && mouseX<190 && mouseY<480){
  m--;
  n=0;}
  
  if(mouseX>210 && mouseY>460 && mouseX<230 && mouseY<480){
  m++;
  n=0;}
   
}
/*rect(190,440,20,20,5);
  rect(190,480,20,20,5);
  rect(170,460,20,20,5);
  rect(210,460,20,20,5);*/