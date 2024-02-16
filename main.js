function preload(){

}
function setup(){
 canvas=createCanvas(300,300)
 canvas.center()

 camera=createCapture(VIDEO)
 camera.size(300,300)
 camera.hide()
}
function draw(){
 image(camera,0,0,300,300)
}