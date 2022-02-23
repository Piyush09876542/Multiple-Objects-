class ball { constructor(x, y, r) { var ball_options = { restitution: 0.95, } 
this.body = Bodies.circle(x,y,r,ball_options);
this.r = r; World.add(world, this.body);
} show() { var pos = this.body.position;
 ellipse(pos.x, pos.y, this.r); } }