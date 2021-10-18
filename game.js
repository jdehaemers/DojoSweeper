var theDojo = [ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] ];
var dojoDiv = document.querySelector("#the-dojo");
    
// Creates the rows of buttons for this game
function render(theDojo) {
    var result = "";
    for(var i=0; i<theDojo.length; i++) {
        for(var j=0; j<theDojo[i].length; j++) {
            result += `<button class="tatami" onclick="howMany(${i}, ${j}, this)"></button>`;
        }
    }
    return result;
}

// Checks the value of an individual cell
function valueByIndex(i, j) {
    if(i<0 || i>=theDojo.length || j<0 || j>=theDojo[0].length) {
        return 0;
    } else {
        return theDojo[i][j];
    }
}

// Cyles through adjacent cells and applies valueByIndex function 
function howMany(i, j, element) {
    if(valueByIndex(i,j)>0){
        dojoDiv.innerHTML = render(theDojo);   
    }
    var sum = 0;
    for(var row=i-1; row<=i+1; row++) {
        for(var col=j-1; col<=j+1; col++){
            if(row===i && col===j) {
                sum += 0;
            } else {
                sum += valueByIndex(row, col);
            }
        }
    }
    element.innerText = sum;
}
    
var ninjaCount = 0
while(ninjaCount<15) {
    var spot = Math.floor(Math.random() * 100);
    var x = Math.floor(spot/10);
    var y = spot % 10;
    if(valueByIndex(x, y)==0) {
        theDojo[y][x] = 1;
        ninjaCount++;
    }
}
    
// start the game
// message to greet a user of the game
var style="color:cyan;font-size:1.5rem;font-weight:bold;";
console.log("%c" + "IF YOU ARE A DOJO STUDENT...", style);
console.log("%c" + "GOOD LUCK THIS IS A CHALLENGE!", style);
// shows the dojo for debugging purposes
console.table(theDojo);
// adds the rows of buttons into <div id="the-dojo"></div> 
dojoDiv.innerHTML = render(theDojo);    