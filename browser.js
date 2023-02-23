class browser{
    constructor(){
        this.schuifje;
        this.x = 650;
        this.y = 750;
        this.green = loadImage("akko_green.jpg");
        this.red = loadImage("akko_red.jpg");
        this.pink = loadImage("pom_pink.jpg");
        this.brown = loadImage("pom_brown.jpg");
        this.black = loadImage("akko_black.jpg");
    }

    teken(){
        this.schuifje = createSlider(1, 5, 1, 1);
        this.schuifje.position(this.x, this.y);
    }

    meet(){
        if(this.schuifje.value() == 1){
            image(this.green, 150, 250, 250, 250);
          }
          else if(this.schuifje.value() == 2){
            image(this.red, 350, 250, 250, 250);
          }
          else if(this.schuifje.value() == 3){
            image(this.pink, 550, 240, 274, 290);
          }
          else if(this.schuifje.value() == 4){
            image(this.brown, 750, 240, 274, 290);
          }
          else if(this.schuifje.value() == 5){
            image(this.black, 950, 240, 274, 290);
          }
    }
}