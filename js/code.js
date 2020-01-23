const canvas = document.getElementById('canvas');
const tlacitko = document.getElementById('tlacitko');
const changeButton = document.getElementById('changeButton');
const show = document.getElementById('show');
const showtwo = document.getElementById('showtwo');
const sizeshow = document.getElementById('sizeshow');
const capshow = document.getElementById('capshow');
const colorDown = document.getElementById('colorDown');
const colorUp = document.getElementById('colorUp');
const colorRight = document.getElementById('colorRight');
const colorLeft = document.getElementById('colorLeft');
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow');
const orange = document.getElementById('orange');
const white = document.getElementById('white');
const pink = document.getElementById('pink');
const purple = document.getElementById('purple');
const brown = document.getElementById('brown');
const skyblue = document.getElementById('skyblue');
const lightgreen= document.getElementById('lightgreen');
const lightskygreen = document.getElementById('lightskygreen');

const ctx = canvas.getContext('2d');

let height = canvas.height;
let width = canvas.width;

let cap = 5;
let change = 0;
let size = 20;
let lines = false;
let stop = false;
let rubber = false;
let chosen = 0;

capshow.innerHTML = "["+cap+"]";
sizeshow.innerHTML = "["+size+"]";

// default colors
let colorrrUp = "red";
let colorrrDown = "blue";
let colorrrRight = "green";
let colorrrLeft = "yellow";

// choose side of cube
colorUp.addEventListener('click', function(){
    chosen=1;
});
colorDown.addEventListener('click', function(){
    chosen=2;
});
colorLeft.addEventListener('click', function(){
    chosen=3;
});
colorRight.addEventListener('click', function(){
    chosen=4;
});

// nastavení barvy (extrémně neefektivní řešení, ale funguje to)

// first line
red.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="red";
        colorUp.style.background = "red";
    }else if(chosen==2){
        colorrrDown="red";
        colorDown.style.background = "red";
    }else if(chosen==3){
        colorrrLeft="red";
        colorLeft.style.background = "red";
    }else if(chosen==4){
        colorrrRight="red";
        colorRight.style.background = "red";
    }
})
blue.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="blue";
        colorUp.style.background = "blue";
    }else if(chosen==2){
        colorrrDown="blue";
        colorDown.style.background = "blue";
    }else if(chosen==3){
        colorrrLeft="blue";
        colorLeft.style.background = "blue";
    }else if(chosen==4){
        colorrrRight="blue";
        colorRight.style.background = "blue";
    }
})
yellow.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="yellow";
        colorUp.style.background = "yellow";
    }else if(chosen==2){
        colorrrDown="yellow";
        colorDown.style.background = "yellow";
    }else if(chosen==3){
        colorrrLeft="yellow";
        colorLeft.style.background = "yellow";
    }else if(chosen==4){
        colorrrRight="yellow";
        colorRight.style.background = "yellow";
    }
})
green.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="green";
        colorUp.style.background = "green";
    }else if(chosen==2){
        colorrrDown="green";
        colorDown.style.background = "green";
    }else if(chosen==3){
        colorrrLeft="green";
        colorLeft.style.background = "green";
    }else if(chosen==4){
        colorrrRight="green";
        colorRight.style.background = "green";
    }
})
orange.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="orange";
        colorUp.style.background = "orange";
    }else if(chosen==2){
        colorrrDown="orange";
        colorDown.style.background = "orange";
    }else if(chosen==3){
        colorrrLeft="orange";
        colorLeft.style.background = "orange";
    }else if(chosen==4){
        colorrrRight="orange";
        colorRight.style.background = "orange";
    }
})
white.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="white";
        colorUp.style.background = "white";
    }else if(chosen==2){
        colorrrDown="white";
        colorDown.style.background = "white";
    }else if(chosen==3){
        colorrrLeft="white";
        colorLeft.style.background = "white";
    }else if(chosen==4){
        colorrrRight="white";
        colorRight.style.background = "white";
    }
})

