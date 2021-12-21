var canvas=new fabric.Canvas("mycanvas");

player_x=10;
player_y=10;

block_image_width=30;
block_image_height=30;

var player_object=" ";
var block_image_object=" ";

function player_update()
{
    fabric.Image.fromURL("player.png",function(Img)
    {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        block_image_object=Img;

        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    KeyPressed=e.keycode;
    console.log(KeyPressed);

    if(e.shiftKey == true && KeyPressed == '80')
    {
        console.log("P and Shift Pressed Together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(e.shiftKey && KeyPressed == '77')
    {
        console.log("M and Shift Pressed Together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById("current_width").innerHTML=block_image_width;
        document.getElementById("current_height").innerHTML=block_image_height;
    }
    if(KeyPressed == '38')
    {
        up();
        console.log("up");
    }
    if(KeyPressed == '40')
    {
        down();
        console.log("down");
    }
    if(KeyPressed == '37')
    {
        left();
        console.log("left");
    }
    if(KeyPressed == '39')
    {
        right();
        console.log("right");
    }
    if(KeyPressed == '87')
    {
        new_image('wall.jpg')
        console.log("W");
    }
    if(KeyPressed == '71')
    {
        new_image('ground.png')
        console.log("G");
    }
    if(KeyPressed == '76')
    {
        new_image('light_green.png')
        console.log("L");
    }
    if(KeyPressed == '84')
    {
        new_image('trunk.jpg')
        console.log("T");
    }
    if(KeyPressed == '82')
    {
        new_image('roof.jpg')
        console.log("R");
    }
    if(KeyPressed == '89')
    {
        new_image('yellow_wall.png')
        console.log("Y");
    }
    if(KeyPressed == '68')
    {
        new_image('dark_green.png')
        console.log("D");
    }
    if(KeyPressed == '85')
    {
        new_image('unique.png')
        console.log("U");
    }
    if(KeyPressed == '67')
    {
        new_image('cloud.jpg')
        console.log("C");
    }
}