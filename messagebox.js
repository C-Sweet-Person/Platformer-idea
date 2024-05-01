function messageBox(message) {
    let textYOffset = 0;
    textCutOff = 70;
    maxChars = 201;
    splitCount = message.length / 67;
    //The box itself.
    ctx.fillStyle = "black"
    ctx.fillRect(0, screenHeight - 90, screenWidth, screenHeight)
    ctx.fillStyle = "yellow"
    ctx.fillRect(5, screenHeight - 85, screenWidth - 10, 80)
    //The text inside
    ctx.fillStyle = "black";
    ctx.font = "20px veranda"
    //Gotta make sure the text all fits.
    if (message.length > maxChars)
    {
        throw new Error("Cannot exceed max characters of " + maxChars + "!")
    }
    for (let i = 0; i < splitCount; i++)
    {
        if (i === 0)
        ctx.fillText(message.substring(0,textCutOff), 8, screenHeight - 70 + textYOffset);
        else{
        textYOffset += 20;
        //Hacky solution to this
        let otherLine = message.substring(textCutOff,textCutOff*2).split("");
        if (otherLine[0] == " ")
        otherLine[0] = "";
        compLine = otherLine.join("")
        ctx.fillText(compLine, 8, screenHeight - 70 + textYOffset);
        textCutOff += 67
        }
        
    }

}