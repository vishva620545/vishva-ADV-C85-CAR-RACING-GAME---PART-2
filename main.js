canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
car1_width=120;
car1_height=70;
car1_image="https://i.postimg.cc/9rqYz9HM/car1.png";
car1_x=10;
car1_y=10;

car2_width=120;
car2_height=70;
car2_image="https://i.postimg.cc/tnnW1Kff/car2.png";
car2_x=10;
car2_y=100;

bgimage="https://i.postimg.cc/bv5d35nK/racing.jpg";


function add(){
    bgimage_tag=new Image();
    bgimage_tag.onload=uploadBackground;
    bgimage_tag.src=bgimage;

    car1image_tag=new Image();
    car1image_tag.onload=uploadcar1;
    car1image_tag.src=car1_image;

    car2image_tag=new Image();
    car2image_tag.onload=uploadcar2;
    car2image_tag.src=car2_image;
}
function uploadBackground(){
    ctx.drawImage( bgimage_tag,0,0,canvas.width,canvas.height)
}
function  uploadcar1(){
    ctx.drawImage( car1image_tag,car1_x,car1_y,car1_width,car1_height)
}

function  uploadcar2(){
    ctx.drawImage( car2image_tag,car2_x,car2_y,car2_width,car2_height)
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed=e.keyCode;
    console.log(keyPressed);
      if(keyPressed == '38')
      {
         car1_up();
         console.log("up");
      }

      if(keyPressed == '40')
      {
        car1_down();
         console.log("down");
      }

      if(keyPressed == '37')
      {
        car1_left();
         console.log("left");
      }

      if(keyPressed == '39')
      {
        car1_right();
         console.log("right");
      }


      if(keyPressed == '87')
      {
         car2_up();
         console.log("w");
      }

      if(keyPressed == '83')
      {
        car2_down();
         console.log("s");
      }

      if(keyPressed == '65')
      {
        car2_left();
         console.log("a");
      }

      if(keyPressed == '68')
      {
        car2_right();
         console.log("d");
      }
}


function car1_up()
{
    if(car1_y>=0)
    {
        car1_y=car1_y-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_down()
{
    if(car1_y<=500)
    {
        car1_y=car1_y+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_left()
{
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car1_right()
{
    if(car1_x<=700)
    {
        car1_x=car1_x+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_up()
{
    if(car1_y>=0)
    {
        car1_y=car1_y-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_down()
{
    if(car1_y<=500)
    {
        car1_y=car1_y+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_left()
{
    if(car1_x>=0)
    {
        car1_x=car1_x-10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}

function car2_right()
{
    if(car1_x<=700)
    {
        car1_x=car1_x+10;
        uploadBackground();
        uploadcar1();
        uploadcar2();
    }
}
