let display = document.getElementById('main');
let buttons = document.querySelectorAll('#inputs')

let buttonArray = Array.from(buttons)
let string = '';



buttonArray.forEach((btn) => {

    btn.addEventListener("click", (e) => {

        if (e.target.value == "DEL") {


            string = string.slice(0, string.length - 1)
            console.log(string)
            display.value = string

        } else if (e.target.value == "AC") {

            string = ''
            display.value = string
            console.log(e.target.value)

        } else if (e.target.value == "=") {

            string = eval(string)
            display.value = string

        } 
        else {

            string = string + e.target.value
            display.value = string
            console.log(string);

        }
    })


})
