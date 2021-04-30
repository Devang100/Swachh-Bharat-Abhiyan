class garbage{
    constructor(x, y,r) {
        var options = {
            'restitution':0.3,
            'friction':0,
            'density':0.5,
            'addStatic':true
        }
    
    this.x=x;
    this.y=y;
    this.r=r;
    this.image = loadImage("paper.png");
    this.body=Bodies.circle(x, y, r , options);
     World.add(world, this.body);
    }

display()
{
        
        var gPos=this.body.position;		
        //this.x = mouseX;
        //this.y = mouseY;
        push()
        translate(gPos.x, gPos.y);
        imageMode(CENTER)
        //strokeWeight(4);
        fill("green")
        image(this.image,0,0,150);
        pop()
        
}

}
