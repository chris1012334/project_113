function setup()
{
   canvas = createCanvas(640,480);
   canvas.center();
   video = createCapture(VIDEO);
   video.hide(); 
}
function draw()
{
    image(video,230,150,220,200);
    fill(145,175,254);
    stroke(145,175,254);
    circle(50,50,80);
    circle(50,430,80);
    circle(590,50,80);
    circle(590,430,80);
    fill(123,134,235);
    stroke(123,176,235);
rect(90,40,460,20);
rect(90,420,460,20);
rect(40,90,20,300);
rect(580,90,20,300);
}