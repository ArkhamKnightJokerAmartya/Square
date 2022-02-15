noseX=0;
noseY=0;
difference=0;
right_wristX=0;
left_wristX=0;



function setup(){
  video=createCapture(VIDEO);
  video.size(550,500);

  canvas=createCanvas(550,550);
  canvas.position(560,150);

  poseNet=ml5.poseNet(video,modelLoaded);

  poseNet.on('pose',gotPoses);

}

function preload(){

}

function draw(){
   background("#00ff91");
   document.getElementById("square_side").innerHTML="Width and Height of the square="+difference+"px";
   fill("#7700ff");
   stroke("#7700ff");
   square(noseX,noseY,difference);
   
}


function modelLoaded(){
    console.log("model is loaded");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("noseX= "+noseX+" , "+"noseY= "+noseY);
        right_wristX=results[0].pose.rightWrist.x;
        left_wristX=results[0].pose.leftWrist.x;
        difference=floor(left_wristX-right_wristX);


        console.log("left_wrist= "+left_wristX+"right_wrist= "+right_wristX+"difference= "+difference);



        
        
    }
}