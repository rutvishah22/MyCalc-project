let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = '';

for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('buttontext is', buttonText);                      //here X is for * , c for clearing the screen and same foe = theefoer we had to specify teire func but for + - / they are opertaors only , so no need to specify the funcs

        if (buttonText == 'X') {
            buttonText = "*";
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            // screen.value = eval(screenValue);
            // console.log(screenValue);
            // console.log(screen.value);
            if(screenValue.includes('sin(')){
                let init =screenValue.indexOf('(');
                let fin =screenValue.indexOf(')')

                let value= screenValue.substring(init+1, fin);
               
                screen.value = this.getnom(parseInt(value));

            }
            if(screenValue.includes('cos(')){
                let init =screenValue.indexOf('(');
                
                let fin =screenValue.indexOf(')')

                let value= screenValue.substring(init+1, fin);
               
                screen.value = this.getnom1(parseInt(value));

            }
            if(screenValue.includes('tan(')){
                let init =screenValue.indexOf('(');
                
                let fin =screenValue.indexOf(')')

                let value= screenValue.substring(init+1, fin);
               
                screen.value = this.getnom2(parseInt(value));

            }
            if(screenValue.includes('log(')){
                let init =screenValue.indexOf('(');
                
                let fin =screenValue.indexOf(')')

                let value= screenValue.substring(init+1, fin);
               
                screen.value = this.getnom3(parseInt(value));

            }
            else if(buttonText == '='){
                screen.value =eval(screenValue);
            }
        }
        else if (buttonText == '^') {
            buttonText="**"
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'Back') {
            let text = screenValue.length-1;
            screenValue = screenValue.slice(0, text);
            screen.value= screenValue;
           
        }
        else if (buttonText == 'sin') {
            buttonText="sin("
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'cos') {
            buttonText="cos("
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'tan') {
            buttonText="tan("
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else if (buttonText == 'log') {
            buttonText="log("
            screenValue += buttonText;
            screen.value = screenValue;
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })
}
function getnom(screenValue){

return(Math.sin(screenValue));
}

function getnom1(screenValue){

return(Math.cos(screenValue));
}

function getnom2(screenValue){

return(Math.tan(screenValue));
}
function getnom3(screenValue){

return(Math.log(screenValue));
}
// screen.value= screenValue;
// getnom(screenValue);