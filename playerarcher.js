class Archer{
    constructor(x,y,w,h){
        var pro = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,pro)
        this.w = w
        this.h = h
        World.add(world,this.body)
        this.img = loadImage("./assets/playerArcher.png")
        Matter.Body.setAngle(this.body,-90)

    }
    display(){
        
        if (keyIsDown(DOWN_ARROW)&& this.body.angle < - 73){
            this.body.angle +=1
            Matter.Body.setAngle(this.body, this.body.angle)
          }
        
          if (keyIsDown(UP_ARROW)&& this.body.angle > -103){
            this.body.angle -=1
            Matter.Body.setAngle(this.body, this.body.angle)
          }
        push()

     imageMode(CENTER)
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     fill("red")
     image(this.img,0,0,this.w,this.h)    
    pop()
    }   
   }
   