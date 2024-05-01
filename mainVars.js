screenWidth = 600;
screenHeight = 400;
//Moved
//Setting up canvas
let ctx;
let canvas;
let span;
window.onload = function()
{
    canvas = document.createElement("canvas");
    canvas.width = screenWidth;
    canvas.height = screenHeight;
    canvas.tabindex = 1;
    document.body.appendChild(canvas);
    ctx = canvas.getContext("2d");
    span = document.createElement("span")
    span.innerHTML = "L";
    document.body.appendChild(span)
}


//Variables
let msgBox = false;
let keysPressed = {};
let offsetX = 0;
let offsetY = 0;


framerate = 60;
//

//helper function
function isEmpty(obj) {
    return Object.keys(obj).length === 0;
}

//Function that draws objects
function drawObjects() {
    let objs = rooms[currentRoom]["objects"]
    for (let i = 0; i < objs.length; i++) {
        //Is it better if it's checking for image first?
        //I don't know yet.
        if ("image" in objs[i])
        {
            img = new Image()
            img.src = objs[i].image
            ctx.drawImage(img,objs[i].x,objs[i].y,objs[i].width,objs[i].height)
        }
        //Just do the rest of the code.
        else
        {
            ctx.fillStyle = "color" in objs[i] ? objs[i].color : "blue"
            ctx.fillRect(objs[i].x, objs[i].y, objs[i].width, objs[i].height)
        }
    }
    ctx.fillStyle = "black";
    ctx.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);

}