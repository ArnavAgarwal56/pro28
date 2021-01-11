class Paper {  
    constructor(x, y, height, width){
      var options = {
       'restitution':0.3,
       'friction':0.5,
       'density':1.2,
       'isStatic' : false
        }

    this.body = Bodies.rectangle(x, y,height, width, options);
    this.width = width
    this.height = height;
    this.image = loadImage("Images/paper.png");
	  World.add(world, this.body);
       
        
  }
   display(){
    
  

    push();
    translate(this.body.position.x, this.body.position.y);
    imageMode(CENTER);
    image(this.image, 0, 0,this.width, this.height);
    pop();
  }
}
