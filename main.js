function setup() {
    video = createCapture(VIDEO)
    video.size(550,550)
    canvas = createCanvas(550, 550)
    canvas.position(580, 150)
    poseNet = ml5.poseNet(video, modelloaded)
    poseNet.on('pose',gotposes)
    
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results)
    }
}

function modelloaded() {
    console.log("PoseNet Is Loaded")
}

function draw() {
    background("#49f29b")
}