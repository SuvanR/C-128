sound = " ";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() {
    sound = loadSound("music.mp3");
}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("Posenet is Intialized");
}

function draw() {
    image(video, 0, 0, 400, 300);
}

function play() {
    sound.play();
    sound.setvolume(1);
    sound.rate(1);
}

function gotPoses(results){
    if(results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    leftWristY = results[0].pose.leftWrist.y;
    console.log("left Wrist X = "+leftWristX+"left wrist y = "+leftWristY);

    rightWristX = results[0].pose.rightWrist.x;
    rightWrsitY = results[0].pose.rightWrist.y;
    console.log("right wrist x = "+rightWristX+"right wrist y = "+rightWristY);
    }
}
