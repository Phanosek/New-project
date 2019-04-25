function setup() {
    var Canvas1 = 700;
    var Canvas2 = 500;
    createCanvas(Canvas1, Canvas2);
  }
  
   function setup() {
    createCanvas(500, 500, WEBGL);
  }
  function draw() {
    
    background("blue");
    noFill();
    stroke(200, 200, 100);
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    square(60,80,80);
    
      noFill();
    stroke(150, 100, 200);
    rotateX(frameCount * 0.005);
    rotateY(frameCount * 0.005);
    box(120,80,150);
  }
  
  
  
  
  