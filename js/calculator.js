let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

//console.log(buttons);

let screenValue = "";

/* const handleChange = (event) => {
    console.log(event.target.value)
}

screen.addEventListener('change', handleChange); */

for(let item of buttons) {
    item.addEventListener('click', (e) => { 
        let buttonText = e.target.innerHTML;
        console.log('Button text is ' + buttonText);

        switch (buttonText) {
            case 'X':
                buttonText = "*";
                console.log('Button text is ' + buttonText);
                screenValue += buttonText;
                screen.value = screenValue;
                break;
            case 'AC':
                screenValue = "";
                screen.value = screenValue;
                break;
            case '√':
                buttonText = "sqrt(";
                console.log('Button text is ' + buttonText);
                screenValue += buttonText;
                screen.value = screenValue;
                break;
            case 'π':
                buttonText = "3.1416";
                console.log('Button text is ' + buttonText);
                screenValue += buttonText;
                screen.value = screenValue;
                break;
            case '%':
                buttonText = "/100*";
                console.log('Button text is ' + buttonText);
                screenValue += buttonText;
                screen.value = screenValue;
                break;
            case '=':
                screen.value = math.evaluate(screenValue);
                break;
            case '⌫':
                screenValue = screenValue.substring(0, screen.value.length - 1);
                screen.value = screenValue;
                break;
            default:
                screenValue += buttonText;
                screen.value = screenValue;
                break;
        }

     })
}