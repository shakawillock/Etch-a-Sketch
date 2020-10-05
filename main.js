let container = document.querySelector('.container');
let btnClear = document.querySelector('.btn-clear');

function changeColor() {
    let divs = Array.from(container.children);

    divs.forEach(div => {
        div.addEventListener('mouseover', () => {
            let r = Math.floor(Math.random() * 255);
            let g = Math.floor(Math.random() * 255);
            let b = Math.floor(Math.random() * 255);
            
            let randomColor = "rgb(" + r + "," + g + "," + b + ")";
            div.style.backgroundColor = randomColor;
        });
    }); 
}

for (let i = 1; i <= 256; i++) {
    let div = document.createElement('div');

    div.className = 'flex-item';
    container.style.gridTemplateColumns = `repeat(16, 1fr)`;
    container.appendChild(div);

    changeColor();
}

btnClear.addEventListener('click', () => {
    container.innerHTML = '';
    
    let userInput = +prompt('Please enter how many squares you want');

    while (true) {
        if (userInput > 100) {
            userInput = +prompt('Please enter how many squares you want');
        } else if (userInput <= 100) {
            break;
        }
    }

    let grid = userInput * userInput;

    for (let i = 1; i <= grid; i++) {
        let div = document.createElement('div');
        div.className = 'flex-item';
        container.style.gridTemplateColumns = `repeat(${userInput}, 1fr)`;
        container.appendChild(div);
    }

    changeColor();
});