//second line
pink.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="pink";
        colorUp.style.background = "pink";
    }else if(chosen==2){
        colorrrDown="pink";
        colorDown.style.background = "pink";
    }else if(chosen==3){
        colorrrLeft="pink";
        colorLeft.style.background = "pink";
    }else if(chosen==4){
        colorrrRight="pink";
        colorRight.style.background = "pink";
    }
})
purple.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="purple";
        colorUp.style.background = "purple";
    }else if(chosen==2){
        colorrrDown="purple";
        colorDown.style.background = "purple";
    }else if(chosen==3){
        colorrrLeft="purple";
        colorLeft.style.background = "purple";
    }else if(chosen==4){
        colorrrRight="purple";
        colorRight.style.background = "purple";
    }
})
brown.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="brown";
        colorUp.style.background = "brown";
    }else if(chosen==2){
        colorrrDown="brown";
        colorDown.style.background = "brown";
    }else if(chosen==3){
        colorrrLeft="brown";
        colorLeft.style.background = "brown";
    }else if(chosen==4){
        colorrrRight="brown";
        colorRight.style.background = "brown";
    }
})
skyblue.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="skyblue";
        colorUp.style.background = "skyblue";
    }else if(chosen==2){
        colorrrDown="skyblue";
        colorDown.style.background = "skyblue";
    }else if(chosen==3){
        colorrrLeft="skyblue";
        colorLeft.style.background = "skyblue";
    }else if(chosen==4){
        colorrrRight="skyblue";
        colorRight.style.background = "skyblue";
    }
})
lightgreen.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="lightgreen";
        colorUp.style.background = "lightgreen";
    }else if(chosen==2){
        colorrrDown="lightgreen";
        colorDown.style.background = "lightgreen";
    }else if(chosen==3){
        colorrrLeft="lightgreen";
        colorLeft.style.background = "lightgreen";
    }else if(chosen==4){
        colorrrRight="lightgreen";
        colorRight.style.background = "lightgreen";
    }
})
lightseagreen.addEventListener('click', function(){
    if(chosen==1){
        colorrrUp="lightseagreen";
        colorUp.style.background = "lightseagreen";
    }else if(chosen==2){
        colorrrDown="lightseagreen";
        colorDown.style.background = "lightseagreen";
    }else if(chosen==3){
        colorrrLeft="lightseagreen";
        colorLeft.style.background = "lightseagreen";
    }else if(chosen==4){
        colorrrRight="lightseagreen";
        colorRight.style.background = "lightseagreen";
    }
})


// switch between full line and line with spaces
tlacitko.addEventListener('click', function() {
    if( lines == false){
        lines=true;
        tlacitko.innerHTML = "LINES ON";
    } else {
        lines=false;
        tlacitko.innerHTML = "LINES OFF";
    }
    console.log(lines);
});

// switch between manual, automatic and cursor mode
changeButton.addEventListener('click', function() {
    if(change==0){
        change++;
        changeButton.innerHTML = "Automatic";
    }else if(change==1){
        change++;
        changeButton.innerHTML = "Cursor";
    }else if(change==2){
        change=0;
        changeButton.innerHTML = "Manual";
    }

})

// cube
let object = {
    y: height-size,
    x: 0,
   paint: function(){
    ctx.fillStyle= 'white';
    ctx.fillRect(this.x, this.y, size, size);
   },
   undo: function(){
    ctx.clearRect(this.x, this.y, size, size);
   }
   
};

// lines
let line = {
    upPaint: function() {
    ctx.fillStyle= colorrrUp;
    ctx.fillRect(object.x,object.y+size,size,1);
    },
    downPaint: function() {
        ctx.fillStyle= colorrrDown;
        ctx.fillRect(object.x,object.y-1,size,1);
    },
    leftPaint: function() {
        ctx.fillStyle= colorrrLeft;
        ctx.fillRect(object.x+size,object.y,1,size);
    },
    rightPaint: function() {
        ctx.fillStyle= colorrrRight;
        ctx.fillRect(object.x-1,object.y,1,size);
    }
}

