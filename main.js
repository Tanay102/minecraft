var canvas = new fabric.Canvas('myCanvas');


var blockImageWidth = 30;
var blockImageHeight = 30;

var player_object = "";
var block_object= "";
var player_x = 100;
var player_y = 100;

function player_update()
{
    canvas.remove(player_object);
    fabric.Image.fromURL('player.png', function(img)
    {
        player_object = img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set(
            {
                top:player_y,
                left:player_x
        });
    });
    canvas.add(player_object);
}


function new_block(block_img)
{
    console.log("inside the function");
    fabric.Image.fromURL(block_img, function(img)
    {
        console.log("function2");
        block_object = img;
        block_object.scaleToWidth(blockImageWidth);
        block_object.scaleToHeight(blockImageHeight);
        block_object.set(
            {
                top:player_y,
                left:player_x
        });
    });
    canvas.add(block_object);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
console.log(e);
key_pressed = e.keyCode;
console.log(key_pressed);

if (e.shiftKey == true && key_pressed == '80')
{
    console.log('p and shif are pressed together');
    blockImageWidth = blockImageWidth+10;
    blockImageHeight = blockImageHeight+10;
    document.getElementById("current_width").innerHTML=blockImageWidth;
    document.getElementById("current_height").innerHTML=blockImageHeight;
}

if (e.shiftKey == true && key_pressed == '77')
{
    console.log('m and shif are pressed together');
    blockImageWidth = blockImageWidth-10;
    blockImageHeight = blockImageHeight-10;
    document.getElementById("current_width").innerHTML=blockImageWidth;
    document.getElementById("current_height").innerHTML=blockImageHeight;
}

if(key_pressed == '37')
{
    console.log("left");
}

if(key_pressed == '38')
{
    console.log("up");
}

if(key_pressed == '39')
{
    console.log("right");
}

if(key_pressed == '40')
{
    console.log("down");
}

if(key_pressed == '67')
{
    console.log("c");
    new_block('cloud.jpg');
}

if(key_pressed == '68')
{
    console.log("d");
    new_block('dark_green.png');
}

if(key_pressed == '71')
{
    console.log("g");
    new_block('ground.png');
}

if(key_pressed == '76')
{
    console.log("l");
    new_block('light_green.png');
}

if(key_pressed == '82')
{
    console.log("r");
    new_block('roof.jpg');
}

if(key_pressed == '84')
{
    console.log("t");
    new_block('trunk.jpg');
}

if(key_pressed == '85')
{
    console.log("u");
    new_block('unique.png');
}

if(key_pressed == '87')
{
    console.log("w");
    new_block('wall.jpg');
}

if(key_pressed == '89')
{
    console.log("y");
    new_block('yellow_wall.png');
}

if (key_pressed == "37")
{
    left();
    console.log("left");
}

if (key_pressed == "38")
{
    up();
    console.log("up");
}

if (key_pressed == "39")
{
    right();
    console.log("right");
}

if (key_pressed == "40")
{
    down();
    console.log("down");
}
}

function left()
{
    if (player_x > 0)
    {
        player_x = player_x - blockImageWidth;
        canvas.remove(player_object);
        player_update();
    }
}

function up()
{
    if (player_y > 0)
    {
        player_y = player_y - blockImageHeight;
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if (player_x < 850)
    {
        player_x = player_x + blockImageWidth;
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if (player_y < 450)
    {
        player_y = player_y + blockImageHeight;
        canvas.remove(player_object);
        player_update();
    }
}



