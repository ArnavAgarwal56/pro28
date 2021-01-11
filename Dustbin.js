class Dustbin {  
    constructor( x, y, width, height){
        var options = {
            'isStatic' : true
        }
        this.body1 = Bodies.rectangle(x,y, width, height,options );
        this.body1.width = width
        this.body1.height = height 
	    World.add(world, this.body1);
        
        
   }
   display(){
       fill(102, 255, 255);
       stroke(102, 255, 255);
       rect(this.body1.position.x, this.body1.position.y,this.body1.width, this.body1.height)
       
   }
}