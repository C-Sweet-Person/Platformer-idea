//TODO: Turn this into multiple screens using a SCENE system.
//Probably a JSON obj containing a list of objects and
//A Name. 
//Setting up canvas

curMsg = "";
console.log(rooms)
currentRoom = 0;
framerate = 60;
//Set up graphics
state = titleloop
gameStateLoop = window.setInterval(state, 1000 / framerate)

function gameloop() {
    ctx.fillStyle = "white";
    curMsg = ""
    roomObjs = rooms[currentRoom]["objects"];
    ctx.fillRect(0, 0, screenWidth, screenHeight)
    paddleDraw();
    drawObjects()
    boundsCheck(paddle, canvas)
    for (let i = 0; i < roomObjs.length; i++)
    {
        if (objDetect(paddle,roomObjs[i]) && (roomObjs[i].name != "ground" && roomObjs[i].name != "sky"))
        {
            if ("message" in rooms[currentRoom]["objects"][i])
            curMsg = rooms[currentRoom]["objects"][i].message
        }
    }
    messageBox(curMsg)

}
function titleloop()
{
    //Title
    ctx.fillStyle = "white";
    ctx.fillStyle = "black";
    ctx.fillRect(0,0,screenWidth,screenHeight);
    ctx.fillStyle = "white";
    ctx.font = "40px Veranda";

    ctx.fillText("A brisk walk",20,screenHeight/2-30)
    ctx.font = "20px Arial";
    ctx.fillText("Press Enter to Start",20,screenHeight/2+100)
    if (keysPressed[13])
    {
        console.log(keysPressed)
        paddle.x = 1;
        clearInterval(gameStateLoop)
        state = gameloop;
        gameStateLoop = window.setInterval(state, 1000 / framerate)

    }
    //New game button
}
function drawObjects() {
    let objs = rooms[currentRoom]["objects"]
    for (let i = 0; i < objs.length; i++) {
        if ("image" in objs[i])
        {
            img = new Image()
            img.src = objs[i].image
            ctx.drawImage(img,objs[i].x,objs[i].y,objs[i].width,objs[i].height)
        }
        else
        {
            ctx.fillStyle = "color" in objs[i] ? objs[i].color : "blue"
            ctx.fillRect(objs[i].x, objs[i].y, objs[i].width, objs[i].height)
        }
    }
    ctx.fillStyle = "black";
    ctx.fillRect(paddle.x,paddle.y,paddle.width,paddle.height);

}
function boundsCheck(obj, screen) {
    let check = false;
    if ((obj.x + obj.width > screen.width)) {
        if (!isEmpty(rooms[currentRoom+1]) && typeof rooms[currentRoom+1] !== "undefined")
        {
        currentRoom += 1
        paddle.x = 0
        }
        else
        {
            obj.x -= 5;
        }
    }
    else if (obj.x < 0)
    {
        if (typeof rooms[currentRoom-1] !== "undefined" && !isEmpty(rooms[currentRoom-1])  )
        {
        currentRoom -= 1
        paddle.x = screenWidth - paddle.width
        }
        else
        {
            obj.x += 5;
        }
    }
    if ((obj.y + obj.height > screen.height || obj.y < 0)) {
        obj.y < 0 ? obj.y += 5 : obj.y -= 5;

    }
}

function objDetect(a, b) {
    if (
        a.x < b.x + b.width &&
        a.x + a.width > b.x &&
        a.y < b.y + b.height &&
        a.y + a.height > b.y
    ) {
        return true
        }
    

}

//Single frame error, how to fix
