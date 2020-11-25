class Oliver{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            friction:0.4
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("Screenshot (305).png")
        this.width = width
        this.height = height
        World.add(world,this.body)
    }

    display(){
        var position = this.body.position
        rectMode(CENTER)
        fill("blue")
        rect(position.x,position.y,this.width,this.height)
        image(this.image, this.body.position.x - 120, this.body.position.y  - 60,250,250)
    }
}