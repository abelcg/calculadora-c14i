let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

//console.log(buttons);

let screeValue = "";

for(let item of buttons) {
    item.addEventListener('click', (e) => { 
       // console.log(e.target.innerHTML);
        let buttonText = e.target.innerHTML;
        console.log('Button text is ' + buttonText);

        switch (buttonText) {
            case 'AC':
                screeValue = "";
                screen.value = screeValue;
                break;
            case '=':
                screeValue = "";
                screen.value = eval(screeValue);
                break;
            default:
                screeValue += buttonText;
                screen.value = screeValue;
                break;
        }

     })
}