document.addEventListener('keydown', (e) => {
    if (e.code == "ArrowUp"){
        //automatic mode movement
        if(change==1){
            let jumpUp = setInterval(frameUp, 0.5);

            function frameUp(){
                if(object.y == 0){
                    clearInterval(jumpUp);
                } else {
                    object.undo();
    
                    if(lines==false && rubber!=true){
                        object.y--;
                    } else {
                        object.y-=cap;
                    }

                    if(object.y<=0){
                        clearInterval(jumpUp);
                    } 
                    object.paint();
                    if(rubber==false){
                        line.upPaint();
                    }
                }
            }
        }else if(change==0){
            //manual mode movement
            object.undo();
            if(lines==false && rubber!=true){
                object.y--;
            } else {
                object.y-=cap;
            }
            object.paint();
            if(rubber==false){
            line.upPaint();
        }
        }

    }
    if (e.code == "ArrowDown"){
        if(change==1){
            //automatic mode movement
            let jumpDown = setInterval(frameDown, 0.5);

            function frameDown(){
                if(object.y == (height-size)){
                    clearInterval(jumpDown);
                } else {
                    object.undo();
                    if(lines==false && rubber!=true){
                    object.y++;
                    }else{
                    object.y+=cap;
                    }
    
                    if(object.y >= (height-size)){
                        clearInterval(jumpDown);
                    } 
                    object.paint();
                if(rubber==false){
                    line.downPaint();
                }

                }
            }   
        }else if(change==0){
            //manual mode movement
            object.undo();
            if(lines==false && rubber!=true){
                object.y++;
                }else{
                object.y+=cap;
                }
                object.paint();
                if(rubber==false){
                    line.downPaint();
                }

        }
  
}

if (e.code == "ArrowRight"){
    if(change==1){
        //automatic mode movement
        let moveRight = setInterval(frameRight, 0.5);


        function frameRight(){
            if(object.x == (height-size)){
                clearInterval(moveRight);
            } else {
                object.undo();
                if(lines==false){
                    object.x++;
                }else{
                    object.x+=cap;
                }
    
                if(object.x >= (height-size)){
                    clearInterval(moveRight);
                } 
                object.paint();
                if(rubber==false){
                    line.rightPaint();
                }

            }
        } 
    }else if(change==0){
        //manual mode movement
        object.undo();
        if(lines==false){
            object.x++;
        }else{
            object.x+=cap;
        }
        object.paint();
        if(rubber==false){
            line.rightPaint(); 
        }

    }
   
}
if (e.code == "ArrowLeft"){
    if(change==1){
        //automatic mode movement

        let moveLeft = setInterval(frameLeft, 0.5);
            
        function frameLeft(){
            if(object.x == 0){
                clearInterval(moveLeft);
            } else {
                object.undo();
                if(lines==false){
                    object.x--;
                }else{
                   object.x-=cap; 
                }
                
                if(object.x <= 0){
                    clearInterval(moveLeft);
                }
                object.paint();
                if(rubber==false){
                    line.leftPaint();
                }
            }
        } 
    }else if(change==0){
        //manual mode movement
        object.undo();
        if(lines==false && rubber!=true){
            object.x--;
        }else{
           object.x-=cap; 
        }
        object.paint();
        if(rubber==false){
            line.leftPaint();
        }

    }    
}
    //smaller cursor on KeyO
if (e.code == "KeyO"){
    if(size>=2){
        object.undo();
        size--;
        sizeshow.innerHTML = "["+size+"]";
        object.paint();
    }   
}
    //bigger cursor on KeyP
if (e.code == "KeyP"){
    if(size<=49){
        object.undo();
        size++;
        sizeshow.innerHTML = "["+size+"]";
            object.paint();
}
}
    //toggle cursor movement (for cursor mode) on KeyX
if (e.code == "KeyX"){
    if(stop==false){
        stop=true;
        show.style.background = "green";
    }else if(stop==true){
        stop=false;
        show.style.background = "red";
    }
}
    //cler canvas on KeyR
if (e.code == "KeyR"){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
    //switch between rubber and brus on KeyC
if (e.code == "KeyC"){
    if(rubber==false){
        rubber=true;
        showtwo.style.background = "green";
    }else{
        rubber=false;
        showtwo.style.background = "red";
    }
}
    //smaller spaces between lines (for LINES ON mode) on KeyK
if(e.code == "KeyK"){
    if(cap>1){
        cap--;
        capshow.innerHTML = "["+cap+"]";
    }
}
     //bigger spaces between lines (for LINES ON mode) on KeyL
if(e.code == "KeyL"){
    if(cap<=99){
        cap++;
        capshow.innerHTML = "["+cap+"]";

    }
    
}
});

canvas.addEventListener('mousemove', function(ev) {
    //cursor mode movement
    if(change==2 && stop==false){
        object.undo();
        object.x = ev.offsetX - size/2;
        object.y = ev.offsetY - size/2;
        if(rubber==false){
            object.paint();
            line.leftPaint();
            line.rightPaint();
            line.upPaint();
            line.downPaint();
        }
    }
});