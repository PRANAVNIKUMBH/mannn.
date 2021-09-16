class Arrow{
    constructor(x,y,w,h,a){
        var pro = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,pro)
        this.w = w
        this.h = h
        this.a = a
        World.add(world,this.body)
        this.img = loadImage("./assets/arrow.png")
        Matter.Body.setAngle(this.body,this.a)

    }
    display(){
        
        push()

     imageMode(CENTER)
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
     image(this.img,0,0,this.w,this.h)    
    pop()
    }   
   }