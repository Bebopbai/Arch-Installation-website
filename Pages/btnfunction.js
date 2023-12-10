

//document.querySelector('button').style.backgroundColor = localStorage.getbutton(storedValue);



var buttons = document.querySelectorAll("#button1menu");

// Check the stored value in sessionStorage
var storedColor = sessionStorage.getItem("key2");

// Check if the stored color is "lightgreen" and show an alert
var checkmarks = document.querySelectorAll(".check-mark-icon")


if (storedColor === "#acf799") {
    checkmarks.forEach(checkmark => {
        checkmarks[0].style.filter = "invert(76%) sepia(9%) saturate(1373%) hue-rotate(326deg) brightness(103%) contrast(84%)";
        console.log("Setting width for checkmark");
    });
}




buttons.forEach((button) => {
    let btnToggle = true;
    // Set the initial background color based on the stored value
    button.style.backgroundColor = storedColor;

    button.addEventListener('click', () => {
        if (btnToggle) {
            button.style.backgroundColor = "#acf799";
            sessionStorage.setItem("key2", "#acf799");
            btnToggle = false;
        } else {
            button.style.backgroundColor = null; // Set to null to remove inline style
            sessionStorage.setItem("key2", "null");
            btnToggle = true;
        }
        
    });
});


/*
buttons.forEach((button) => {
    var btnToggle = true
    
    button.addEventListener('click', () => {
        
        if (btnToggle){
            button.style.backgroundColor = "pink";
            //var bgcolor = button.id.style.backgroundColor;
            //localStorage.setbutton("storedValue", bgcolor);
            btnToggle = false
        }
        else{
            button.style.backgroundColor = "lightblue";
            //var bgcolor2 = button.id.style.backgroundColor;
            //localStorage.setbutton("storedValue", bgcolor2);
            btnToggle = true
        }
    })
})

*/












/*
const getColorData = localStorage.getbutton('background-color');
function testCase(selector){
    try {
        // Attempt to retrieve the background-color from localStorage
        

        // Log the retrieved value (for debugging purposes)
        console.log('Retrieved background-color:', getColorData);

        // Set the background color on the specified element
        document.querySelector(selector).style.backgroundColor = getColorData;

        // Rest of your code...
    } catch (error) {
        // Log any errors that occur during the getbutton operation
        console.error('Error retrieving background-color:', error);

        // Optionally, provide a default background color or handle the error in another way
        document.querySelector(path).style.backgroundColor = "#FFFFFF"; // Default color
    } 

}


var btnToggle = true;
function btnclicked(path){
    
       
    // Use the retrieved color or provide a default color if it's not set
    // console.log('Before getbutton:', localStorage.getbutton('background-color'));

    if (btnToggle){
        
        
        document.querySelector(path).style.backgroundColor = "#A7C68C";
        var bgcolor = document.querySelector(path).style.backgroundColor;
        localStorage.setbutton("background-color", bgcolor);
        btnToggle = false;

    } 
    
    else {
        
        document.querySelector(path).style.backgroundColor = "#EAB2A0";
        var bgcolor = document.querySelector(path).style.backgroundColor;
        localStorage.setbutton("background-color", bgcolor);
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


