// var planeElement = document.getElementById('body1');
// console.log("hello",planeElement);
// var planeInAnimation = planeElement.animate(
//   [
//     { transform: 'translate(-1000px,-400px)' },
//     { transform: 'translate(600px,-200px)' },
//     { transform: 'translate(800px,0px)' },
//     { transform: 'translate(800px,200px)' },
//     { transform: 'translate(2000px,200px)' },
//   ],
//   {
//     duration: 10000,
//     iterations: Infinity,
//   }
// )


var bodyElement = document.getElementById('body1');
var speed= 2000;
function speeddown()
{
    speed=speed+100;
    console.log("speed",speed)
    speed1.innerHTML= "Speed  " + speed;
    update();
}
function speedup()
{
    if (speed>!1000)
    speed=speed-100;
    speed1.innerHTML= "Speed  " + speed;
    console.log("speed",speed)
    update();
}
var bodyleftpos = parseInt(window.getComputedStyle(body1, null).getPropertyValue('left'))
var bodyrightpos = parseInt(window.getComputedStyle(body1, null).getPropertyValue('right'))
var bodytoppos = parseInt(window.getComputedStyle(body1, null).getPropertyValue('top'))
var bodybottompos = parseInt(window.getComputedStyle(body1, null).getPropertyValue('bottom'))

document.onkeydown = function (e) {
    console.log("key pres", e.keyCode)

    //for position top
    if (e.keyCode == 38&&bodytoppos!=233) {
        bodytoppos = bodytoppos - 55;
        bodyElement.style.top = bodytoppos + 'px';


    }
    //for left position
    if (e.keyCode == 37&&bodyleftpos!=8) {
        bodyleftpos = bodyleftpos - 40;
        bodyElement.style.left = bodyleftpos + 'px';


    }
    //for right position
    if (e.keyCode == 39&&bodyleftpos!=408) {
        bodyleftpos = bodyleftpos + 40;
        bodyElement.style.left = bodyleftpos + 'px';

        //bodyElement.style.right = bodyrightpos +20+'px';
    }
    //for down postion
    if (e.keyCode == 40&&bodytoppos!=288) {
        bodytoppos = bodytoppos + 55;
        bodyElement.style.top = bodytoppos + 'px';
    }


    console.log("left", window.getComputedStyle(body1, null).getPropertyValue('left'))
    //console.log("right", parseInt(window.getComputedStyle(body1, null).getPropertyValue('right'))+30)
    console.log("top", window.getComputedStyle(body1, null).getPropertyValue('top'))
    // console.log("bottom", window.getComputedStyle(body1, null).getPropertyValue('bottom'))


}

// console.log("left",window.getComputedStyle(jump1,null).getPropertyValue('left'))
// console.log("right",window.getComputedStyle(jump1,null).getPropertyValue('right'))
// console.log("top",window.getComputedStyle(jump1,null).getPropertyValue('top'))
// console.log("bottom",window.getComputedStyle(jump1,null).getPropertyValue('bottom'))
function update(){


    var cloudElement = document.getElementById('jump1');
speed1.innerHTML= "Speed  " + speed;
var animatedElem = cloudElement.animate(
    [
        { transform: 'translate(500px,0)' },
        { transform: 'translate(400px,0)' },
        { transform: 'translate(300px,0)' },
        { transform: 'translate(200px,0)' },
        { transform: 'translate(100px,0)' },
        { transform: 'translate(0px,0)' }
    ],
    {
        duration: speed,
        iterations: Infinity,

    }
);


var cloudElement2 = document.getElementById('jump2');

var animatedElem = cloudElement2.animate(
    [
        { transform: 'translate(0px,0)' },
        { transform: 'translate(100px,0)' },
        { transform: 'translate(200px,0)' },
        { transform: 'translate(300px,0)' },
        { transform: 'translate(400px,0)' },
        { transform: 'translate(500px,0)' }
    ],
    {
        duration: speed,
        iterations: Infinity,

    }
);


}