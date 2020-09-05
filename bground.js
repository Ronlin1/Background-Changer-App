let button = document.querySelector('button');
        let body = document.querySelector('body');
        let colors = ['cyan', 'blue', 'yellow', 'green', 'red', 'brown', 'aqua', 'pink', 'purple', 'white']

        button.addEventListener('click', changeBG)
         function changeBG(){
            let result = parseInt(Math.random()*colors.length);
                body.style.backgroundColor = colors[result];
                // body.style.display = 

                // Math.random(colors.length+1);
         }
 
        
// Other Working Example
//Choose a random color
/*const button = document.querySelector('button')
const body = document.querySelector('body')
const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']
//body.style.backgroundColor = 'violet'
button.addEventListener('click', changeBackground)

function changeBackground(){
//const colorIndex= parseInt(Math.random()*colors.length+1)
const colorIndex= parseInt(Math.random()*colors.length)
body.style.backgroundColor = colors[colorIndex];
}*/