var buttons = document.querySelectorAll("#button2menu");


var btnToggle = true
buttons.forEach((button) => {
    let lastname = sessionStorage.getItem("key" + button);
    console.log(button.style.backgroundColor = lastname)

    button.addEventListener('click', () => {
        
        if (btnToggle){
            button.style.backgroundColor = "lightgreen";
            sessionStorage.setItem("key" + button, "lightgreen");
            btnToggle = false
        }
        else {
            button.style.backgroundColor = null
            sessionStorage.setItem("key" + button, "null");
            btnToggle = true
        }
    })
})