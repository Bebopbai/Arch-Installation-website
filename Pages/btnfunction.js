
document.querySelector('.ch-1').style.backgroundColor = localStorage.getItem('background-color');



/*
const getColorData = localStorage.getItem('background-color');
function testCase(selector){
    try {
        // Attempt to retrieve the background-color from localStorage
        

        // Log the retrieved value (for debugging purposes)
        console.log('Retrieved background-color:', getColorData);

        // Set the background color on the specified element
        document.querySelector(selector).style.backgroundColor = getColorData;

        // Rest of your code...
    } catch (error) {
        // Log any errors that occur during the getItem operation
        console.error('Error retrieving background-color:', error);

        // Optionally, provide a default background color or handle the error in another way
        document.querySelector(path).style.backgroundColor = "#FFFFFF"; // Default color
    } 

}

*/
var btnToggle = true;
function btnclicked(path){
    
       
    // Use the retrieved color or provide a default color if it's not set
    // console.log('Before getItem:', localStorage.getItem('background-color'));

    if (btnToggle){
        
        
        document.querySelector(path).style.backgroundColor = "#A7C68C";
        var bgcolor = document.querySelector(path).style.backgroundColor;
        localStorage.setItem("background-color", bgcolor);
        btnToggle = false;

    } 
    
    else {
        
        document.querySelector(path).style.backgroundColor = "#EAB2A0";
        var bgcolor = document.querySelector(path).style.backgroundColor;
        localStorage.setItem("background-color", bgcolor);
        btnToggle = true;
    }
    
    
}

function onClear() {
    localStorage.clear()
}



/*
var temp = document.querySelector(".two");

var computedStyle = window.getComputedStyle(temp);
var backgroundColor = computedStyle.backgroundColor;

const colorButton = document.querySelector(".two");


function checkColor() {
    const buttonColor = window.getComputedStyle(colorButton).backgroundColor;


    // Compare lowercase versions of the colors to handle case variations
    if (buttonColor === 'rgb(167, 198, 140)') {
        console.log('Button color is not green.');

    } else {
        console.log('Button color is not green.');
    }
}


setInterval(checkColor, 1000);
*/
