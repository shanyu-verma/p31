class Plinko{
    constructor(x,y,r){
        var stat = {
            'isStatic' : true
        }
        this.body = Bodies.circle(x,y,r,stat);
        this.r = r;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}