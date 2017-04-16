/*
**
** Simple functions tests the width and height to see if
** your device is in portrait or landscape mode.
**
** @return void
*/

window.checkSizeAndOrientation = function() {
    // Setting up environment varibles
    var width      = window.screen.width,
        height     = window.screen.height,
        isPortrait = width < height,
        text       = "",
        element    = document.getElementById("orientationContent");

    text = "<p> The screen's size is (w x h): <br> " + width + " x " + height
            + "</p> <br>";
    text += "<p> The screen orientation is: " + (isPortrait) ? "Portrait"
                                                             : "Landscape";
    //let textnode = document.createTextNode(text);
    //element.appendChild(textnode);
    element.innerHTML = text;
};

window.onresize = function() {
    window.checkSizeAndOrientation();
};

window.checkSizeAndOrientation();
