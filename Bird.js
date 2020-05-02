class Bird extends BaseClass {
  constructor(x,y){
    var options = {
      'restitution':0.8,
      'friction':0,
      'density':10.0
  }

    super(x,y,90,90 , options);
    this.image = loadImage("bird.png");
    this.smokeImage = loadImage("smoke.png");
    this.trajectory =[];
  }

 
     

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
