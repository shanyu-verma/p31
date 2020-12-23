class Particle{
    constructor(x,y,r){
        var stat1 = {
            'isStatic' : false,
            //'density' : 1,
            //'friction' : 0.6
        }
        this.body = Bodies.circle(x,y,r,stat1);
        this.r = r;
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate (pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);

        fill(this.color);
        ellipseMode(CENTER);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}