//TODO: Maybe work on animation. The way animation would work is that.
//An object would have a list of animations (either named or only one
//per character).

//Hypothetically be structured like so:
//name: "Man"
//x: num
//y: num
//width: num
//height: num
//animations :
/*
[
{
name: "idle",
frames: [img1]
},
name: "run",
frames: [img1,img2,img3,img4]
}
{}
]
*/
rooms = [
    {
        name: "Room 1",
        objects:
            [
                {
                    name: "sky",
                    x: 0,
                    y: 0,
                    width: screenWidth,
                    height: screenHeight,
                    color: "lightblue"
                },


                {
                    name: "npc1",
                    x: screenWidth / 2 + 50,
                    y: screenHeight / 2 + 40,
                    width: 35,
                    height: 15,
                    message: "Hey, get out of here.",
                    color: "green",
                    bounce: true

                },

                {
                    name: "npc2",
                    x: screenWidth / 2 - 150,
                    y: screenHeight / 2 + 40,
                    width: 35,
                    height: 15,
                    message: "Welcome to this demo. Not much in this game, mostly testing stuff.",
                    bounce: true
                },
                {
                    name: "ground",
                    x: 0,
                    y: screenHeight / 2 + 55,
                    width: screenWidth,
                    height: screenHeight,
                    color: "orange"
                },

            ]
    },
    {
        name: "Room 2",
        objects:
        [{
            name: "sky",
            x: 0,
            y: 0,
            width: screenWidth,
            height: screenHeight,
            color: "lightblue"
        },  
        {
            name: "npc2",
            x: screenWidth / 2 - 150,
            y: screenHeight / 2 + 40,
            width: 35,
            height: 15,
            message: "Eventually I'll add a way to show these as sprites. That'll be something at least.",
            bounce: true,
            color: "purple"
        },
        {
            name: "npc2",
            x: screenWidth - 60,
            y: screenHeight / 2 + 20,
            width: 35,
            height: 35,
            message: "Its a me, Mario.",
            bounce: true,
            color: "purple",
            image: "images/mario.png"
        },
  
    {
        name: "ground",
        x: 0,
        y: screenHeight / 2 + 55,
        width: screenWidth,
        height: screenHeight,
        color: "red"
    },]
},
{
name: "Room 3 - Animation test",
objects:
[
    {
        name: "ground",
        x: 0,
        y: screenHeight / 2 + 55,
        width: screenWidth,
        height: screenHeight,
        color: "red",
        image: "images/grass.png"
    },
]
},
{}]