var css =document.querySelector("h3");
var color1 = document.querySelector('.color1'); //class selector
var color2 = document.querySelector('.color2');
var bg = document.getElementById('grad');

// For testing
// // console.log(css);
// // console.log(color1);
// // console.log(color2);
// // console.log(grad);


//2. Get Color Value in console
color1.addEventListener("input",function(){
    console.log(color1.value); //color value
})

color2.addEventListener("input",function(){
    console.log(color1.value); //color value
})


// 3. Change color accordingly
function setGradient(){
    bg.style.background = 
    "linear-gradient(to right,"
    +color1.value
    +","
    +color2.value
    +")";
        
    css.textContent = bg.style.background+";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);